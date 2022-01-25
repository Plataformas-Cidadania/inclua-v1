<?php

namespace App\Repository;

use App\Models\PerguntaRelate;
use Reliese\Coders\Model\Model;

class PerguntaRelateRepository extends BaseRepository
{
    /**
     * @var PerguntaRelate
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param PerguntaRelate $model
     */
    public function __construct(PerguntaRelate $model)
    {
        $this->model = $model;
    }
}
