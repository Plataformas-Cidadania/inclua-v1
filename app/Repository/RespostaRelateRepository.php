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


        /**
     * Obter uma lista de respostas do relate por usuário
     *
     * @param int $id_user
     *
     */
    public function getAllRespostaRelatePorUser($id_user)
    {
        $res = RespostaRelate::where('id_user', '=', $id_user)->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }
        /**
     * Obter uma lista de respostas do relate por pergunta
     *
     * @param int $id_pergunta
     *
     */
    public function getAllRespostaRelatePorPergunta($id_pergunta)
    {
        $res = RespostaRelate::where('id_pergunta', '=', $id_pergunta)->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }



}
