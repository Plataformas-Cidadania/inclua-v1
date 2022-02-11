<?php

namespace App\Http\Controllers\Api;

use App\Models\Relate;
use App\Models\Dimensao;
use App\Models\Resposta;
use App\Repository\RelateRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;

class RelateController extends Controller
{
    private RelateRepository $repo;
    private $rules = [
        'id_relate' => 'T_STRING'
    ];
    public function __construct(RelateRepository $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Adicionar um novo
     *
     * @param Request $request
     *
     * @return String
     */
    public function store(): String
    {
        try {
            $res = $this->repo->createRelate();
            return $res->id_relate;
        } catch (Exception $exception) {
            return $this->errorResponse($exception);
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
     * @param Relate $model
     *
     * @return array
     */
    protected function transform(Relate $model): array
    {
        return [
            'id_relate' => $model->id_relate,
        ];
    }


}
