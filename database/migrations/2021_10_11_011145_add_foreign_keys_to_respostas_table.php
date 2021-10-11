<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToRespostasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('respostas', function (Blueprint $table) {
            $table->foreign(['pergunta_id_pergunta', 'pergunta_indicador_id_indicador'], 'respostas_pergunta_fk')->references(['id_pergunta', 'indicador_id_indicador'])->on('pergunta');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('respostas', function (Blueprint $table) {
            $table->dropForeign('respostas_pergunta_fk');
        });
    }
}
