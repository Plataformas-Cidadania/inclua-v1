<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;



class HomeController extends Controller
{
    public function index(){

        //return view('home');

        $webdoors = \App\Models\Webdoor::orderBy('posicao')->where('status', 1)->get();
        $text1 = \App\Models\Text::where('slug', 'diagnostico')->first();
        $text2 = \App\Models\Text::where('slug', 'resultado')->first();
        $text3 = \App\Models\Text::where('slug', 'recursos')->first();
        $text4 = \App\Models\Text::where('slug', 'depoimento')->first();
        $partners = \App\Models\Parceiro::orderBy('id')->get();
        $linksHome = \App\Models\Modulo::where('tipo_id', 8)->orderBy('id')->get();

        $depoimentos = DB::table('avaliacao.depoimento')
            ->select('depoimento.descricao', 'depoimento.icone', 'users.name')
            ->join('users', 'users.id', '=', 'depoimento.id_user')
            ->where('depoimento.status', 1)
            ->orderBy('depoimento.id_depoimento', 'desc')
            ->get();

        return view('home', [
            'webdoors' => $webdoors,
            'text1' => $text1,
            'text2' => $text2,
            'text3' => $text3,
            'text4' => $text4,
            'partners' => $partners,
            'depoimentos' => $depoimentos,
            'linksHome' => $linksHome,
        ]);



    }

}


