<?php
namespace App\Http\Controllers\Front;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//ROTA DE BOAS VINDAS
/*Route::get('/', function () {
    return view('welcome');
});*/

Route::get('/api', function () {
    return ["description: API de dados do Projeto Inclua.",
        "version: 1.0.0",
        "homepage: https://inclua.ipea.gov.br/",
        "keywords: 'php', 'lumen', 'api', 'rest', 'server, 'http', 'json', 'mapaosc', 'ipea'",
        "license: LGPL-3.0",
        "authors: {Thiago Giannini Ramos, Fábio Barreto, Bruno Passos, Relison Galvão, Raphael Abreu}"
    ];
});

//GRUPO DE ROTAS QUE PASSARÃO PELA AUTENTICAÇÃO
Route::middleware(['auth'])->group(function () {

});

//DASH BOARD PADRÃO CRIADO PELO BREEZE
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';




/*
|-------------------------------------------------------------------------->
| FRONT
|-------------------------------------------------------------------------->
*/
Route::get('/', 'App\Http\Controllers\Front\HomeController@index');

Route::get('contato', 'App\Http\Controllers\Front\ContactController@email');
Route::post('contact', 'App\Http\Controllers\Front\ContactController@send');

//Route::get('diagnostico', 'App\Http\Controllers\Front\DiagnosticoController@completo');
Route::get('diagnostico', 'App\Http\Controllers\Front\DiagnosticoController@completoReact');
Route::get('recursos', 'App\Http\Controllers\Front\RecursoController@listar');


/*Route::get('contribua', 'App\Http\Controllers\Front\ContribuaController@listar');
Route::get('interaja', 'App\Http\Controllers\Front\ContribuaController@interaja');
Route::get('compartilhe', 'App\Http\Controllers\Front\ContribuaController@compartilhe');
Route::get('relate', 'App\Http\Controllers\Front\ContribuaController@relate');*/


Route::get('/esqueceu-senha', [ContribuaController::class , 'esqueceu']);
Route::get('/contribua', [ContribuaController::class , 'listar']);
Route::get('/interaja', [ContribuaController::class , 'interaja']);
Route::get('/interaja-detalhar', [ContribuaController::class , 'interajaDetalhar']);
Route::get('/compartilhe', [ContribuaController::class , 'compartilhe']);
Route::get('/relate', [ContribuaController::class , 'relate']);
Route::get('/depoimento', [ContribuaController::class , 'depoimento']);

Route::get('/resultado', [ResultadoController::class , 'listar']);
Route::get('/imprimir', [ResultadoController::class , 'print']);


$routes = [
    ['Page', 'sobres', 'sobre'],
    ['Video', 'videos', 'video'],
];

//ROTAS PADRÕES
$routesSearch = [];

foreach ($routes as $route) {
    Route::get($route[1].'/', $route[0].'Controller@listing');
    Route::get($route[2].'/{id}/{titulo}', $route[0].'Controller@details');
}
foreach ($routesSearch as $route) {
    Route::get($route[1].'/{search}', $route[0].'Controller@listing');
}

    if(env('DYNAMIC_ROUTES')){

    $modulos = \Illuminate\Support\Facades\DB::table('cms.modulos')->select('slug')->get();

    foreach ($modulos as $modulo) {
        if(!empty($modulo->slug)){
            //Route::get($modulo->slug.'/', 'App\Http\Controllers\Front\ModuloController@details');
            Route::get($modulo->slug.'/', [ModuloController::class , 'details']);
        }
    }
}

//Testes components-------------------------------------------------
Route::get('/teste-dimensoes', [DiagnosticoController::class , 'testeDimensoes']);
//------------------------------------------------------------------

/*
<--------------------------------------------------------------------------|
| FRONT
<--------------------------------------------------------------------------|
*/
