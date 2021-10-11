<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRiscoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('risco', function (Blueprint $table) {
            $table->integer('id_risco')->primary()->comment('Identifica o risco');
            $table->integer('vl_alto')->nullable()->comment('valor limitrofe para considerar um alto risco');
            $table->integer('vl_baixo')->nullable()->comment('valor limitrofe para considerar um baixo risco');
            $table->integer('indicador_id_indicador');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('risco');
    }
}
