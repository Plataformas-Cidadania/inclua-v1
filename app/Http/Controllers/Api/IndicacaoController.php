<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Indicacao;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\IndicacaoRepository;

class IndicacaoController extends Controller
{
    private IndicacaoRepository $repo;
    private $rules = [
    'id_indicador' => 'int|min:1',
    'id_recurso' => 'int|min:1',
    ];
    public function __construct(IndicacaoRepository $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Mostrar todos.
     *
     * @param null
     *
     * @return JsonResponse
     */

    public function getAll(): JsonResponse
    {
        $res = $this->repo->all();
        return $this->successResponse(
            'Indicacao retornadas com sucesso',
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

            $res = $this->repo->createCompositeId($data);

            return $this->successResponse(
			    ''.$res->id_indicador.','.$res->id_recurso.' foi adicionado',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Obter especificado pelo id
     *
     * @param int $firstId
     *
     * @param int $secondId
     *
     * @return JsonResponse
     */
    public function get(int $firstId, int $secondId): JsonResponse
    {
        try {

            $res = $this->repo->findByCompositeId($firstId,$secondId);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse($exception);
        }
    }

    /**
     * Obter especificado pelo id do recurso
     *
     * @param int $idRecurso
     *
     * @return JsonResponse
     */
    public function getAllByIdRecurso(int $idRecurso): JsonResponse
    {
        try {

            $res = $this->repo->getAllByIdRecurso($idRecurso);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse($exception);
        }
    }


    /**
     * Remover da base de dados especificado pelo id
     *
     * @param int $firstId
     *
     * @param int $secondId
     *
     *
     * @return JsonResponse
     */
    public function destroy($firstId,$secondId): JsonResponse
    {
        try {
            $res = $this->repo->deleteByCompositeId($firstId,$secondId);

            return $this->successResponse(
			    ''.$firstId.','.$secondId.' deletado com sucesso',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse($exception);
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
     * @param Indicacao $res
     *
     * @return array
     */
    protected function transform(Indicacao $res): array
    {
        return [
            'id_indicador' => $res->id_indicador,
            'id_recurso' => $res->id_recurso
        ];
    }


}
