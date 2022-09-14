<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class RelateController extends Controller
{

    public function __construct()
    {

    }

    function index($user_id = 0)
    {
        $usuario = $user_id > 0 ? '(' . \App\Models\User::find($user_id)->name . ')': '';
        return view('cms::relate-usuario.listar', ['user_id' => $user_id, 'usuario' => $usuario]);
    }

    function buscaPorUsuario($user_id){
        $relates = \App\Models\Relate::where('id_user', $user_id)->get();
        foreach ($relates as $relate) {
            $relate->resposta_relate;
        }
        return $relates;
    }

    /*public function detalhar($id)
    {
        $relate = new \stdClass();
        $relate->id_relate= $id;
        $relate->imagem = "";
        $relate->arquivo = "";
        return view('cms::relate.detalhar', ['relate' => $relate]);
    }*/

}
