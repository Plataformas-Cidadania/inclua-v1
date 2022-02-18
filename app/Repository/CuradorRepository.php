<?php

namespace App\Repository;

use App\Models\Curador;

class CuradorRepository extends BaseRepository
{
    /**
     * @var Curador
     */
    protected $model;

    /**
     * CuradorRepository constructor.
     *
     * @param Curador $model
     */
    public function __construct(Curador $model)
    {
        $this->model = $model;
    }
}
