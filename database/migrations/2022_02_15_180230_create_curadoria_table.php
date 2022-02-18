<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCuradoriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.curadoria', function (Blueprint $table) {
            $table->increments('id_curadoria');
            $table->integer('id_curador');
            $table->foreign('id_curador')->references('id_curador')
                ->on('avaliacao.curador')
                ->onDelete('cascade');
            $table->string('tema_recorte','500')->nullable();
            $table->text('texto')->nullable();
            $table->string('mes','200')->nullable();
            $table->string('link_video','500')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.curadoria', function (Blueprint $table) {
            $table->dropForeign(['id_curador']);
        });
        Schema::dropIfExists('avaliacao.curadoria');
    }
}
