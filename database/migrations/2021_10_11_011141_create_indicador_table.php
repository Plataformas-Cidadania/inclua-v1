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
            $table->string('nome', 50);
            $table->text('descricao');
            $table->integer('id_dimensao');
            $table->foreign('id_dimensao')->nullable()->references('id_dimensao')
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
        //$table->dropForeign('dimensao_indicador_id_indicador_foreign');
        Schema::dropIfExists('avaliacao.indicador');
    }
}
