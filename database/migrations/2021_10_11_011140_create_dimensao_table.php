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
            $table->string('titulo', 200)->comment('Titulo da dimensão');
            $table->text('descricao')->comment('Descrição da dimensão');
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
