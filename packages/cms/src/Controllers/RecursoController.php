<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class RecursoController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::recurso.listar');
    }

    public function detalhar($id)
    {
        $recurso = new \stdClass();
        $recurso->id_recurso= $id;
        $recurso->imagem = "";
        $recurso->arquivo = "";
        return view('cms::recurso.detalhar', ['recurso' => $recurso]);
    }

}
