<?php

namespace App\Repository;

use App\Models\Risco;

class RiscoRepository extends BaseRepository
{
    /**
     * @var Risco
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Risco $model
     */
    public function __construct(Risco $model)
    {
        $this->model = $model;
    }
}
