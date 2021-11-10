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
        Schema::create('avaliacao.indicacao', function (Blueprint $table) {
        $table->integer('id_indicador');             
        $table->foreign('id_indicador')->references('id_indicador')
              ->on('avaliacao.indicador')
              ->onDelete('cascade');
        $table->integer('id_recurso');             
        $table->foreign('id_recurso')->references('id_recurso')
              ->on('avaliacao.recurso')
              ->onDelete('cascade');
        $table->primary(['id_indicador', 'id_recurso']);
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.indicacao', function (Blueprint $table) {
            $table->dropForeign(['id_indicador','id_recurso']);
        });
        Schema::dropIfExists('avaliacao.indicacao');
    }
}
