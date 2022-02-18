<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCamposRecursoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('avaliacao.recurso', function (Blueprint $table) {
            $table->text('resumo')->nullable()
                ->comment("Resumo do recurso");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.recurso', function (Blueprint $table) {
            $table->dropColumn('resumo');
        });
    }
}
