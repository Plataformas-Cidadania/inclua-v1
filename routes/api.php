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
         ->name('api.indicadores.indicador.getAll');
    Route::get('/{indicador}',[App\Http\Controllers\Api\IndicadorController::class, 'get'])
         ->name('api.indicadores.indicador.get');
    Route::post('/', [App\Http\Controllers\Api\IndicadorController::class, 'store'])
         ->name('api.indicadores.indicador.store');
    Route::put('/{indicador}', [App\Http\Controllers\Api\IndicadorController::class, 'update'])
         ->name('api.indicadores.indicador.update');
    Route::delete('/{indicador}',[App\Http\Controllers\Api\IndicadorController::class, 'destroy'])
         ->name('api.indicadores.indicador.destroy');
});


Route::group([
    'prefix' => 'autores',
], function () {
    Route::get('/', [App\Http\Controllers\Api\AutorController::class, 'getAll'])
        ->name('api.autores.autor.getAll');
    Route::get('/{autor}',[App\Http\Controllers\Api\AutorController::class, 'get'])
        ->name('api.autores.autor.get');
    Route::post('/', [App\Http\Controllers\Api\AutorController::class, 'store'])
        ->name('api.autores.autor.store');
    Route::put('/{autor}', [App\Http\Controllers\Api\AutorController::class, 'update'])
        ->name('api.autores.autor.update');
    Route::delete('/{autor}',[App\Http\Controllers\Api\AutorController::class, 'destroy'])
        ->name('api.autores.autor.destroy');
});
