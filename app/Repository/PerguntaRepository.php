<?php

namespace App\Repository;

use App\Models\Pergunta;

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
}
