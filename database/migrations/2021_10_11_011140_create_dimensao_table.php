<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDimensaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.dimensao', function (Blueprint $table) {
            $table->increments('id_dimensao')->primary()->comment('Identifica a dimensão');
            $table->string('nome', 50)->comment('Nome da dimensão');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('avaliacao.dimensao');
    }
}
