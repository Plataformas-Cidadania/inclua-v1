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
        Schema::create('pergunta', function (Blueprint $table) {
            $table->integer('id_pergunta')->comment('Identifica a pergunta');
            $table->string('nome', 50)->nullable()->comment('Nome da pergunta');
            $table->text('descricao')->nullable()->comment('Descrição da pergunta');
            $table->integer('indicador_id_indicador');
            $table->integer('vl_minimo')->nullable()->comment('Armazena o valor minimo que se pode ter na resposta da pergunta');
            $table->integer('vl_medio')->nullable()->comment('Armazena o valor medio que se pode ter na resposta da pergunta');
            $table->integer('vl_maximo')->nullable()->comment('Armazena o valor maximo que se pode ter na resposta da pergunta');

            $table->primary(['id_pergunta', 'indicador_id_indicador']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pergunta');
    }
}
