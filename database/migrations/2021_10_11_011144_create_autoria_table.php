<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAutoriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('autoria', function (Blueprint $table) {
            $table->integer('autor_id_autor');
            $table->integer('recurso_id_recurso');
            $table->integer('recurso_id_tipo_recurso');
            $table->integer('recurso_formato_recurso_id_formato');

            $table->primary(['autor_id_autor', 'recurso_id_recurso', 'recurso_id_tipo_recurso', 'recurso_formato_recurso_id_formato']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('autoria');
    }
}
