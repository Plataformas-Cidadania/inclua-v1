<?php

namespace App\Repository;

use App\Models\Modulo;

class ModuloRepository extends BaseRepository
{
    /**
     * @var Modulo
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Modulo $model
     */
    public function __construct(Modulo $model)
    {
        $this->model = $model;
    }
}
