<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToRecursoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recurso', function (Blueprint $table) {
            $table->foreign(['formato_recurso_id_formato'], 'recurso_formato_recurso_fk')->references(['id_formato'])->on('formato_recurso');
            $table->foreign(['tipo_recurso_id_tipo_recurso'], 'recurso_tipo_recurso_fk')->references(['id_tipo_recurso'])->on('tipo_recurso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recurso', function (Blueprint $table) {
            $table->dropForeign('recurso_formato_recurso_fk');
            $table->dropForeign('recurso_tipo_recurso_fk');
        });
    }
}
