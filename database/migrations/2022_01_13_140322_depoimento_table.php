<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DepoimentoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.depoimento', function (Blueprint $table) {
            $table->increments('id_depoimento')->comment('Identifica o depoimento');
            $table->text('descricao')->comment('Descrição do depoimento');
            $table->integer('status');
            $table->integer('icone');
            $table->integer('id_user')->nullable();
            $table->foreign('id_user')->references('id')
                    ->on('public.users')
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

        Schema::table('avaliacao.depoimento', function (Blueprint $table) {
            $table->dropForeign(['id_user']);
        });

        Schema::dropIfExists('avaliacao.depoimento');

    }
}
