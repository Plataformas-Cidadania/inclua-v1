<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class DiagnosticoController extends Controller{

    public function completo(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::first();
        $text_diagnostico = \App\Models\Text::where('slug', 'diagnostico')->first();

        return view('diagnostico.completo', [
            'page' => $modulo,
            'text_diagnostico' => $text_diagnostico,
        ]);

    }

    public function completoReact(){

        $rota = Route::getCurrentRoute()->uri();

        $modulo = \App\Models\Modulo::first();

        return view('diagnostico.completo-react', [
            'page' => $modulo,
        ]);

    }

    public function diagnostico($tipo = ""){

        $rota = Route::getCurrentRoute()->uri();

        $tipo = $tipo === "completo" ? 1 : ($tipo === "parcial" ? 2 : "");

        $modulo = \App\Models\Modulo::first();
        $text_diagnostico = \App\Models\Text::where('slug', 'pg-diagnostico')->first();

        return view('diagnostico.diagnostico-react', [
            'page' => $modulo,
            'text_diagnostico_titulo' => $text_diagnostico->titulo,
            'text_diagnostico_descricao' => $text_diagnostico->descricao,
            'tipo' => $tipo
        ]);

    }

    public function pre(){

        $modulo = \App\Models\Text::where('slug', 'pre-diagnostico')->first();


        return view('diagnostico.pre', [
            'page' => $modulo,
        ]);

    }

    public function testeDimensoes(){
        /*$rows = DB::table('dimensao')->orderBy('id_dimensao')->get();
        $dimensoes = [];
        foreach ($rows as $row) {
            array_push($dimensoes, [
                "teaser" => [
                    "titulo" => $row->nome,
                    "descricao" => 'Chama aten????o para o conjunto de rela????es institucionais envolvidas
                                                    no processo de implementa????o, envolvendo tanto articula????es entre ??rg??os
                                                    governamentais e organiza????es do setor privado e da sociedade civil. O foco se volta
                                                    para identifica????o das implica????es de falhas de articula????o e conflitos
                                                    interinstitucionais sobre os segmentos espec??ficos do p??blico atendido e para a
                                                    exist??ncia e opera????o de compromissos institucionais e instrumentos de gest??o
                                                    pr??-equidade. ?? composta por dois indicadores.',
                    "dimensao" =>  $row->id_dimensao,
                ],
                "indicadores" => []
            ]);
        }
        return $dimensoes;*/
    }
}
