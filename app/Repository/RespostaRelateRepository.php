<?php

namespace App\Repository;


use App\Models\RespostaRelate;
use Illuminate\Database\Eloquent\Model;

class RespostaRelateRepository extends BaseRepository
{

    /**
     * @var RespostaRelate
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param RespostaRelate $model
     */
    public function __construct(RespostaRelate $model)
    {
        $this->model = $model;
    }
}
