<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;



class HomeController extends Controller
{
    public function index(){

        //return view('home');

        $webdoors = \App\Webdoor::orderBy('posicao')->where('status', 1)->get();
        $text1 = \App\Text::where('slug', 'diagnostico')->first();
        $text2 = \App\Text::where('slug', 'resultado')->first();
        $text3 = \App\Text::where('slug', 'recursos')->first();




        return view('home', [
            'webdoors' => $webdoors,
            'text1' => $text1,
            'text2' => $text2,
            'text3' => $text3,
        ]);



    }

}


