<?php

namespace App\Repository;

use App\Models\Diagnostico;
use Illuminate\Database\Eloquent\Model;

class DiagnosticoRepository extends BaseRepository
{
    /**
     * @var Diagnostico
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Diagnostico $model
     */
    public function __construct(Diagnostico $model)
    {
        $this->model = $model;
    }

    public function createDiagnostico(): Model
    {
        $model = $this->model->create();
        return $model->fresh();
    }

}
