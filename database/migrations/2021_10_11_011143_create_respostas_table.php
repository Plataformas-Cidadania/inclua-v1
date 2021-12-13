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
            $table->increments('id_resposta')->comment('Identifica a resposta');
            $table->integer('pontuacao');
            $table->integer('id_pergunta');
            $table->uuid('id_diagnostico');
            $table->foreign('id_pergunta')->references('id_pergunta')
                    ->on('avaliacao.pergunta')
                    ->onDelete('cascade');
            $table->foreign('id_diagnostico')->references('id_diagnostico')
                    ->on('avaliacao.diagnostico')
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
        Schema::table('avaliacao.resposta', function (Blueprint $table) {
            $table->dropForeign(['id_pergunta']);
        });
        Schema::dropIfExists('avaliacao.resposta');
    }
}
