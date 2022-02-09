<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PerguntaRelateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.pergunta_relate', function (Blueprint $table) {
            $table->increments('id_pergunta')->comment('Identifica a pergunta do relate');
            $table->text('descricao')->comment('Descrição da pergunta');
            $table->integer('id_tipo')->comment('Identifica o tipo da pergunta');
            $table->foreign('id_tipo')->references('id_tipo')
                    ->on('avaliacao.tipo_pergunta_relate')
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
        Schema::dropIfExists('avaliacao.pergunta_relate');

    }
}
