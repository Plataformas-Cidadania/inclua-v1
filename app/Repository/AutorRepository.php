<?php

namespace App\Repository;

use App\Models\Autor;
use Illuminate\Database\Eloquent\Collection;

class AutorRepository extends BaseRepository
{
    /**
     * @var Autor
     */
    protected $model;

    /**
     * CuradorRepository constructor.
     *
     * @param Autor $model
     */
    public function __construct(Autor $model)
    {
        $this->model = $model;
    }

    public function all(array $columns = ['*'], array $relations = []): Collection
    {
        return $this->model->with($relations)->orderByRaw("lower(trim(nome))")->get($columns);
    }
}
