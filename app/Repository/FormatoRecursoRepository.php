<?php

namespace App\Repository;

use App\Models\FormatoRecurso;

class FormatoRecursoRepository extends BaseRepository
{
    /**
     * @var FormatoRecurso
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param FormatoRecurso $model
     */
    public function __construct(FormatoRecurso $model)
    {
        $this->model = $model;
    }
}
