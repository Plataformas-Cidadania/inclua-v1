<?php

namespace App\Repository;

use App\Models\Indicacao;

class IndicacaoRepository extends BaseRepository
{
    /**
     * @var Indicacao
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Indicacao $model
     */
    public function __construct(Indicacao $model)
    {
        $this->model = $model;
    }
}
