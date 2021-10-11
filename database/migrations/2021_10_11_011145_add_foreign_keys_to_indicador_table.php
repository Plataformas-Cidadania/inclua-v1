<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToIndicadorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('indicador', function (Blueprint $table) {
            $table->foreign(['dimensao_id_dimensao'], 'indicador_dimensao_fk')->references(['id_dimensao'])->on('dimensao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('indicador', function (Blueprint $table) {
            $table->dropForeign('indicador_dimensao_fk');
        });
    }
}
