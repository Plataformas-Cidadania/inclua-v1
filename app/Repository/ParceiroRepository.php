<?php

namespace App\Repository;

use App\Models\Parceiro;

class ParceiroRepository extends BaseRepository
{
    /**
     * @var Parceiro
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Parceiro $model
     */
    public function __construct(Parceiro $model)
    {
        $this->model = $model;
    }
}
