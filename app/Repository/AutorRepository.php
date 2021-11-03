<?php

namespace App\Repository;

use App\Models\Autor;

class AutorRepository extends BaseRepository
{
    /**
     * @var Autor
     */
    protected $model;

    /**
     * AutorRepository constructor.
     *
     * @param Autor $model
     */
    public function __construct(Autor $model)
    {
        $this->model = $model;
    }
}
