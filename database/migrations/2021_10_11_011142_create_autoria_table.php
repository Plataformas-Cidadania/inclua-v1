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
            $table->integer('id_recurso');
            $table->foreign('id_autor')->references('id_autor')
                    ->on('avaliacao.autor')
                    ->onDelete('cascade');
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
        //$table->dropForeign('autor_autoria_id_autor_foreign');
        //$table->dropForeign('recurso_autoria_id_recurso_foreign');
        Schema::dropIfExists('avaliacao.autoria');
    }
}
