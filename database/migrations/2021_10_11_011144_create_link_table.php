<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('link', function (Blueprint $table) {
            $table->integer('id_link')->comment('Identifica o link');
            $table->text('uri')->nullable()->comment('contem o a uri de um conteúdo ');
            $table->integer('recurso_id_recurso');
            $table->integer('recurso_tipo_recurso_id_tipo_recurso');
            $table->integer('recurso_formato_recurso_id_formato');
            $table->string('idioma', 50)->nullable();

            $table->primary(['id_link', 'recurso_id_recurso', 'recurso_tipo_recurso_id_tipo_recurso', 'recurso_formato_recurso_id_formato']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('link');
    }
}
