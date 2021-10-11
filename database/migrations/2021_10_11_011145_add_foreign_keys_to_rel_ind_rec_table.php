<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToRelIndRecTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rel_ind_rec', function (Blueprint $table) {
            $table->foreign(['indicador_id_indicador'], 'rel_ind_rec_indicador_fk')->references(['id_indicador'])->on('indicador');
            $table->foreign(['recurso_id_recurso', 'recurso_id_tipo_recurso', 'recurso_id_formato'], 'rel_ind_rec_recurso_fk')->references(['id_recurso', 'tipo_recurso_id_tipo_recurso', 'formato_recurso_id_formato'])->on('recurso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rel_ind_rec', function (Blueprint $table) {
            $table->dropForeign('rel_ind_rec_indicador_fk');
            $table->dropForeign('rel_ind_rec_recurso_fk');
        });
    }
}
