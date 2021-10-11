<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToRiscoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('risco', function (Blueprint $table) {
            $table->foreign(['indicador_id_indicador'], 'risco_indicador_fk')->references(['id_indicador'])->on('indicador');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('risco', function (Blueprint $table) {
            $table->dropForeign('risco_indicador_fk');
        });
    }
}
