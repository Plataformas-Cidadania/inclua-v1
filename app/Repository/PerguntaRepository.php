<?php

namespace App\Repository;

use App\Models\Link;
use App\Models\Pergunta;
use Reliese\Coders\Model\Model;

class PerguntaRepository extends BaseRepository
{
    /**
     * @var Pergunta
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Pergunta $model
     */
    public function __construct(Pergunta $model)
    {
        $this->model = $model;
    }

    public function getAll()
	{
		return $this->model->whereNull('id_perguntaPai')->get();
	}
    /**
     * Obter perguntas especificados por um id de indicador
     *
     * @param int $id_indicador
     *
     * @return Model
     */
    public function getPerguntasPorIdIndicador($id_indicador)
    {
        $res = Pergunta::where('id_indicador', '=', $id_indicador)->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }
}
