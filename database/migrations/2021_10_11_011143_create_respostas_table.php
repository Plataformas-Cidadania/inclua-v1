<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRespostasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.resposta', function (Blueprint $table) {
            $table->increments('id_resposta')->primary()->comment('Identifica a resposta');
            $table->integer('pontuacao');
            $table->integer('pergunta_id_pergunta');

            $table->integer('pergunta_indicador_id_indicador');

            $table->foreign('id_pergunta')->references('id_pergunta')
                    ->on('avaliacao.pergunta')
                    ->onDelete('cascade');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $table->dropForeign('pergunta_resposta_id_pergunta_foreign'); 
        Schema::dropIfExists('avaliacao.resposta');
    }
}
