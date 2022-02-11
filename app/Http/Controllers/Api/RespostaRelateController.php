<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\RespostaRelate;
use App\Repository\RelateRepository;
use App\Repository\RespostaRelateRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Exception;

class RespostaRelateController extends Controller
{
    private RespostaRelateRepository $repo;
    private $rules = [
        'descricao' => 'string',
        'status' => 'int',
        'id_pergunta' => 'int|min:1|',
        'id_user' => 'int|nullable'
    ];
    public function __construct(RespostaRelateRepository $repo)
    {
        $this->repo = $repo;
    }

    public function getAll(): JsonResponse
    {
        $res = $this->repo->all();
        return $this->successResponse(
            'Recurso retornados com sucesso',
            $res
        );
    }

    /**
     * Obter uma lista de resposta do relate por usuário
     *
     * @param int $id_user
     *
     * @return JsonResponse
    */
    public function getAllRespostaRelatePorUser($id_user): JsonResponse
    {
        try {
            $res = $this->repo->getAllRespostaRelatePorUser($id_user);
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
     * Obter uma lista de resposta do relate por pergunta
     *
     * @param int $id_pergunta
     *
     * @return JsonResponse
    */
    public function getAllRespostaRelatePorPergunta($id_pergunta): JsonResponse
    {
        try {
            $res = $this->repo->getAllRespostaRelatePorPergunta($id_pergunta);
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
     * Obter uma lista de resposta do relate por pergunta e user
     *
     * @param int $id_pergunta
     * @param int $id_user
     *
     * @return JsonResponse
    */
    public function getAllRespostaRelate_pergunta_user($id_pergunta, $id_user): JsonResponse
    {
        try {
            $res = $this->repo->getAllRespostaRelate_pergunta_user($id_pergunta, $id_user);
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
     * Adicionar vários respostas para um Relate
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function insereRespostas(Request $request): JsonResponse
    {
        $relateRepo = (new RelateRepository(app('App\Models\Relate')));
        try {
            $data = $request->all();
            $relate_id = (new RelateController($relateRepo))->store();
            $res = $this->repo->storeMany($relate_id,$data);
            return $this->successResponse(
                'Respostas adicionadas',
                $res
            );
        } catch (Exception $exception) {
            return $this->errorResponse($exception);
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
     * @param RespostaRelate $model
     *
     * @return array
     */
    protected function transform(RespostaRelate $model): array
    {
        return [
            'id_resposta' => $model->id_resposta,
            'descricao' => $model->descricao,
            'status' => $model->status,
            'id_pergunta' => $model->id_pergunta,
            'id_user' => $model->id_user
        ];
    }


}
