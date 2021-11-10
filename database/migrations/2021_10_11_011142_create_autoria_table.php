<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAutoriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.autoria', function (Blueprint $table) {
            $table->integer('id_autor'); 
            $table->foreign('id_autor')->references('id_autor')
                    ->on('avaliacao.autor')
                    ->onDelete('cascade');
            $table->integer('id_recurso'); 
            $table->foreign('id_recurso')->references('id_recurso')
                    ->on('avaliacao.recurso')
                    ->onDelete('cascade');

            $table->primary(['id_autor', 'id_recurso']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.autoria', function (Blueprint $table) {
            $table->dropForeign(['id_recurso','id_autor']);
        });
        Schema::dropIfExists('avaliacao.autoria');
    }
}
