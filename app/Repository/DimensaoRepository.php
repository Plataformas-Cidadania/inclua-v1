<?php

namespace App\Repository;

use App\Models\Dimensao;
use Illuminate\Database\Eloquent\Collection;

class DimensaoRepository extends BaseRepository
{
    /**
     * @var Dimensao
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Dimensao $model
     */
    public function __construct(Dimensao $model)
    {
        $this->model = $model;
    }
    public function all(array $columns = ['*'], array $relations = []): Collection
    {
        return $this->model->with($relations)->orderby('numero')->get($columns);
    }

}
