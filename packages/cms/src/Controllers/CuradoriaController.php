<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class CuradoriaController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::curadoria.listar');
    }

    public function detalhar($id)
    {
        $curadoria = new \stdClass();
        $curadoria->id_curadoria= $id;
        $curadoria->imagem = "";
        $curadoria->arquivo = "";
        return view('cms::curadoria.detalhar', ['curadoria' => $curadoria]);
    }

}
