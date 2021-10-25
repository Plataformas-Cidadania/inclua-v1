<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormatoRecursoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.formato_recurso', function (Blueprint $table) {
            $table->increments('id_formato')->primary()->comment('Identifica o formato');
            $table->string('nome', 50)->comment('nome do formato');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('avaliacao.formato_recurso');
    }
}
