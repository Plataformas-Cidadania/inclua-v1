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
    private IndicadorRepository $repo;
    private $rules = [
    'id_indicador' => 'string|min:1',
    'nome' => 'string|min:1|nullable',
    'descricao' => 'string|min:1|nullable',
    'dimensao_id_dimensao' => 'int|min:1|nullable',
    ];
    public function __construct(IndicadorRepository $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Mostrar todos os Indicadores.
     *
     * @param null
     *
     * @return JsonResponse
     */

    public function getAll(): JsonResponse
    {
        $res = $this->repo->all();
        return $this->successResponse(
            'Indicadores retornados com sucesso',
            $res
        );
    }

    /**
     * Adicionar um novo
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
            $res = $this->repo->create($data);
            return $this->successResponse(
			    ''.$res->id_indicador.' foi adicionado',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Obter especificado pelo id
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function get($id): JsonResponse
    {
        try {
            $res = $this->repo->findById($id);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Atualizar especificado pelo id
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

            $res = $this->repo->update($id,$data);

            return $this->successResponse(
			    'Atualizado com sucesso.',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception->getMessage());
        }
    }

    /**
     * Remover da base de dados especificado pelo id
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        try {
            $res = $this->repo->deleteById($id);

            return $this->successResponse(
			    ''.$id.' deletado com sucesso',
			    $this->transform($res)
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
        return Validator::make($request->all(), $this->rules);
    }


    /**
     * Pegar e validar os dados da requisição
     *
     * @param Request $request
     * @return array
     */
    protected function getData(Request $request): array
    {
        return $request->validate($this->rules);
    }

    /**
     * Transformar em um array
     *
     * @param Indicador $res
     *
     * @return array
     */
    protected function transform(Indicador $res): array
    {
        return [
            'id_indicador' => $res->id_indicador,
            'nome' => $res->nome,
            'descricao' => $res->descricao,
            'dimensao_id_dimensao' => $res->dimensao_id_dimensao,
        ];
    }


}