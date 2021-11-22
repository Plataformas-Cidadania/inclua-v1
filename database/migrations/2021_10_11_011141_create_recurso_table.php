<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecursoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.recurso', function (Blueprint $table) {
            $table->increments('id_recurso')->comment('Identifica o recurso');
            $table->string('nome', 50)->comment('nomde do recurso');
            $table->timestamp('ultimo_acesso')->comment('Data do último acesso');
            $table->string('esfera', 50)->comment('nome da área de atuação');
            $table->integer('id_tipo_recurso');
            $table->foreign('id_tipo_recurso')->references('id_tipo_recurso')
                    ->on('avaliacao.tipo_recurso')
                    ->onDelete('set null');
            $table->integer('id_formato');
            $table->foreign('id_formato')->references('id_formato')
                    ->on('avaliacao.formato_recurso')
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
        Schema::table('avaliacao.recurso', function (Blueprint $table) {
            $table->dropForeign(['id_formato']);
            $table->dropForeign(['id_tipo_recurso']);
        });
        Schema::dropIfExists('avaliacao.recurso');
    }
}
