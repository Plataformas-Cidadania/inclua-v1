<?php

namespace App\Repository;

use App\Models\Recurso;

class RecursoRepository extends BaseRepository
{
    /**
     * @var Recurso
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Recurso $model
     */
    public function __construct(Recurso $model)
    {
        $this->model = $model;
    }
}
