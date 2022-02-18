<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCampoTipoDiagnosticoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('avaliacao.diagnostico', function (Blueprint $table) {
            $table->integer('tipo_diagnostico')->nullable()
                ->comment("Tipo de diagnostico 1 para completo e 2 para parcial");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.diagnostico', function (Blueprint $table) {
            $table->dropColumn('tipo_diagnostico');
        });
    }
}
