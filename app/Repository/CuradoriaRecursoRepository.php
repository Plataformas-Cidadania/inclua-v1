<?php

namespace App\Repository;

use App\Models\CuradoriaRecurso;
use Illuminate\Database\Eloquent\Model;

class CuradoriaRecursoRepository extends BaseRepository
{
    /**
     * @var CuradoriaRecurso
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param CuradoriaRecurso $model
     */
    public function __construct(CuradoriaRecurso $model)
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
        $res = CuradoriaRecurso::where('id_curadoria', '=', $firstId)
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
        $res = CuradoriaRecurso::where('id_curadoria', '=', $firstId)
            ->where('id_recurso', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else {
            CuradoriaRecurso::where('id_curadoria', '=', $firstId)->where('id_recurso', '=', $secondId)->delete();
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
    public function getRecursoPorCuradoria($id_curadoria)
    {
        $res = $this->model->where('id_curadoria', $id_curadoria)->get();

        return $res;
    }
}
