<?php

namespace App\Repository;

use App\Models\Indicador;
use App\Models\TipoRecurso;

class TipoRecursoRepository extends BaseRepository
{
    /**
     * @var TipoRecurso
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param TipoRecurso $model
     */
    public function __construct(TipoRecurso $model)
    {
        $this->model = $model;
    }

    /**
     * Obter uma lista de indicadores especificados por uma palavra
     *
     * @param int $nome_tipo
     *
     */
    public function getAllTipoRecursoPorNome($nome_tipo)
    {
        $res = TipoRecurso::whereRaw("? % nome",[$nome_tipo])->select('id_tipo_recurso','nome')->get();

        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }
}
