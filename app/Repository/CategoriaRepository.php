<?php

namespace App\Repository;

use App\Models\Categoria;
use App\Models\Indicador;
use Illuminate\Database\Eloquent\Collection;

class CategoriaRepository extends BaseRepository
{
    /**
     * @var Categoria
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Categoria $model
     */
    public function __construct(Categoria $model)
    {
        $this->model = $model;
    }

    /**
     * Obter uma lista de autores especificados por um nome de categoria
     *
     * @param int $nome_categoria
     *
     */
    public function getCategoriaPorNome($nome_categoria)
    {
        $res = Categoria::whereRaw("? % nome",[$nome_categoria])->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
        return $res;
    }

    public function all(array $columns = ['*'], array $relations = []): Collection
    {
        return $this->model->with($relations)->orderByRaw("lower(trim(nome))")->get($columns);
    }

}
