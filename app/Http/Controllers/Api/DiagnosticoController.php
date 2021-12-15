<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Diagnostico;
use App\Repository\DiagnosticoRepository;
use App\Repository\DimensaoRepository;
use App\Repository\RespostaRepository;
use Faker\Provider\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;

class DiagnosticoController extends Controller
{
    private DiagnosticoRepository $repo;
    private $rules = [
        'id_diagnostico' => 'string'
    ];
    public function __construct(DiagnosticoRepository $repo)
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
            $res = $this->repo->createDiagnostico();
            return $res->id_diagnostico;
        } catch (Exception $exception) {
            return $this->errorResponse($exception);
        }
    }

    public function calcularPontuacao($id_dimensao,$id_diagnostico): String
    {
        try {
            $res = $this->repo->getRespostaPorDiagnostico($id_diagnostico);

            $indicador_com_perguntas = $res[0]->pergunta->indicador;
            //dd($indicador_com_perguntas->perguntas);
            // obter o somatorio de vl_minimo e vl_maximo para este indicador
            $count_vl_minimo = 0;
            $count_vl_maximo = 0;
            foreach ($indicador_com_perguntas->perguntas as $pergunta){
                $count_vl_minimo += $pergunta->vl_minimo;
                $count_vl_maximo += $pergunta->vl_maximo;
            }

            //dd($count_vl_minimo,$count_vl_maximo);

            // pegar dimensao e seus indicadores e conseguir o vl_alto e vl_baixo
            $dimensao_das_respostas = $res[0]->pergunta->indicador->dimensao;
            dd($dimensao_das_respostas);
            //TODO


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
     * @param Diagnostico $model
     *
     * @return array
     */
    protected function transform(Diagnostico $model): array
    {
        return [
            'id_diagnostico' => $model->id_diagnostico,
        ];
    }


}
