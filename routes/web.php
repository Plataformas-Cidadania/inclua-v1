<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;



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
Route::get('/', 'App\Http\Controllers\HomeController@index');

Route::get('contato', 'App\Http\Controllers\ContactController@email');
Route::post('contact', 'App\Http\Controllers\ContactController@send');

Route::get('diagnostico', 'App\Http\Controllers\DiagnosticoController@completo');
Route::get('diagnostico-react', 'App\Http\Controllers\DiagnosticoController@completoReact');
Route::get('recursos', 'App\Http\Controllers\RecursoController@listar');


/*Route::get('contribua', 'App\Http\Controllers\ContribuaController@listar');
Route::get('interaja', 'App\Http\Controllers\ContribuaController@interaja');
Route::get('compartilhe', 'App\Http\Controllers\ContribuaController@compartilhe');
Route::get('relate', 'App\Http\Controllers\ContribuaController@relate');*/


Route::get('/contribua', [ContribuaController::class , 'listar']);
Route::get('/interaja', [ContribuaController::class , 'interaja']);
Route::get('/compartilhe', [ContribuaController::class , 'compartilhe']);
Route::get('/relate', [ContribuaController::class , 'relate']);

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



if(env('DYNAMIC_ROUTES')=='true'){
    $modulos = \Illuminate\Support\Facades\DB::table('modulos')->select('slug')->get();

    foreach ($modulos as $modulo) {
        if(!empty($modulo->slug)){
            Route::get($modulo->slug.'/', 'App\Http\Controllers\ModuloController@details');
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
