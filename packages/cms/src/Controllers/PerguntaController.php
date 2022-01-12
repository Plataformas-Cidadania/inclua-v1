<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class PerguntaController extends Controller
{

    public function __construct()
    {
        $this->pergunta = new \App\Models\Pergunta;
    }

    function index($id_indicador)
    {
        return view('cms::pergunta.listar', ['id_indicador' => $id_indicador]);
    }

    public function detalhar($id)
    {
        $pergunta = new \stdClass();
        $pergunta->id_pergunta = $id;
        $pergunta->imagem = "";
        $pergunta->arquivo = "";
        return view('cms::pergunta.detalhar', ['pergunta' => $pergunta]);
    }

}
