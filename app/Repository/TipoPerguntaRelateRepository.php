<?php

namespace App\Repository;

use App\Models\Tipo;
use App\Models\TipoPerguntaRelate;

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
    public function __construct(TipoPerguntaRelate $model)
    {
        $this->model = $model;
    }
}
