<?php

namespace App\Repository;

use App\Models\Tipo;

class TipoPerguntaRelateRepository extends BaseRepository
{
    /**
     * @var Tipo
     */
    protected $model;

    /**
     * TipoPerguntaRelateRepository constructor.
     *
     * @param Tipo $model
     */
    public function __construct(Tipo $model)
    {
        $this->model = $model;
    }
}
