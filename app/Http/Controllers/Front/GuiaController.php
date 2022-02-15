<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class GuiaController extends Controller{


    public function listar(){
        $text = \App\Models\Text::where('slug', 'guia')->first();
        $lists = \App\Models\Guia::where('status', '=', 1)->get();

        return view('guia.list', [

            'text' => $text,
            'lists' => $lists,
        ]);

    }
}
