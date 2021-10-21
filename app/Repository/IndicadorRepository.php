<?php

namespace App\Repository;

use App\Models\Indicador;

class IndicadorRepository extends BaseRepository
{
    /**
     * @var Indicador
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Indicador $model
     */
    public function __construct(Indicador $model)
    {
        $this->model = $model;
    }
}
