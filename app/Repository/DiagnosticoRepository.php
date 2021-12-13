<?php

namespace App\Repository;

use App\Models\Diagnostico;

class DiagnosticoRepository extends BaseRepository
{
    /**
     * @var Diagnostico
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Diagnostico $model
     */
    public function __construct(Diagnostico $model)
    {
        $this->model = $model;
    }
}
