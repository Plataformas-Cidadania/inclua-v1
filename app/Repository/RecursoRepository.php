<?php

namespace App\Repository;

use App\Models\Autoria;
use App\Models\Categoria;
use App\Models\Indicador;
use App\Models\Link;
use App\Models\Recurso;
use App\Models\TipoRecurso;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use function PHPUnit\Framework\isEmpty;
use function Webmozart\Assert\Tests\StaticAnalysis\isEmptyArray;

class RecursoRepository extends BaseRepository
{
    /**
     * @var Recurso
     */
    protected $model;

    /**
     * IndicadorRepository constructor.
     *
     * @param Recurso $model
     */
    public function __construct(Recurso $model)
    {
        $this->model = $model;
    }

    public function all(array $columns = ['*'], array $relations = []): Collection
    {
        return Recurso::with('links','autoria')->get();
    }

    public function getAllPaginado($nr_itens)
    {
        return Recurso::with('links','autoria')->paginate($nr_itens);
    }

     /**
     * Obter uma lista de autores especificados por um id de recurso
     *
     * @param int $id_recurso
     *
     * @return JsonResponse
     */
    public function getAllRecursoPorNomeTipoRecurso($nome_tipo_recurso)
    {
        $res = TipoRecurso::where('nome', 'like', $nome_tipo_recurso)->with('recurso')->get();

        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    /**
     * Obter uma lista de autores especificados por um id de recurso
     *
     * @param int getAllRecursosPorNomeTema
     *
     * @return JsonResponse
     */
    public function getAllRecursosPorNomeCategoria($nome_categoria)
    {
        $res = Categoria::where('nome', 'like', $nome_categoria)->with('categorizacao')->get();

        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    /**
     * Obter uma lista de autores especificados por um id de recurso
     *
     * @param int $id_recurso
     *
     * @return JsonResponse
     */
    public function getAllAutoresPorIdRecurso($id_recurso)
    {
        $res = Autoria::where('id_recurso', '=', $id_recurso)->with('autor')->get();

        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    /**
     * Obter uma lista de links especificados por um id de recurso
     *
     * @param int $id_recurso
     *
     * @return JsonResponse
     */
    public function getAllLinksPorIdRecurso($id_recurso)
    {
        $res = Link::where('id_recurso', '=', $id_recurso)->get();
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    /**
     * Obter uma lista paginada de recursos pelo ID do Indicador
     *
     * @param int $id_indicador
     *
     * @return JsonResponse
     */
    public function getByIdIndicadorPaginado($id_indicador, $nr_itens)
    {
        $indicador = Indicador::find($id_indicador);
        return $indicador->recursos;

        //return Recurso::with('links','autoria')->paginate($nr_itens);
    }
}
