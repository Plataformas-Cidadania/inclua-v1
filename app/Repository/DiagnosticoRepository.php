<?php

namespace App\Repository;

use App\Http\Controllers\Api\DiagnosticoController;
use App\Http\Controllers\Api\PerguntaController;
use App\Http\Controllers\Api\RespostaController;
use App\Models\Diagnostico;
use App\Models\Indicacao;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class DiagnosticoRepository extends BaseRepository
{
    /**
     * @var Diagnostico
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Diagnostico $model
     */
    public function __construct(Diagnostico $model)
    {
        $this->model = $model;
    }

    public function createDiagnostico(): Model
    {
        $model = $this->model->create();
        return $model->fresh();
    }

    public function getDiagnostico($id) :Model
    {

        $res = Diagnostico::where('id_diagnostico', '=', $id)
              ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function getRespostaPorDiagnostico($id)
    {
        $respostaRepo = (new RespostaRepository(app('App\Models\Resposta')));
        try {
            $resposta = (new RespostaController($respostaRepo))->getbyDiagnosticoId($id);
            return $resposta;
        } catch (Exception $exception) {
            return $this->errorResponse($exception);
        }
    }

}
