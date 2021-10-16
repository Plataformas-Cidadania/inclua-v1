<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToPerguntaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pergunta', function (Blueprint $table) {
            $table->foreign(['indicador_id_indicador'], 'pergunta_indicador_fk')->references(['id_indicador'])->on('indicador');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pergunta', function (Blueprint $table) {
            $table->dropForeign('pergunta_indicador_fk');
        });
    }
}