<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecursoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recurso', function (Blueprint $table) {
            $table->integer('id_recurso')->comment('Identifica o recurso');
            $table->string('nome', 50)->nullable()->comment('nomde do recurso');
            $table->timestamp('ultimo_acesso')->nullable()->comment('Data do último acesso');
            $table->string('esfera', 50)->nullable()->comment('nome da área de atuação');
            $table->integer('tipo_recurso_id_tipo_recurso');
            $table->integer('formato_recurso_id_formato');

            $table->primary(['id_recurso', 'tipo_recurso_id_tipo_recurso', 'formato_recurso_id_formato']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recurso');
    }
}
