<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCamposDiagnosticoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('avaliacao.diagnostico', function (Blueprint $table) {

            $table->string('oferta_publica', 500)->nullable()
                ->comment("Oferta pública (ex.: serviço, programa, política, projeto, iniciativa, ação, etc.) sob foco:");
            $table->string('grupo_focal', 500)->nullable()
                ->comment("Qual(is) grupo(s) ou população(ões) específica(s) irá focar?");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('avaliacao.diagnostico', function (Blueprint $table) {
            $table->dropColumn('oferta_publica');
            $table->dropColumn('grupo_focal');
        });
    }
}
