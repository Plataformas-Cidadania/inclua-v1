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
        /**
     * Obter uma lista de depoimentos por usuário
     *
     * @param int $id_user
     *
     */
    public function getAllDepoimentosPorUser($id_user)
    {
        $res = Depoimento::where('id_user', '=', $id_user)->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }


}
