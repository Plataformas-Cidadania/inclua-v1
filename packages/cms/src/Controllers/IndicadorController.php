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

    function index()
    {
        $indicadores = \App\Models\Indicador::all();
        return view('cms::indicador.listar', ['indicadores' => $indicadores]);
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
