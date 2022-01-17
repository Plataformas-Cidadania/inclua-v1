<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Pergunta;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\PerguntaRepository;

class PerguntaController extends Controller
{

    private PerguntaRepository $repo;
    private $rules = [
        'letra' => 'string|nullable',
        'descricao' => 'string|min:1|nullable',
        'legenda' => 'string|min:1|nullable',
        'vl_minimo' => 'int',
        'vl_maximo' => 'int',
        'tipo' => 'int',
        'nao_se_aplica' => 'boolean|nullable',
        'inverter' => 'boolean',
        'vl_subPergunta' => 'int|nullable',
        'id_perguntaPai' => 'int|min:1|nullable',
        'id_indicador' => 'int|min:1'
    ];
    public function __construct(PerguntaRepository $repo)
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
       // $res = $this->repo->all();
        $res = $this->repo->getAll();
        return $this->successResponse(
            'Perguntas retornadas com sucesso',
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
            #Log::info($data);
            return $this->successResponse(
			    ''.$res->id_pergunta.' foi adicionado',
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
     * Obter indicadores especificados por um id de dimensao
     *
     * @param int $id_indicador
     *
     * @return JsonResponse
     */
    public function getPerguntasPorIdIndicador($id_indicador): JsonResponse
    {
        try {
            $res = $this->repo->getPerguntasPorIdIndicador($id_indicador);
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
     * @param Pergunta $res
     *
     * @return array
     */
    protected function transform(Pergunta $res): array
    {
          return [
            'id_pergunta' => $res->id_pergunta,
            'nome' => $res->nome,
            'descricao' => $res->descricao,
            'vl_minimo' => $res->vl_minimo,
            'vl_medio' => $res->vl_medio,
            'vl_maximo' => $res->vl_maximo,
            'vl_subPergunta' => $res->vl_subPergunta,
            'id_indicador' => $res->id_indicador
        ];
    }






}
