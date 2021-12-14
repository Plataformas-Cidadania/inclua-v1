<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Resposta;
use App\Repository\RespostaRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;

class RespostaController extends Controller
{
    private RespostaRepository $repo;
    private $rules = [
    ];
    public function __construct(RespostaRepository $repo)
    {
        $this->repo = $repo;
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
			    'Resposta '.$res->id_dimensao.' foi adicionada',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Adicionar vários respostas para um diagnóstico
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function storeMany(Request $request): JsonResponse
    {
        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }

            $data = $this->getData($request);
            $res = $this->repo->create($data);
            return $this->successResponse(
                'Resposta '.$res->id_dimensao.' foi adicionada',
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
    public function getbyDiagnosticoId($id_diagnostico): JsonResponse
    {
        try {
            $res = $this->repo->findByDiagnosticoId($id_diagnostico);
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
     * @param Dimensao $model
     *
     * @return array
     */
    protected function transform(Dimensao $model): array
    {
        return [
            'id_resposta' => $model->id_diagnostico,
            'pontuacao' => $model->id_diagnostico,
            'id_pergunta' => $model->id_diagnostico,
            'id_diagnostico' => $model->id_diagnostico,
        ];
    }


}
