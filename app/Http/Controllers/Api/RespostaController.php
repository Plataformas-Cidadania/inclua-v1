<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Http\Controllers\Api\DiagnosticoController;
use App\Repository\DiagnosticoRepository;
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
        'id_pergunta' => 'int|min:1|',
        'pontuacao' => 'string',
        'id_diagnostico' => 'string'
    ];
    public function __construct(RespostaRepository $repo)
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
     * Adicionar vários respostas para um diagnóstico
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function insereRespostas(Request $request): JsonResponse
    {
        $diagRepo = (new DiagnosticoRepository(app('App\Models\Diagnostico')));
        try {
            $data = $request->all();
            $diagnostico_id = (new DiagnosticoController($diagRepo))->store();
            $res = $this->repo->storeMany($diagnostico_id,$data);
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
     * @return
     */
    public function getbyDiagnosticoId($id_diagnostico)
    {
        try {
            $res = $this->repo->findByDiagnosticoId($id_diagnostico);
            return $res;
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
     * @param Resposta $model
     *
     * @return array
     */
    protected function transform(Resposta $model): array
    {
        return [
            'id_resposta' => $model->id_resposta,
            'pontuacao' => $model->pontuacao,
            'id_pergunta' => $model->id_pergunta,
            'id_diagnostico' => $model->id_diagnostico,
        ];
    }


}
