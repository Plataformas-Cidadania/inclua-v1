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
    'prefix' => 'indicadors',
], function () {
    Route::get('/', [App\Http\Controllers\Api\IndicadorsController::class, 'getAll'])
         ->name('api.indicadors.indicador.getAll');
    Route::get('/show/{indicador}',[App\Http\Controllers\Api\IndicadorsController::class, 'show'])
         ->name('api.indicadors.indicador.show');
    Route::post('/', [App\Http\Controllers\Api\IndicadorsController::class, 'store'])
         ->name('api.indicadors.indicador.store');    
    Route::put('indicador/{indicador}', [App\Http\Controllers\Api\IndicadorsController::class, 'update'])
         ->name('api.indicadors.indicador.update');
    Route::delete('/indicador/{indicador}',[App\Http\Controllers\Api\IndicadorsController::class, 'destroy'])
         ->name('api.indicadors.indicador.destroy');
});
