<?php

namespace App\Repository;

use App\Models\Indicacao;

class IndicacaoRepository extends BaseRepository
{
    /**
     * @var Indicacao
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Indicacao $model
     */
    public function __construct(Indicacao $model)
    {
        $this->model = $model;
    }

    /**
     * Encontra um modelo por um ID composto.
     *
     * @param int $firstId
     * @param int $secondId
     * @return Indicacao
     */

    public function findByCompositeId(int $firstId,int $secondId): Indicacao
    {
        $res = Indicacao::where('id_indicador', '=', $firstId)
            ->where('id_recurso', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    /**
     * Remove um modelo por um ID composto.
     *
     * @param int $firstId
     * @param int $secondId
     * @return Indicacao
     */
    public function deleteByCompositeId(int $firstId,int $secondId): Indicacao
    {
        $res = Indicacao::where('id_indicador', '=', $firstId)
            ->where('id_recurso', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else {
            Indicacao::where('id_indicador', '=', $firstId)->where('id_recurso', '=', $secondId)->delete();
            return $res;
        }
    }

    /**
     * Create a model with composite Id.
     *
     * @param array $payload
     * @return Indicacao
     */
    public function createCompositeId(array $payload): Indicacao
    {
        return $this->model->create($payload);
    }
}
