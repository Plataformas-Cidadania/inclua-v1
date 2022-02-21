<?php

namespace App\Repository;

use App\Models\Curadoria;
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

}
