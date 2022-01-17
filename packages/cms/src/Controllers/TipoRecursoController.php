<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class TipoRecursoController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::tipo-recurso.listar');
    }

    public function detalhar($id)
    {
        $tipoRecurso = new \stdClass();
        $tipoRecurso->id_tipo_recurso= $id;
        $tipoRecurso->imagem = "";
        $tipoRecurso->arquivo = "";
        return view('cms::tipo-recurso.detalhar', ['tipoRecurso' => $tipoRecurso]);
    }

}
