<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RespostaRelateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.resposta_relate', function (Blueprint $table) {
            $table->increments('id_resposta')->comment('Identifica a resposta');
            $table->text('descricao')->comment('Descrição da resposta');
            $table->integer('status');
            $table->integer('id_pergunta');
            $table->integer('id_user')->nullable();
            $table->foreign('id_pergunta')->references('id_pergunta')
                    ->on('avaliacao.pergunta_relate')
                    ->onDelete('cascade');
            $table->foreign('id_user')->references('id')
                    ->on('public.users')
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
        Schema::table('avaliacao.resposta_relate', function (Blueprint $table) {
            $table->dropForeign(['id_pergunta']);
        });
        Schema::table('avaliacao.resposta_relate', function (Blueprint $table) {
            $table->dropForeign(['id_user']);
        });

        Schema::dropIfExists('avaliacao.resposta_relate');

    }
}
