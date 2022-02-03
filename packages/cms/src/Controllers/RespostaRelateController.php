<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class RespostaRelateController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::resposta-relate.listar');
    }

    public function detalhar($id)
    {
        $resposta = new \stdClass();
        $resposta->id_resposta= $id;
        $resposta->imagem = "";
        $resposta->arquivo = "";
        return view('cms::resposta-relate.detalhar', ['resposta' => $resposta]);
    }

}
