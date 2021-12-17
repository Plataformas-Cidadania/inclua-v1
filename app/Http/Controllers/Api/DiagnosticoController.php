<?php

namespace App\Http\Controllers\Api;

use App\Models\Diagnostico;
use App\Models\Dimensao;
use App\Models\Resposta;
use App\Repository\DiagnosticoRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;

class DiagnosticoController extends Controller
{
    private DiagnosticoRepository $repo;
    private $rules = [
        'id_diagnostico' => 'T_STRING'
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

    public function calcularPontuacao($id_dimensao,$id_diagnostico)
    {
        try {
            /*
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
            //return $dimensao_das_respostas;
            //dd($dimensao_das_respostas->indicadores);
            //TODO

            */
            //Teste
            $dimensao = Dimensao::find($id_dimensao);
            $indicadores = $dimensao->indicadores;
            $vet_res_indicadores = [];
            $pontuacao_dimensao = 0;
            foreach ($indicadores as $indicador)
            {
                $soma_minimo = 0;
                $soma_maximo = 0;

                $pontuacao_indicador = 0;
                $perguntas = $indicador->perguntas;
                foreach ($perguntas as $pergunta)
                {
                    //echo ($pergunta->id_pergunta);
                    $resposta = Resposta::where('id_pergunta', $pergunta->id_pergunta)->where('id_diagnostico', $id_diagnostico)->first();
                    if (!is_null($resposta)) {
                        $pontuacao_indicador += $resposta->pontuacao;
                    }
                    $soma_maximo += $pergunta->vl_maximo;
                    $soma_minimo += $pergunta->soma_minimo;
                }
                $pontuacao_dimensao += $pontuacao_indicador;
                $range = $soma_maximo - $soma_minimo;
                $rangeAlto = $indicador->vl_alto - $soma_minimo;
                $rangeMedio = $indicador->vl_baixo - $indicador->vl_alto;
                $rangeBaixo = $indicador->vl_baixo - $soma_maximo;

                $percAlto = $rangeAlto * 100/$range;
                $percMedio = $rangeMedio * 100/$range;
                $percBaixo = $rangeBaixo * 100/$range;

                //dd($pontuacao_indicador);
                $risco='';
                if ($pontuacao_indicador <= $indicador->vl_alto) {
                    $risco = 'Risco alto';
                }
                elseif ($pontuacao_indicador >= $indicador->vl_baixo) {
                    $risco = 'Risco baixo';
                }
                else {
                    $risco = 'Moderado';
                }
                $item = [
                    'numero'=> $indicador->numero,
                    'titulo'=> $indicador->titulo,
                    'descricao'=> $indicador->descricao,
                    'consequencia'=> $indicador->consequencia,
                    'qtd_recursos'=> $indicador->recursos->count(),
                    'risco'=> $risco,
                    'pontos'=> $pontuacao_indicador,
                    'series'=> [
                        [
                            'name'=> 'Risco baixo',
                            'data'=> $percBaixo
                        ],
                        [
                            'name' => 'Risco moderado',
                            'data'=> $percMedio
                        ],
                        [
                            'name'=> 'Risco alto',
                            'data'=> $percAlto
                        ]
                    ],
                    'recursos' => $indicador->recursos,
                ];
                array_push($vet_res_indicadores, $item);
            }

            //return ['indicadores' => $vet_res_indicadores];
            //dd($vet_res_indicadores);
            $risco='';
            if ($pontuacao_dimensao <= $dimensao->vl_alto) {
                $risco = 'Risco alto';
            }
            elseif ($pontuacao_dimensao >= $dimensao->vl_baixo) {
                $risco = 'Risco baixo';
            }
            else {
                $risco = 'Moderado';
            }
            $vet_dimensao = [
                'id_dimensao' => $id_dimensao,
                'id_diagnostico' => $id_diagnostico,
                'titulo' => $dimensao->titulo,

                'risco' => $risco,
                'pontos' => $pontuacao_dimensao,
                'indicadores' => $vet_res_indicadores
            ];
            return $vet_dimensao;
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
