<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class AutorController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::indicador.listar');
    }

    public function detalhar($id)
    {
        $autor = new \stdClass();
        $autor->id_indicador = $id;
        $autor->imagem = "";
        $autor->arquivo = "";
        return view('cms::autor.detalhar', ['autor' => $autor]);
    }

}
