<?php

namespace App\Repository;

use App\Models\Indicador;
use Illuminate\Http\JsonResponse;
use Reliese\Coders\Model\Model;

class IndicadorRepository extends BaseRepository
{
    /**
     * @var Indicador
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Indicador $model
     */
    public function __construct(Indicador $model)
    {
        $this->model = $model;
    }

    /**
     * Obter indicadores especificados por um id de dimensao
     *
     * @param int $id_dimensao
     *
     * @return Model
     */
    public function getAllIndicadoresPorIdDimensao($id_dimensao)
    {
        $res = Indicador::where('id_dimensao', '=', $id_dimensao)->without('perguntas')->get();

        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    /**
     * Obter uma lista de indicadores especificados por uma palavra
     *
     * @param int getIndicadorPorNome
     *
     */
    public function getAllIndicadoresPorNome($nome_indicador)
    {
        $res = Indicador::whereRaw("? % titulo",[$nome_indicador])->select('titulo','id_indicador')->without('perguntas')->get();

        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }
}
