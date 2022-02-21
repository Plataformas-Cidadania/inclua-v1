<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCuradoriaRecursosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.curadoria_recurso', function (Blueprint $table) {

            $table->integer('id_curadoria');
            $table->foreign('id_curadoria')->references('id_curadoria')
                ->on('avaliacao.curadoria')
                ->onDelete('cascade');
            $table->integer('id_recurso');
            $table->foreign('id_recurso')->references('id_recurso')
                ->on('avaliacao.recurso')
                ->onDelete('cascade');
            $table->primary(['id_curadoria', 'id_recurso']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.curadoria_recurso', function (Blueprint $table) {
            $table->dropForeign(['id_curadoria']);
            $table->dropForeign(['id_recurso']);
        });
        Schema::dropIfExists('avaliacao.curadoria_recurso');
    }
}
