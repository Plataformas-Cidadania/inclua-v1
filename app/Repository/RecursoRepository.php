<?php

namespace App\Repository;

use App\Models\Autoria;
use App\Models\Link;
use App\Models\Recurso;
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

    public function getAllPaginado()
    {
        return Recurso::with('links','autoria')->paginate(10);
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
}
