<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class DiagnosticoController extends Controller{

    public function completo(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::first();

        return view('diagnostico.completo', [
            'page' => $modulo,
        ]);

    }
}
