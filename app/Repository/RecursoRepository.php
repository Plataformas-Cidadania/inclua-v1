<?php

namespace App\Repository;

use App\Models\Categorizacao;
use App\Models\Indicacao;
use App\Models\Autoria;
use App\Models\Autor;
use App\Models\Categoria;
use App\Models\Indicador;
use App\Models\Link;
use App\Models\Recurso;
use App\Models\TipoRecurso;
use App\Models\User;
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

    public function getAllPaginadoCMS($nr_itens)
    {
        return Recurso::with('links','autoria')
            ->orderBy('id_recurso')
            ->paginate($nr_itens);
    }

    public function getAllPaginado($nr_itens)
    {
        return Recurso::with('links','autoria')
            ->where('status', 1)
            ->orderBy('id_recurso')
            ->paginate($nr_itens);
    }

    /**
     * Obter uma lista de recurso que tenha a palavra_chave em titulo, esfera ou autor
     *
     * @param int $palavra_chave
     *
     */
    public function getAllRecursoPorPalavraChave($palavra_chave)
    {
        $first = Recurso::whereRaw("nome ilike '%$palavra_chave%'")->with('autoria')
         ->orWhereRaw("resumo ilike '%$palavra_chave%'")->with('autoria')
        ->orWhereRaw("esfera ilike '%$palavra_chave%'")->with('autoria')
        ->where('status', 1)
        ->orderBy('id_recurso')
        ->get();

        $res = Recurso::join('avaliacao.autoria', 'recurso.id_recurso', '=', 'autoria.id_recurso')
            ->join('avaliacao.autor', 'autor.id_autor', '=', 'autoria.id_autor')
            ->select('avaliacao.recurso.*')
            ->where('autor.nome', 'ilike', "%$palavra_chave%")->with('autoria')
            ->where('status', 1)
            ->get()
            ->union($first)->unique('id_recurso');
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    public function getAllRecursoPorPalavraChaveCMS($palavra_chave)
    {
        $first = Recurso::whereRaw("nome ilike '%$palavra_chave%'")->with('autoria')
            ->orWhereRaw("resumo ilike '%$palavra_chave%'")->with('autoria')
            ->orWhereRaw("esfera ilike '%$palavra_chave%'")->with('autoria')
            ->where('status', 1)
            ->orderBy('id_recurso')
            ->get();

        $res = Recurso::join('avaliacao.autoria', 'recurso.id_recurso', '=', 'autoria.id_recurso')
            ->join('avaliacao.autor', 'autor.id_autor', '=', 'autoria.id_autor')
            ->select('avaliacao.recurso.*')
            ->where('autor.nome', 'ilike', "%$palavra_chave%")->with('autoria')
            ->where('status', 1)
            ->get()
            ->union($first)->unique('id_recurso');
        if (!$res || $res->isEmpty()) throw new \Illuminate\Database\Eloquent\ModelNotFoundException;
        else return $res;
    }

    /**
     * Obter uma lista de recurso que tenha por id de tipo de recurso
     *
     * @param int $id_tipo_recurso
     *
     */
    public function getAllRecursoPorIdTipoRecurso($id_tipo_recurso)
    {
        $res = TipoRecurso::findOrFail($id_tipo_recurso);
        $list = [];
        foreach ($res->recursos as $temp){
            array_push($list,$temp);
        }
       return $list;
    }

    /**
     * Obter uma lista de autores especificados por um nome de categoria
     *
     * @param int getAllRecursosPorNomeCategoria
     *
     */
    public function getAllRecursosPorIDCategoria($id_categoria)
    {

        $res = Categoria::findOrFail($id_categoria);
        $list = [];
        foreach ($res->categorizacao as $cat){
            array_push($list,$cat->recurso);
        }

        return $list;
    }

    /**
     * Obter uma lista de fecursos especificados por um id de user
     *
     * @param int getAllRecursoPorIdUsuario
     *
     */
    public function getAllRecursoPorIdUsuario($id_user)
    {
        $res = Recurso::where('id_user','=',$id_user)->get();
        return $res;
    }

    /**
     * Obter uma lista de recursos especificados por um id de indicador
     *
     * @param int getAllRecursosPorIdIndicador
     *
     */
    public function getAllRecursosPorIdIndicador($id_indicador)
    {
        $res = Indicador::findOrFail($id_indicador);

        $list = [];
        foreach ($res->recursos as $temp){
            array_push($list,$temp);
        }

        return $list;
    }


    /**
     * Obter uma lista de autores especificados por um id de recurso
     *
     *
     * @param int $id_recurso
     *
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
     * @return Model
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
     * @return Model
     */
    public function getByIdIndicadorPaginado($id_indicador, $nr_itens)
    {
        $indicador = Indicador::find($id_indicador);
        return $indicador->recursos;

        //return Recurso::with('links','autoria')->paginate($nr_itens);
    }
}
