<?php

namespace App\Repository;

use App\Models\CategoriaDiagnostico;
use App\Models\Diagnostico;
use App\Models\Indicacao;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

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


    public function storeMany(string $id_diagnostico, array $categorias)
    {
        $diagId = Diagnostico::where('id_diagnostico', $id_diagnostico)->get();
        if ($diagId->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;

        foreach ($categorias as $categoria)
        {
            $data = [];
            $data['id_categoria'] = $categoria;
            $data['id_diagnostico'] = $id_diagnostico;
            $this->createCompositeId($data);
        }
        return $id_diagnostico;
    }

    public function getAllByIdDiagnostico($id_diagnostico)
    {
        $res = CategoriaDiagnostico::where('id_diagnostico', '=', $id_diagnostico)->select('id_categoria')
            ->get();
        if (!$res) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function getAllNomeByIdDiagnostico($id_diagnostico)
    {
        $categDiags = CategoriaDiagnostico::with('categoria')->where('id_diagnostico', '=', $id_diagnostico)->select('id_categoria')
            ->get();
        if (!$categDiags) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        $nomeCategoria = [];
        foreach($categDiags as $categDiag)
            array_push($nomeCategoria,$categDiag->categoria->nome);

        return $nomeCategoria;
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
            CategoriaDiagnostico::where('id_categoria', '=', $firstId)->where('id_diagnostico', '=', $secondId)->delete();
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
