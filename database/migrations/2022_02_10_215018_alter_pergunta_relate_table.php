<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPerguntaRelateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('avaliacao.pergunta_relate', function (Blueprint $table) {
            $table->integer('max_caracteres_resposta')->default(200)
                ->comment("Quantidade máxima de caracteres permitida na resposta");
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
            $table->dropColumn('max_caracteres_resposta');
        });
    }
}
