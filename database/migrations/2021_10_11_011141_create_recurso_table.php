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
            $table->increments('id_recurso')->primary()->comment('Identifica o recurso');
            $table->string('nome', 50)->comment('nomde do recurso');
            $table->timestamp('ultimo_acesso')->comment('Data do último acesso');
            $table->string('esfera', 50)->comment('nome da área de atuação');
            $table->foreign('id_tipo_recurso')->references('id_tipo_recurso')
                    ->on('avaliacao.tipo_recurso')
                    ->onDelete('set null');
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
        $table->dropForeign('tipo_recurso_recurso_id_tipo_recurso_foreign');
        $table->dropForeign('formato_recurso_recurso_id_formato_foreign');
        Schema::dropIfExists('avaliacao.recurso');
    }
}
