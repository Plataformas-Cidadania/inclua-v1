<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoRecursoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_recurso', function (Blueprint $table) {
            $table->integer('id_tipo_recurso')->primary()->comment('identifica o tipo de recurso');
            $table->string('nome', 50)->nullable()->comment('nome do tipo de recurso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tipo_recurso');
    }
}