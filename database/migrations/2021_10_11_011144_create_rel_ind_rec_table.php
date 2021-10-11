<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelIndRecTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rel_ind_rec', function (Blueprint $table) {
            $table->integer('indicador_id_indicador');
            $table->integer('recurso_id_recurso');
            $table->integer('recurso_id_tipo_recurso');
            $table->integer('recurso_id_formato');

            $table->primary(['indicador_id_indicador', 'recurso_id_recurso', 'recurso_id_tipo_recurso', 'recurso_id_formato']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rel_ind_rec');
    }
}
