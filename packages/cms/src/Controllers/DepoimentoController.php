<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class DepoimentoController extends Controller
{

    public function __construct()
    {

    }

    function index()
    {
        return view('cms::depoimento.listar');
    }

    public function detalhar($id)
    {
        $depoimento = new \stdClass();
        $depoimento->id_depoimento= $id;
        $depoimento->imagem = "";
        $depoimento->arquivo = "";
        return view('cms::depoimento.detalhar', ['depoimento' => $depoimento]);
    }

}
