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
    Route::get('/', [App\Http\Controllers\Api\IndicadoresController::class, 'getAll'])
         ->name('api.indicadors.indicador.getAll');
    Route::get('/{indicador}',[App\Http\Controllers\Api\IndicadoresController::class, 'get'])
         ->name('api.indicadors.indicador.get');
    Route::post('/', [App\Http\Controllers\Api\IndicadoresController::class, 'store'])
         ->name('api.indicadors.indicador.store');
    Route::put('/{indicador}', [App\Http\Controllers\Api\IndicadoresController::class, 'update'])
         ->name('api.indicadors.indicador.update');
    Route::delete('/{indicador}',[App\Http\Controllers\Api\IndicadoresController::class, 'destroy'])
         ->name('api.indicadors.indicador.destroy');
});
