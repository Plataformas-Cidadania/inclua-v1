<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToLinkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('link', function (Blueprint $table) {
            $table->foreign(['recurso_id_recurso', 'recurso_tipo_recurso_id_tipo_recurso', 'recurso_formato_recurso_id_formato'], 'link_recurso_fk')->references(['id_recurso', 'tipo_recurso_id_tipo_recurso', 'formato_recurso_id_formato'])->on('recurso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('link', function (Blueprint $table) {
            $table->dropForeign('link_recurso_fk');
        });
    }
}
