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
            $table->string('letra', 2)->comment('Letra a pergunta');
            $table->text('descricao')->comment('Descrição da pergunta');
            $table->string('legenda', 50)->comment('Legenda a pergunta');
            $table->integer('vl_minimo')->nullable()->comment('Armazena o valor minimo que se pode ter na resposta da pergunta');
            $table->integer('vl_maximo')->nullable()->comment('Armazena o valor maximo que se pode ter na resposta da pergunta');
            $table->integer('nao_se_aplica')->comment('armazena se devemos adicionar marcação de nao se aplica na pergunta');
            $table->integer('inverter')->comment('armazena se devemos ou nao inverter a pontuação da pergunta');
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
        Schema::table('avaliacao.pergunta', function (Blueprint $table) {
            $table->dropForeign(['id_indicador']);
        });
        Schema::dropIfExists('avaliacao.pergunta');
    }
}
