<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRiscoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.risco', function (Blueprint $table) {
            $table->increments('id_risco')->comment('Identifica o risco');
            $table->integer('vl_alto')->comment('valor limitrofe para considerar um alto risco');
            $table->integer('vl_baixo')->comment('valor limitrofe para considerar um baixo risco');
            $table->foreign('id_indicador')->references('id_indicador')
                    ->on('avaliacao.indicador')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $table->dropForeign('indicador_risco_id_indicador_foreign');       
        Schema::dropIfExists('avaliacao.risco');
    }
}
