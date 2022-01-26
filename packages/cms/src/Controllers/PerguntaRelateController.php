<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class PerguntaRelateController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::pergunta-relate.listar');
    }

    public function detalhar($id)
    {
        $pergunta = new \stdClass();
        $pergunta->id_pergunta= $id;
        $pergunta->imagem = "";
        $pergunta->arquivo = "";
        return view('cms::pergunta-relate.detalhar', ['pergunta' => $pergunta]);
    }

}
