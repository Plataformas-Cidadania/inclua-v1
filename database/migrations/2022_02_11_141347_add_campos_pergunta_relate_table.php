<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCamposPerguntaRelateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('avaliacao.pergunta_relate', function (Blueprint $table) {
            $table->integer('tipo_resposta')->default(1)
                ->comment("Informa o tipo de campo que será usado para resposta. 1: Texto | 2: Alternativas");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.pergunta_relate', function (Blueprint $table) {
            $table->dropColumn('tipo_resposta');
        });
    }
}
