<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class FormatoRecursoController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::formato-recurso.listar');
    }

    public function detalhar($id)
    {
        $formatoRecurso = new \stdClass();
        $formatoRecurso->id_formato= $id;
        $formatoRecurso->imagem = "";
        $formatoRecurso->arquivo = "";
        return view('cms::formato-recurso.detalhar', ['categoria' => $formatoRecurso]);
    }

}
