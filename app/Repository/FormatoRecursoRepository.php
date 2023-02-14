<?php

namespace App\Repository;

use App\Models\FormatoRecurso;
use Illuminate\Database\Eloquent\Collection;

class FormatoRecursoRepository extends BaseRepository
{
    /**
     * @var FormatoRecurso
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param FormatoRecurso $model
     */
    public function __construct(FormatoRecurso $model)
    {
        $this->model = $model;
    }

    public function all(array $columns = ['*'], array $relations = []): Collection
    {
        return $this->model->with($relations)->orderByRaw("lower(trim(nome))")->get($columns);
    }
}
