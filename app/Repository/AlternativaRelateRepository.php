<?php

namespace App\Repository;


use App\Models\AlternativaRelate;
use Illuminate\Database\Eloquent\Model;

class AlternativaRelateRepository extends BaseRepository
{

    /**
     * @var AlternativaRelate
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param AlternativaRelate $model
     */
    public function __construct(AlternativaRelate $model)
    {
        $this->model = $model;
    }


        /**
     * Obter uma lista de alternativas do relate por usuário
     *
     * @param int $id_user
     *
     */
    public function getAllAlternativaRelatePorUser($id_user)
    {
        $res = AlternativaRelate::where('id_user', '=', $id_user)->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }
        /**
     * Obter uma lista de alternativas do relate por pergunta
     *
     * @param int $id_pergunta
     *
     */
    public function getAllAlternativaRelatePorPergunta($id_pergunta)
    {
        $res = AlternativaRelate::where('id_pergunta', '=', $id_pergunta)->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    /**
     * Obter uma lista de alternativas do relate por pergunta e user
     *
     * @param int $id_pergunta
     * @param int $id_user
     *
     */
    public function getAllAlternativaRelate_pergunta_user($id_pergunta, $id_user)
    {
        $res = AlternativaRelate::where('id_pergunta', '=', $id_pergunta)
                                ->where('id_user', '=', $id_user)
                                ->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }










}
