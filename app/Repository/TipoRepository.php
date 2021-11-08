<?php

namespace App\Repository;

use App\Models\Tipo;

class TipoRepository extends BaseRepository
{
    /**
     * @var Tipo
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Tipo $model
     */
    public function __construct(Tipo $model)
    {
        $this->model = $model;
    }
}
