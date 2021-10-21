<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Indicador;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\IndicadorRepository;

class IndicadorController extends Controller
{
    private IndicadorRepository $indicadorRepository;

    public function __construct(IndicadorRepository $indicadorRepository)
    {
        $this->indicadorRepository = $indicadorRepository;
    }

    /**
     * Mostrar todos os indicatores.
     *
     * @param null
     *
     * @return JsonResponse
     */

    public function getAll(): JsonResponse
    {
        $indicadores = $this->indicadorRepository->all();
        return $this->successResponse(
            'Indicadores retornados com sucesso',
            $indicadores
        );
    }

    /**
     * Adicionar um novo indicador
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }

            $data = $this->getData($request);
            $indicador = $this->indicadorRepository->create($data);
            return $this->successResponse(
			    'Indicador '.$indicador->id_indicador.' foi adicionado',
			    $this->transform($indicador)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Obter um indicador especificado pelo id
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function get($id): JsonResponse
    {
        try {
            $indicador = $this->indicadorRepository->findById($id);
            return $this->successResponse(
                'Indicador retornado com sucesso',
                $indicador
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Atualizar um indicador especificado pelo id
     *
     * @param int $id
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function update($id, Request $request): JsonResponse
    {

        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }

            $data = $this->getData($request);

            $indicador = $this->indicadorRepository->update($id,$data);

            return $this->successResponse(
			    'Indicador was successfully updated.',
			    $this->transform($indicador)
			);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Unexpected error occurred while trying to process your request.'.$exception->getMessage());
        }
    }

    /**
     * Remover um indicador da base de dados especificado pelo id
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        try {
            $indicador = $this->indicadorRepository->deleteById($id);

            return $this->successResponse(
			    'Indicador '.$id.' deletado com sucesso',
			    $this->transform($indicador)
			);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado'.$exception);
        }
    }

    /**
     * Cria uma instancia de validador com as regras definidas
     *
     * @param Request $request
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function getValidator(Request $request): \Illuminate\Contracts\Validation\Validator
    {
        $rules = [
            'id_indicador' => 'string|min:1',
            'nome' => 'string|min:1|nullable',
            'descricao' => 'string|min:1|nullable',
            'dimensao_id_dimensao' => 'int|min:1|nullable',
        ];

        return Validator::make($request->all(), $rules);
    }


    /**
     * Pegar e validar os dados da requisição
     *
     * @param Request $request
     * @return array
     */
    protected function getData(Request $request): array
    {
        $rules = [
            'id_indicador' => 'string|min:1|nullable',
            'nome' => 'string|min:1|nullable',
            'descricao' => 'string|min:1|nullable',
            'dimensao_id_dimensao' => 'int|min:1|nullable',
        ];

        return $request->validate($rules);
    }

    /**
     * Transformar o indicador em um array
     *
     * @param Indicador $indicador
     *
     * @return array
     */
    protected function transform(Indicador $indicador): array
    {
        return [
            'id_indicador' => $indicador->id_indicador,
            'nome' => $indicador->nome,
            'descricao' => $indicador->descricao,
            'dimensao_id_dimensao' => $indicador->dimensao_id_dimensao,
        ];
    }


}
