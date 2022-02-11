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

    /**
     * Obter uma lista de respostas do relate por pergunta e user
     *
     * @param int $id_pergunta
     * @param int $id_user
     *
     */
    public function getAllRespostaRelate_pergunta_user($id_pergunta, $id_user)
    {
        $res = RespostaRelate::where('id_pergunta', '=', $id_pergunta)
                                ->where('id_user', '=', $id_user)
                                ->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }


    public function findByRelateId($id_relate)
    {
        $res = $this->model->where('id_relate', $id_relate)->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function storeMany(string $id_relate, array $respostas)
    {
        $relateId = $this->model->where('id_relate', $id_relate)->get();
        if (!$relateId) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;

        foreach ($respostas as $resposta)
        {
            $data = [];
            $data['descricao'] = $resposta['resposta'];
            $data['id_pergunta'] = $resposta['id_pergunta'];
            $data['id_user'] = auth()->user()->id;
            $data['id_relate'] = $id_relate;
            $this->create($data);
        }
        return $id_relate;
    }







}
