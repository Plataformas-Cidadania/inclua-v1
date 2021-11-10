<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.link', function (Blueprint $table) {
            $table->increments('id_link')->comment('Identifica o link');
            $table->text('uri')->comment('contem o a uri de um conteúdo ');
            $table->string('idioma', 50)->nullable();
            $table->integer('id_recurso');            
            $table->foreign('id_recurso')->references('id_recurso')
                    ->on('avaliacao.recurso')
                    ->onDelete('cascade');


            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.link', function (Blueprint $table) {
            $table->dropForeign(['id_recurso']);
        });
        Schema::dropIfExists('avaliacao.link');
    }
}
