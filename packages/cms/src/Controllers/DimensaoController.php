<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class DimensaoController extends Controller
{

    public function __construct()
    {
        $this->dimensao = new \App\Models\Dimensao;
    }

    function index()
    {
        $dimensoes = \App\Models\Dimensao::all();
        return view('cms::dimensao.listar', ['dimensoes' => $dimensoes]);
    }

    public function detalhar($id)
    {
        $dimensao = new \stdClass();
        $dimensao->id_dimensao = $id;
        $dimensao->imagem = "";
        $dimensao->arquivo = "";
        return view('cms::dimensao.detalhar', ['dimensao' => $dimensao]);
    }

}
