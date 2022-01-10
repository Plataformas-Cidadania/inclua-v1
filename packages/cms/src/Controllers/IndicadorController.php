<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class IndicadorController extends Controller
{

    public function __construct()
    {
        $this->indicador = new \App\Models\Indicador;
    }

    function index($id_dimensao)
    {
        return view('cms::indicador.listar', ['id_dimensao' => $id_dimensao]);
    }

    public function detalhar($id)
    {
        $indicador = new \stdClass();
        $indicador->id_indicador = $id;
        $indicador->imagem = "";
        $indicador->arquivo = "";
        return view('cms::indicador.detalhar', ['indicador' => $indicador]);
    }

}
