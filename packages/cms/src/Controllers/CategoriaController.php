<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class CategoriaController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::categoria.listar');
    }

    public function detalhar($id)
    {
        $categoria = new \stdClass();
        $categoria->id_categoria= $id;
        $categoria->imagem = "";
        $categoria->arquivo = "";
        return view('cms::categoria.detalhar', ['categoria' => $categoria]);
    }

}
