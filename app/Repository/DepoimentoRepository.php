<?php

namespace App\Repository;


use App\Models\Depoimento;
use Illuminate\Database\Eloquent\Model;

class DepoimentoRepository extends BaseRepository
{

    /**
     * @var Depoimento
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Depoimento $model
     */
    public function __construct(Depoimento $model)
    {
        $this->model = $model;
    }
}
