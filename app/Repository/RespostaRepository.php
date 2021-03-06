<?php

namespace App\Repository;


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

    public function findByDiagnosticoId($id_diagnostico)
    {
        $res = $this->model->where('id_diagnostico', $id_diagnostico)->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function storeMany(string $id_diagnostico, array $respostas)
    {
        $diagId = $this->model->where('id_diagnostico', $id_diagnostico)->get();
        if (!$diagId) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;

        foreach ($respostas as $resposta)
        {
            $data = [];
            $data['id_pergunta'] = $resposta['id_pergunta'];
            $data['pontuacao'] = $resposta['resposta'];
            $data['id_diagnostico'] = $id_diagnostico;
            $this->create($data);
        }
        return $id_diagnostico;
    }
}
