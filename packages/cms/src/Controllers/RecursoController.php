<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class RecursoController extends Controller
{

    public function __construct()
    {

    }

    function index($user_id = 0)
    {
        $usuario = $user_id > 0 ? '(' . \App\Models\User::find($user_id)->name . ')': '';
        return view('cms::recurso.listar', ['user_id' => $user_id, 'usuario' => $usuario]);
    }

    public function detalhar($id)
    {
        $recurso = new \stdClass();
        $recurso->id_recurso= $id;
        $recurso->imagem = "";
        $recurso->arquivo = "";
        return view('cms::recurso.detalhar', ['recurso' => $recurso]);
    }

}
