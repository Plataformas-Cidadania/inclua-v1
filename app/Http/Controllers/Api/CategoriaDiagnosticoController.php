<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\CategoriaDiagnostico;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\CategoriaDiagnosticoRepository;

class CategoriaDiagnosticoController extends Controller
{
    private CategoriaDiagnosticoRepository $repo;
    private $rules = [
    'id_categoria' => 'int|min:1',
    'id_diagnostico' => 'string',
    ];
    public function __construct(CategoriaDiagnosticoRepository $repo)
    {
        $this->repo = $repo;
    }


    /**
     * Obter especificado pelo id do diagnostico
     * @param int $id_diagnostico
     *
     * @return JsonResponse
     */
    public function getAllCategoriaPorDiagnostico($id_diagnostico): JsonResponse
    {
        try {

            $res = $this->repo->getAllByIdDiagnostico($id_diagnostico);
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
			    ''.$res->id_categoria.','.$res->id_diagnostico.' foi adicionado',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
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
     * @param CategoriaDiagnostico $res
     *
     * @return array
     */
    protected function transform(CategoriaDiagnostico $res): array
    {
        return [
            'id_categoria' => $res->id_categoria,
            'id_diagnostico' => $res->id_diagnostico
        ];
    }


}
