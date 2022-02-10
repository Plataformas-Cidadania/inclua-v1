<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterRespostaRelateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('avaliacao.resposta_relate', function (Blueprint $table) {
            $table->integer('id_relate');
            $table->foreign('id_relate')->references('id_relate')
                ->on('avaliacao.relate')
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
        Schema::table('avaliacao.resposta_relate', function (Blueprint $table) {
            $table->dropConstrainedForeignId('id_relate');
            //$table->dropColumn('id_relate');
        });
    }
}
