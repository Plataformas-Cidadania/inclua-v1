<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlternativaRelateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.alternativa_relate', function (Blueprint $table) {
            $table->increments("id_alternativa")
                ->comment('Identifica a alternativa da pergunta do relate');
            $table->text('descricao')
                ->comment('Descrição da alternativa');
            $table->integer('outros')->default(0)
                ->comment('Definir se a alternativa é do tipo outros (0|1)');
            $table->integer('id_pergunta');
            $table->foreign('id_pergunta')->references('id_pergunta')
                ->on('avaliacao.pergunta_relate')
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
        Schema::dropIfExists('avaliacao.alternativa_relate');
    }
}
