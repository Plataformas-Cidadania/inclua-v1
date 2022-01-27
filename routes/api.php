<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

    Route::get('/dimensao/{id_dimensao}',[App\Http\Controllers\Api\IndicadorController::class, 'getAllIndicadoresPorIdDimensao'])
        ->name('api.indicadores.getAllIndicadoresPorIdDimensao');

    Route::get('/nome/{nome_indicador}',[App\Http\Controllers\Api\IndicadorController::class, 'getAllIndicadoresPorNome'])
        ->name('api.indicadores.getAllIndicadoresPorNome');
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

    Route::get('nome/{nome_categoria}', [App\Http\Controllers\Api\CategoriaController::class, 'getCategoriaPorNome'])
        ->name('api.categoria.getCategoriaPorNome');

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

    Route::get('/{id_recurso}',[App\Http\Controllers\Api\CategorizacaoController::class, 'getAllByIdRecurso'])
        ->name('api.categorizacao.getAllByIdRecurso');

    Route::post('/', [App\Http\Controllers\Api\CategorizacaoController::class, 'store'])
        ->name('api.categorizacao.store');

    Route::delete('/{id_categoria}/{id_recurso}',[App\Http\Controllers\Api\CategorizacaoController::class, 'destroy'])
        ->name('api.categorizacao.destroy');
});

Route::group([
    'prefix' => 'autoria',
], function () {

    Route::get('/', [App\Http\Controllers\Api\AutoriaController::class, 'getAll'])
        ->name('api.autoria.getAll');

    Route::get('/{id_autor}/{id_recurso}',[App\Http\Controllers\Api\AutoriaController::class, 'get'])
        ->name('api.autoria.get');

    Route::post('/', [App\Http\Controllers\Api\AutoriaController::class, 'store'])
        ->name('api.autoria.store');

    Route::delete('/{id_autor}/{id_recurso}',[App\Http\Controllers\Api\AutoriaController::class, 'destroy'])
        ->name('api.autoria.destroy');
});

Route::group([
    'prefix' => 'recurso',
], function () {

    Route::get('/', [App\Http\Controllers\Api\RecursoController::class, 'getAll'])
        ->name('api.recurso.getAll');

    Route::get('/paginado/{nr_itens}', [App\Http\Controllers\Api\RecursoController::class, 'getAllPaginado'])
        ->name('api.recurso.getAllPaginado');

    Route::get('/indicador/{id_indicador}/paginado/{nr_itens}', [App\Http\Controllers\Api\RecursoController::class, 'getByIdIndicadorPaginado'])
        ->name('api.recurso.getByIdIndicadorPaginado');

    Route::get('/{recurso}',[App\Http\Controllers\Api\RecursoController::class, 'get'])
        ->name('api.recurso.get');

    Route::post('/', [App\Http\Controllers\Api\RecursoController::class, 'store'])
        ->name('api.recurso.store');

    Route::put('/{recurso}', [App\Http\Controllers\Api\RecursoController::class, 'update'])
        ->name('api.recurso.update');

    Route::delete('/{recurso}',[App\Http\Controllers\Api\RecursoController::class, 'destroy'])
        ->name('api.recurso.destroy');

    Route::get('/autores/{recurso}',[App\Http\Controllers\Api\RecursoController::class, 'getAllAutoresPorIdRecurso'])
        ->name('api.recurso.getAllAutoresPorIdRecurso');

    Route::get('/links/{recurso}',[App\Http\Controllers\Api\RecursoController::class, 'getAllLinksPorIdRecurso'])
        ->name('api.recurso.getAllLinksPorIdRecurso');

});


Route::group([
    'prefix' => 'busca_recursos',
], function () {
    Route::get('/tipo_recurso/{id_tipo_recurso}',[App\Http\Controllers\Api\RecursoController::class, 'getAllRecursoPorIdTipoRecurso'])
        ->name('api.busca_recurso.getAllRecursoPorIdTipoRecurso');

    Route::get('/categoria/{id}',[App\Http\Controllers\Api\RecursoController::class, 'getAllRecursosPorIDCategoria'])
        ->name('api.busca_recurso.getAllRecursosPorIDCategoria');

    Route::get('/indicador/{nome}',[App\Http\Controllers\Api\RecursoController::class, 'getAllRecursosPorIdIndicador'])
        ->name('api.busca_recurso.getAllRecursosPorIdIndicador');

    Route::get('/palavra_chave/{palavra_chave}',[App\Http\Controllers\Api\RecursoController::class, 'getAllRecursoPorPalavraChave'])
        ->name('api.busca_recurso.getAllRecursoPorPalavraChave');

    Route::get('/usuario/{id_user}',[App\Http\Controllers\Api\RecursoController::class, 'getAllRecursoPorIdUsuario'])
        ->name('api.recurso.getAllRecursoPorIdUsuario');

});

Route::group([
    'prefix' => 'indicacao',
], function () {

    Route::get('/', [App\Http\Controllers\Api\IndicacaoController::class, 'getAll'])
        ->name('api.indicacao.getAll');

    Route::get('/{id_indicador}/{id_recurso}',[App\Http\Controllers\Api\IndicacaoController::class, 'get'])
        ->name('api.indicacao.get');

    Route::get('/{id_recurso}',[App\Http\Controllers\Api\IndicacaoController::class, 'getAllByIdRecurso'])
        ->name('api.indicacao.getAllByIdRecurso');

    Route::post('/', [App\Http\Controllers\Api\IndicacaoController::class, 'store'])
        ->name('api.indicacao.store');

    Route::delete('/{id_indicador}/{id_recurso}',[App\Http\Controllers\Api\IndicacaoController::class, 'destroy'])
        ->name('api.indicacao.destroy');
});

Route::group([
    'prefix' => 'link',
], function () {

    Route::get('/', [App\Http\Controllers\Api\LinkController::class, 'getAll'])
        ->name('api.link.getAll');

    Route::get('/{link}',[App\Http\Controllers\Api\LinkController::class, 'get'])
        ->name('api.link.get');

    Route::post('/', [App\Http\Controllers\Api\LinkController::class, 'store'])
        ->name('api.link.store');

    Route::put('/{link}', [App\Http\Controllers\Api\LinkController::class, 'update'])
        ->name('api.link.update');

    Route::delete('/{link}',[App\Http\Controllers\Api\LinkController::class, 'destroy'])
        ->name('api.link.destroy');
});

Route::group([
    'prefix' => 'tipo_recurso',
], function () {

    Route::get('/', [App\Http\Controllers\Api\TipoRecursoController::class, 'getAll'])
        ->name('api.tipo_recurso.getAll');

    Route::get('/{tipo_recurso}',[App\Http\Controllers\Api\TipoRecursoController::class, 'get'])
        ->name('api.tipo_recurso.get');

    Route::get('/nome/{tipo_recurso}',[App\Http\Controllers\Api\TipoRecursoController::class, 'getAllTipoRecursoPorNome'])
        ->name('api.tipo_recurso.getAllTipoRecursoPorNome');

    Route::post('/', [App\Http\Controllers\Api\TipoRecursoController::class, 'store'])
        ->name('api.tipo_recurso.store');

    Route::put('/{tipo_recurso}', [App\Http\Controllers\Api\TipoRecursoController::class, 'update'])
        ->name('api.tipo_recurso.update');

    Route::delete('/{tipo_recurso}',[App\Http\Controllers\Api\TipoRecursoController::class, 'destroy'])
        ->name('api.tipo_recurso.destroy');
});

Route::group([
    'prefix' => 'pergunta',
], function () {

    Route::get('/', [App\Http\Controllers\Api\PerguntaController::class, 'getAll'])
        ->name('api.pergunta.getAll');

    Route::get('/{pergunta}',[App\Http\Controllers\Api\PerguntaController::class, 'get'])
        ->name('api.pergunta.get');

    Route::post('/', [App\Http\Controllers\Api\PerguntaController::class, 'store'])
        ->name('api.pergunta.store');

    Route::put('/{pergunta}', [App\Http\Controllers\Api\PerguntaController::class, 'update'])
        ->name('api.pergunta.update');

    Route::delete('/{pergunta}',[App\Http\Controllers\Api\PerguntaController::class, 'destroy'])
        ->name('api.pergunta.destroy');

    Route::get('/indicador/{id_indicador}',[App\Http\Controllers\Api\PerguntaController::class, 'getPerguntasPorIdIndicador'])
        ->name('api.pergunta.getPerguntasPorIdIndicador');
});

Route::group([
    'prefix' => 'risco',
], function () {

    Route::get('/', [App\Http\Controllers\Api\RiscoController::class, 'getAll'])
        ->name('api.risco.getAll');

    Route::get('/{risco}',[App\Http\Controllers\Api\RiscoController::class, 'get'])
        ->name('api.risco.get');

    Route::post('/', [App\Http\Controllers\Api\RiscoController::class, 'store'])
        ->name('api.risco.store');

    Route::put('/{risco}', [App\Http\Controllers\Api\RiscoController::class, 'update'])
        ->name('api.risco.update');

    Route::delete('/{risco}',[App\Http\Controllers\Api\RiscoController::class, 'destroy'])
        ->name('api.risco.destroy');
});


Route::group([
    'prefix' => 'resposta',
], function () {

    Route::get('/', [App\Http\Controllers\Api\RespostaController::class, 'getAll'])
        ->name('api.resposta.getAll');

    Route::get('/diagnostico/{id_diagnostico}',[App\Http\Controllers\Api\RespostaController::class, 'getbyDiagnosticoId'])
        ->name('api.resposta.get');

    Route::post('/', [App\Http\Controllers\Api\RespostaController::class, 'store'])
        ->name('api.resposta.store');

    Route::post('/insereRespostas', [App\Http\Controllers\Api\RespostaController::class, 'insereRespostas'])
        ->name('api.resposta.store');

    Route::delete('/{resposta}',[App\Http\Controllers\Api\RespostaController::class, 'destroy'])
        ->name('api.resposta.destroy');
});

Route::group([
    'prefix' => 'diagnostico',
], function () {

    Route::get('/{id_dimensao}/{id_diagnostico}',[App\Http\Controllers\Api\DiagnosticoController::class, 'calcularPontuacao'])
        ->name('api.diagnostico.calcularPontuacao');
    Route::get('{id_diagnostico}',[App\Http\Controllers\Api\DiagnosticoController::class, 'calcularPontuacaoAll'])
        ->name('api.diagnostico.calcularPontuacaoAll');
});


Route::group([
    'prefix' => 'pergunta_relate',
], function () {

    Route::get('/', [App\Http\Controllers\Api\PerguntaRelateController::class, 'getAll'])
        ->name('api.pergunta_relate.getAll');

    Route::get('/{pergunta_relate}',[App\Http\Controllers\Api\PerguntaRelateController::class, 'get'])
        ->name('api.pergunta_relate.get');

    Route::post('/', [App\Http\Controllers\Api\PerguntaRelateController::class, 'store'])
        ->name('api.pergunta_relate.store');

    Route::put('/{pergunta_relate}', [App\Http\Controllers\Api\PerguntaRelateController::class, 'update'])
        ->name('api.pergunta_relate.update');

    Route::delete('/{pergunta_relate}',[App\Http\Controllers\Api\PerguntaRelateController::class, 'destroy'])
        ->name('api.pergunta_relate.destroy');
});

Route::group([
    'prefix' => 'resposta_relate',
], function () {

    Route::get('/', [App\Http\Controllers\Api\RespostaRelateController::class, 'getAll'])
        ->name('api.resposta_relate.getAll');

    Route::get('/{resposta_relate}',[App\Http\Controllers\Api\RespostaRelateController::class, 'get'])
        ->name('api.resposta_relate.get');

    Route::post('/', [App\Http\Controllers\Api\RespostaRelateController::class, 'store'])
        ->name('api.resposta_relate.store');

    Route::put('/{resposta_relate}', [App\Http\Controllers\Api\RespostaRelateController::class, 'update'])
        ->name('api.resposta_relate.update');

    Route::delete('/{resposta_relate}',[App\Http\Controllers\Api\RespostaRelateController::class, 'destroy'])
        ->name('api.resposta_relate.destroy');
});

Route::group([
    'prefix' => 'depoimento',
], function () {

    Route::get('/', [App\Http\Controllers\Api\DepoimentoController::class, 'getAll'])
        ->name('api.depoimento.getAll');

    Route::get('/{depoimento}',[App\Http\Controllers\Api\DepoimentoController::class, 'get'])
        ->name('api.depoimento.get');

    Route::post('/', [App\Http\Controllers\Api\DepoimentoController::class, 'store'])
        ->name('api.depoimento.store');

    Route::put('/{depoimento}', [App\Http\Controllers\Api\DepoimentoController::class, 'update'])
        ->name('api.depoimento.update');

    Route::delete('/{depoimento}',[App\Http\Controllers\Api\DepoimentoController::class, 'destroy'])
        ->name('api.depoimento.destroy');
});
