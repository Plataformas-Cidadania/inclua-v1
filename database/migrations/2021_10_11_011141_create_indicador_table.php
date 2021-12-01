<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIndicadorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.indicador', function (Blueprint $table) {
            $table->increments('id_indicador');
            $table->integer('numero')->comment('Numero único do indicador');
            $table->unique('numero');
            $table->string('titulo', 50);
            $table->text('descricao');
            $table->integer('id_dimensao')->nullable();
            $table->foreign('id_dimensao')->references('id_dimensao')
                    ->on('avaliacao.dimensao')
                    ->onDelete('set null');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.indicador', function (Blueprint $table) {
            $table->dropForeign(['id_dimensao']);
        });

        Schema::dropIfExists('avaliacao.indicador');
    }
}
