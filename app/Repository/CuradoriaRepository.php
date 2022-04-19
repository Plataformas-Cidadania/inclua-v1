<?php

namespace App\Repository;

use App\Models\Curadoria;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class CuradoriaRepository extends BaseRepository
{
    /**
     * @var Curadoria
     */
    protected $model;

    /**
     * CuradoriaRepository constructor.
     *
     * @param Curadoria $model
     */
    public function __construct(Curadoria $model)
    {
        $this->model = $model;
    }

    public function all(array $columns = ['*'], array $relations = []): Collection
    {
        return $this->model->with($relations)->orderByDesc('id_curadoria')->get($columns);
    }

}
