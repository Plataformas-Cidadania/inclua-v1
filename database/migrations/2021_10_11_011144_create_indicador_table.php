<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIndicadorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
<<<<<<< HEAD
        Schema::create('avaliacao.indicador', function (Blueprint $table) {
            $table->increments('id_indicador')->primary();
            $table->string('nome', 50);
            $table->text('descricao');
            $table->foreign('id_dimensao')->nullable()->references('id_dimensao')
                    ->on('avaliacao.dimensao')
                    ->onDelete('set null');

=======
        Schema::create('indicador', function (Blueprint $table) {
            $table->increments('id_indicador');
            $table->string('nome', 50)->nullable();
            $table->text('descricao')->nullable();
            $table->integer('dimensao_id_dimensao');
>>>>>>> 8520836f2255373e5dcf9bb34cc6de2062522e1f
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $table->dropForeign('dimensao_indicador_id_indicador_foreign');
        Schema::dropIfExists('avaliacao.indicador');
    }
}
