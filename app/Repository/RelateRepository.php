<?php

namespace App\Repository;

use App\Http\Controllers\Api\RelateController;
use App\Http\Controllers\Api\PerguntaController;
use App\Http\Controllers\Api\RespostaController;
use App\Models\Relate;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class RelateRepository extends BaseRepository
{
    /**
     * @var Relate
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Relate $model
     */
    public function __construct(Relate $model)
    {
        $this->model = $model;
    }

    public function createRelate(): Model
    {
        $model = $this->model->create();
        return $model->fresh();
    }

    public function getRespostaPorRelate($id)
    {
        $respostaRepo = (new RespostaRepository(app('App\Models\Resposta')));
        try {
            $resposta = (new RespostaController($respostaRepo))->getbyRelateId($id);
            return $resposta;
        } catch (Exception $exception) {
            return $this->errorResponse($exception);
        }
    }

}
