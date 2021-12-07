<?php

namespace App\Repository;

use App\Models\Autoria;
use Illuminate\Database\Eloquent\Model;

class AutoriaRepository extends BaseRepository
{
    /**
     * @var Autoria
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Autoria $model
     */
    public function __construct(Autoria $model)
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
        $res = Autoria::where('id_autor', '=', $firstId)
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
        $res = Autoria::where('id_autor', '=', $firstId)
            ->where('id_recurso', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else {
            Autoria::where('id_autor', '=', $firstId)->where('id_recurso', '=', $secondId)->delete();
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
    /**
     * Create a model with composite Id.
     *
     * @param array $payload
     * @return Model
     */
    public function getAutoresPorRecurso($id_recurso)
    {
        $res = $this->model->where('id_recurso', $id_recurso)->get();

        return $res;
    }
}
