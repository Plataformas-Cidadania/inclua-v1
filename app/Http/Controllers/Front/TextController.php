<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class TextController extends Controller{

    private $obj;
    private $page;

    public function __construct(){
        $this->obj = new \App\Models\Text();
    }

    public function getBySlug($slug){
        return $this->obj->where('slug', $slug)->first();
    }
}
