<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class ContribuaController extends Controller{

    public function listar(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::where('slug', 'txt-interaja')->first();

        $text_termo = \App\Models\Text::where('slug', 'termo')->first();
        $text_concede_direitos = \App\Models\Text::where('slug', 'concede_direitos')->first();

        return view('contribua.listar', [
            'page' => $modulo,
            'text_termo' => $text_termo,
            'text_concede_direitos' => $text_concede_direitos,
        ]);

    }

    public function esqueceu(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::first();

        return view('contribua.esqueceu-senha', [
            'page' => $modulo,
        ]);

    }

    public function interaja(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::first();

        return view('contribua.interaja', [
            'page' => $modulo,
        ]);

    }

    public function interajaDetalhar(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::first();

        return view('contribua.interaja-detalhar', [
            'page' => $modulo,
        ]);

    }

    public function compartilhe(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::where('slug', 'txt-compartilhe')->first();

        return view('contribua.compartilhe', [
            'page' => $modulo,
        ]);

    }

    public function relate(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::where('slug', 'txt-relate')->first();

        return view('contribua.relate', [
            'page' => $modulo,
        ]);

    }

    public function meusRelatos(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::where('slug', 'txt-meu-relate')->first();

        return view('contribua.meus-relatos', [
            'modulo' => $modulo,
        ]);

    }

    public function depoimento(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::where('slug', 'txt-depoimento')->first();

        return view('contribua.depoimento', [
            'page' => $modulo,
        ]);

    }
}
