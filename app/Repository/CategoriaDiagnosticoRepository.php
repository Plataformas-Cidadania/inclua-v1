<?php

namespace App\Repository;

use App\Models\CategoriaDiagnostico;
use App\Models\Indicacao;
use Illuminate\Database\Eloquent\Model;

class CategoriaDiagnosticoRepository extends BaseRepository
{
    /**
     * @var CategoriaDiagnostico
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param CategoriaDiagnostico $model
     */
    public function __construct(CategoriaDiagnostico $model)
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
        $res = CategoriaDiagnostico::with(['categoria','recurso'])
            ->where('id_categoria', '=', $firstId)
            ->where('id_diagnosticco', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function getAllByIdDiagnostico($id_diagnostico)
    {
        $res = CategoriaDiagnostico::where('id_diagnostico', '=', $id_diagnostico)
            ->get();
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
        $res = CategoriaDiagnostico::where('id_categoria', '=', $firstId)
            ->where('id_diagnostico', '=', $secondId)
            ->first();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else {
            CategoriaDiagnostico::where('id_categoria', '=', $firstId)->where('id_recurso', '=', $secondId)->delete();
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
