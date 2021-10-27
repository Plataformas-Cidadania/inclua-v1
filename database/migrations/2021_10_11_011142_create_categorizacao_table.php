<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategorizacaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.categorizacao', function (Blueprint $table) {
            $table->integer('id_categoria');
            $table->integer('id_recurso');
            $table->foreign('id_categoria')->references('id_categoria')
            ->on('avaliacao.categoria')
            ->onDelete('cascade');
            $table->foreign('id_recurso')->references('id_recurso')
            ->on('avaliacao.recurso')
            ->onDelete('cascade');
            $table->primary(['id_categoria', 'id_recurso']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //$table->dropForeign('categoria_categorizacao_id_categoria_foreign');
        //$table->dropForeign('recurso_categorizacao_id_recurso_foreign');
        Schema::dropIfExists('avaliacao.categorizacao');
    }
}
