<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class CuradorController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::curador.listar');
    }

    public function detalhar($id)
    {
        $curador = new \stdClass();
        $curador->id_curador= $id;
        $curador->imagem = "";
        $curador->arquivo = "";
        return view('cms::curador.detalhar', ['curador' => $curador]);
    }

}
