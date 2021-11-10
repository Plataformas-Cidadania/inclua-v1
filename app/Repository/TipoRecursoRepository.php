<?php

namespace App\Repository;

use App\Models\TipoRecurso;

class TipoRecursoRepository extends BaseRepository
{
    /**
     * @var TipoRecurso
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param TipoRecurso $model
     */
    public function __construct(TipoRecurso $model)
    {
        $this->model = $model;
    }
}
