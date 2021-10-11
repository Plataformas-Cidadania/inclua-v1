<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToRecursoCategoriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recurso_categoria', function (Blueprint $table) {
            $table->foreign(['categoria_id_categoria'], 'recurso_categoria_categoria_fk')->references(['id_categoria'])->on('categoria');
            $table->foreign(['recurso_id_recurso', 'recurso_id_tipo_recurso', 'recurso_id_formato'], 'recurso_categoria_recurso_fk')->references(['id_recurso', 'tipo_recurso_id_tipo_recurso', 'formato_recurso_id_formato'])->on('recurso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recurso_categoria', function (Blueprint $table) {
            $table->dropForeign('recurso_categoria_categoria_fk');
            $table->dropForeign('recurso_categoria_recurso_fk');
        });
    }
}
