<?php

namespace App\Repository;

use App\Models\Categorizacao;
use App\Models\Resposta;
use Illuminate\Database\Eloquent\Model;

class RespostaRepository extends BaseRepository
{
    /**
     * @var Resposta
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Resposta $model
     */
    public function __construct(Resposta $model)
    {
        $this->model = $model;
    }

    public function findByDiagnosticoId($id_diagnostico): Model
    {
        $res = $this->model->where('id_diagnostico', $id_diagnostico)->get();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function storeMany($id, array $respostas): Model
    {
        foreach ($respostas as $resposta)
        {
            $resposta->id_diagnostico = $id;
            $this->create($resposta);
        }

//        $res = $this->model->where('id_diagnostico', $id_diagnostico)->get();
//        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
//        else return $res;
    }
}
