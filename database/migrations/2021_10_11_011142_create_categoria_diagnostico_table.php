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
        Schema::create('avaliacao.categoria_diagnostico', function (Blueprint $table) {

        $table->integer('id_categoria');
        $table->foreign('id_categoria')->references('id_categoria')
            ->on('avaliacao.categoria')
            ->onDelete('cascade');
        $table->integer('id_diagnostico');
        $table->foreign('id_diagnostico')->references('id_diagnostico')
            ->on('avaliacao.diagnostico')
            ->onDelete('cascade');
        $table->primary(['id_categoria', 'id_diagnostico']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.categoria_diagnostico', function (Blueprint $table) {
            $table->dropForeign(['id_diagnostico']);
            $table->dropForeign(['id_categoria']);
        });
        Schema::dropIfExists('avaliacao.categoria_diagnostico');
    }
}
