<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToAutoriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('autoria', function (Blueprint $table) {
            $table->foreign(['autor_id_autor'], 'autoria_autor_fk')->references(['id_autor'])->on('autor');
            $table->foreign(['recurso_id_recurso', 'recurso_id_tipo_recurso', 'recurso_formato_recurso_id_formato'], 'autoria_recurso_fk')->references(['id_recurso', 'tipo_recurso_id_tipo_recurso', 'formato_recurso_id_formato'])->on('recurso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('autoria', function (Blueprint $table) {
            $table->dropForeign('autoria_autor_fk');
            $table->dropForeign('autoria_recurso_fk');
        });
    }
}
