<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecursoCategoriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recurso_categoria', function (Blueprint $table) {
            $table->integer('categoria_id_categoria');
            $table->integer('recurso_id_recurso');
            $table->integer('recurso_id_tipo_recurso');
            $table->integer('recurso_id_formato');

            $table->primary(['categoria_id_categoria', 'recurso_id_recurso', 'recurso_id_tipo_recurso', 'recurso_id_formato']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recurso_categoria');
    }
}
