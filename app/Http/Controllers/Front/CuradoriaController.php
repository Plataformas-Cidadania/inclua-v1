<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class CuradoriaController extends Controller{

    public function listar(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Text::where('slug', 'curadoria')->first();

        return view('curadoria.listar', [
            'page' => $modulo,
        ]);

    }

    public function detalhar($id){
        return view('curadoria.detalhar', [
            'id' => $id,
        ]);

    }

    public function treinamento(){

        $modulo = \App\Models\Text::where('slug', 'curadoria')->first();

        //return  $modulo;

        return view('curadoria.treinamento', [
            'page' => $modulo,
        ]);

    }
}
