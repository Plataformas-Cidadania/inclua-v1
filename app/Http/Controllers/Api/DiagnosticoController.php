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
                $rangeBaixo = $soma_maximo  - $indicador->vl_baixo;

                if ($range != 0 )
                {
                    $percAlto = $rangeAlto * 100/$range;
                    $percMedio = $rangeMedio * 100/$range;
                    $percBaixo = $rangeBaixo * 100/$range;
                }
                else
                    $percAlto = $percMedio = $percBaixo = 0;

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
                    'posPontos'=> $pontuacao_indicador*100/$soma_maximo,
                    'series'=> [
                        [
                            'name'=> 'Risco alto',
                            'data'=> [$percAlto]
                        ],
                        [
                            'name' => 'Risco moderado',
                            'data'=> [$percMedio]
                        ],
                        [
                            'name'=> 'Risco baixo',
                            'data'=> [$percBaixo]
                        ]
                    ],
                    'recursos' => $indicador->recursos,
                ];
                array_push($vet_res_indicadores, $item);
            }

            $risco='';
            if ($pontuacao_dimensao <= $dimensao->vl_alto) {
                $risco = 'Risco alto';
            }
            elseif ($pontuacao_dimensao >= $dimensao->vl_baixo) {
                $risco = 'Risco baixo';
            }
            else {
                $risco = 'Risco moderado';
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


    public function calcularPontuacaoAll($id_diagnostico){
        $dimensoes = Dimensao::select('id_dimensao')->get();
        $pontuacaoList = [];
        foreach ($dimensoes as $dimensao){
            $res = $this->calcularPontuacao($dimensao->id_dimensao, $id_diagnostico);
            array_push($pontuacaoList,$res);
        }
        return $pontuacaoList;

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
