<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePerguntaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.pergunta', function (Blueprint $table) {
            $table->increments('id_pergunta')->comment('Identifica a pergunta');
            $table->string('nome', 50)->comment('Nome da pergunta');
            $table->text('descricao')->comment('Descrição da pergunta');
            $table->integer('vl_minimo')->nullable()->comment('Armazena o valor minimo que se pode ter na resposta da pergunta');
            $table->integer('vl_medio')->nullable()->comment('Armazena o valor medio que se pode ter na resposta da pergunta');
            $table->integer('vl_maximo')->nullable()->comment('Armazena o valor maximo que se pode ter na resposta da pergunta');
            $table->integer('id_indicador');
            $table->foreign('id_indicador')->references('id_indicador')
                    ->on('avaliacao.indicador')
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
        //$table->dropForeign('indicador_pergunta_id_indicador_foreign');
        Schema::dropIfExists('avaliacao.pergunta');
    }
}
