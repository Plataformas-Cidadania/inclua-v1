<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Depoimento;
use App\Repository\DepoimentoRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;

class DepoimentoController extends Controller
{
    private DepoimentoRepository $repo;
    private $rules = [
        'descricao' => 'string',
        'status' => 'int|min:1|',
        'icone' => 'int|min:1|',
        'id_user' => 'int|nullable'
    ];
    public function __construct(DepoimentoRepository $repo)
    {
        $this->repo = $repo;
    }

    public function getAll(): JsonResponse
    {
        $res = $this->repo->all();
        return $this->successResponse(
            'Depoimentos retornados com sucesso',
            $res
        );
    }

    /**
     * Obter uma lista de depoimentos por usuário
     *
     * @param int $id_user
     *
     * @return JsonResponse
    */
    public function getAllDepoimentosPorUser($id_user): JsonResponse
    {
        try {
            $res = $this->repo->getAllDepoimentosPorUser($id_user);
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
            #Log::info($data);
            return $this->successResponse(
			    ''.$res->id_resposta.' foi adicionado',
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
     *Perguntaest
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
     * @param Depoimento $model
     *
     * @return array
     */
    protected function transform(Depoimento $model): array
    {
        return [
            'id_resposta' => $model->id_resposta,
            'descricao' => $model->descricao,
            'status' => $model->status,
            'icone' => $model->id_icone,
            'id_user' => $model->id_user
        ];
    }


}
