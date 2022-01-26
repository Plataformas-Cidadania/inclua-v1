<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;

class LinkController extends Controller
{

    public function __construct()
    {

    }

    function index($id_recurso)
    {
        return view('cms::link.listar', ['id_recurso' => $id_recurso]);
    }

    public function detalhar($id)
    {
        $link = new \stdClass();
        $link->id_link= $id;
        $link->imagem = "";
        $link->arquivo = "";
        return view('cms::link.detalhar', ['link' => $link]);
    }

}
