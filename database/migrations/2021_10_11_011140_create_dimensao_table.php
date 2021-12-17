<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class  CreateDimensaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.dimensao', function (Blueprint $table) {
            $table->increments('id_dimensao')->comment('Identifica a dimensão');
            $table->integer('numero')->comment('Numero único da dimensão');
            $table->unique('numero');
            $table->string('titulo', 500)->comment('Titulo da dimensão');
            $table->text('descricao')->comment('Descrição da dimensão');
            $table->integer('vl_baixo')->comment('Valores maiores ou igual');
            $table->integer('vl_alto')->comment('Valores menores ou igual');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('avaliacao.dimensao');
    }
}
