<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCuradorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.curador', function (Blueprint $table) {
            $table->increments('id_curador');
            $table->string('nome','500')->nullable();
            $table->string('url_imagem','500')->nullable();
            $table->text('minicv')->nullable();
            $table->string('link_curriculo','500')->nullable();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('avaliacao.curador');
    }
}
