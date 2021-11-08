<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Api\Http\Controllers\Api\Api\IndicadorsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'indicadores',
], function () {
    Route::get('/', [App\Http\Controllers\Api\IndicadorController::class, 'getAll'])
         ->name('api.indicadores.getAll');
    Route::get('/{indicador}',[App\Http\Controllers\Api\IndicadorController::class, 'get'])
         ->name('api.indicadores.get');
    Route::post('/', [App\Http\Controllers\Api\IndicadorController::class, 'store'])
         ->name('api.indicadores.store');
    Route::put('/{indicador}', [App\Http\Controllers\Api\IndicadorController::class, 'update'])
         ->name('api.indicadores.update');
    Route::delete('/{indicador}',[App\Http\Controllers\Api\IndicadorController::class, 'destroy'])
         ->name('api.indicadores.destroy');
});


Route::group([
    'prefix' => 'autores',
], function () {
    Route::get('/', [App\Http\Controllers\Api\AutorController::class, 'getAll'])
        ->name('api.autores.getAll');
    Route::get('/{autor}',[App\Http\Controllers\Api\AutorController::class, 'get'])
        ->name('api.autores.get');
    Route::post('/', [App\Http\Controllers\Api\AutorController::class, 'store'])
        ->name('api.autores.store');
    Route::put('/{autor}', [App\Http\Controllers\Api\AutorController::class, 'update'])
        ->name('api.autores.update');
    Route::delete('/{autor}',[App\Http\Controllers\Api\AutorController::class, 'destroy'])
        ->name('api.autores.destroy');
});

Route::group([
    'prefix' => 'categoria',
], function () {
    Route::get('/', [App\Http\Controllers\Api\CategoriaController::class, 'getAll'])
        ->name('api.categoria.getAll');
    Route::get('/{categoria}',[App\Http\Controllers\Api\CategoriaController::class, 'get'])
        ->name('api.categoria.get');
    Route::post('/', [App\Http\Controllers\Api\CategoriaController::class, 'store'])
        ->name('api.categoria.store');
    Route::put('/{categoria}', [App\Http\Controllers\Api\CategoriaController::class, 'update'])
        ->name('api.categoria.update');
    Route::delete('/{categoria}',[App\Http\Controllers\Api\CategoriaController::class, 'destroy'])
        ->name('api.categoria.destroy');
});

Route::group([
    'prefix' => 'dimensao',
], function () {
    Route::get('/', [App\Http\Controllers\Api\DimensaoController::class, 'getAll'])
        ->name('api.dimensao.getAll');
    Route::get('/{dimensao}',[App\Http\Controllers\Api\DimensaoController::class, 'get'])
        ->name('api.dimensao.get');
    Route::post('/', [App\Http\Controllers\Api\DimensaoController::class, 'store'])
        ->name('api.dimensao.store');
    Route::put('/{dimensao}', [App\Http\Controllers\Api\DimensaoController::class, 'update'])
        ->name('api.dimensao.update');
    Route::delete('/{dimensao}',[App\Http\Controllers\Api\DimensaoController::class, 'destroy'])
        ->name('api.dimensao.destroy');
});

Route::group([
    'prefix' => 'formatorecurso',
], function () {
    Route::get('/', [App\Http\Controllers\Api\FormatoRecursoController::class, 'getAll'])
        ->name('api.formatorecurso.getAll');
    Route::get('/{formatorecurso}',[App\Http\Controllers\Api\FormatoRecursoController::class, 'get'])
        ->name('api.formatorecurso.get');
    Route::post('/', [App\Http\Controllers\Api\FormatoRecursoController::class, 'store'])
        ->name('api.formatorecurso.store');
    Route::put('/{formatorecurso}', [App\Http\Controllers\Api\FormatoRecursoController::class, 'update'])
        ->name('api.formatorecurso.update');
    Route::delete('/{formatorecurso}',[App\Http\Controllers\Api\FormatoRecursoController::class, 'destroy'])
        ->name('api.formatorecurso.destroy');
});

Route::group([
    'prefix' => 'categorizacao',
], function () {
    Route::get('/', [App\Http\Controllers\Api\CategorizacaoController::class, 'getAll'])
        ->name('api.categorizacao.getAll');
    Route::get('/{id_categoria}/{id_recurso}',[App\Http\Controllers\Api\CategorizacaoController::class, 'get'])
        ->name('api.categorizacao.get');
    Route::post('/', [App\Http\Controllers\Api\CategorizacaoController::class, 'store'])
        ->name('api.categorizacao.store');
    Route::delete('/{id_categoria}/{id_recurso}',[App\Http\Controllers\Api\CategorizacaoController::class, 'destroy'])
        ->name('api.categorizacao.destroy');
});
