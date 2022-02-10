<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCamposTipoTablePergunteRelate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('avaliacao.pergunta_relate', function (Blueprint $table) {
            $table->integer('id_tipo')->nullable()->comment('Identifica o tipo da pergunta');
            $table->foreign('id_tipo')->references('id_tipo')
                ->on('avaliacao.tipo_pergunta_relate')
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
        Schema::table('avaliacao.pergunta_relate', function (Blueprint $table) {
            $table->dropConstrainedForeignId('id_tipo');
            $table->dropColumn('id_tipo');
        });
    }
}
