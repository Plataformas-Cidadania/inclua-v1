<?php

namespace App\Repository;

use App\Models\Categorizacao;
use Illuminate\Database\Eloquent\Model;

class CategorizacaoRepository extends BaseRepository
{
    /**
     * @var Categorizacao
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Categorizacao $model
     */
    public function __construct(Categorizacao $model)
    {
        $this->model = $model;
    }

    /**
     * Encontra um modelo por um ID composto.
     *
     * @param int $firstId
     * @param int $secondId
     * @return Model
     */

    public function findByCompositeId(int $firstId,int $secondId): Model
    {
        $res = Categorizacao::where('id_categoria', '=', $firstId)
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
     * @return Model
     */
    public function deleteByCompositeId(int $firstId,int $secondId,): Model
    {
        $res = Categorizacao::where('id_categoria', '=', $firstId)
            ->where('id_recurso', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else {
            Categorizacao::where('id_categoria', '=', $firstId)->where('id_recurso', '=', $secondId)->delete();
            return $res;
        }
    }

    /**
     * Create a model with composite Id.
     *
     * @param array $payload
     * @return Model
     */
    public function createCompositeId(array $payload): Model
    {
        return $this->model->create($payload);
    }
}
