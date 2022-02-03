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

    function index($id_pergunta)
    {
        return view('cms::resposta-relate.listar', ['id_recurso' => $id_pergunta]);
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
