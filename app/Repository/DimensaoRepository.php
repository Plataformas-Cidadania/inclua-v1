<?php

namespace App\Repository;

use App\Models\Dimensao;

class DimensaoRepository extends BaseRepository
{
    /**
     * @var Dimensao
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Dimensao $model
     */
    public function __construct(Dimensao $model)
    {
        $this->model = $model;
    }
}
