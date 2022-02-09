<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TipoPerguntaRelateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.tipo_pergunta_relate', function (Blueprint $table) {
            $table->increments('id_tipo')->comment('Identifica o tipo da pergunta');
            $table->text('descricao')->comment('Descrição do tipo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('avaliacao.tipo_pergunta_relate');

    }
}
