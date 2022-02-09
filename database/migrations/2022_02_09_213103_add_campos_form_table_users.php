<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCamposFormTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('telefone')->nullable()->after('password');
            $table->integer('cidade')->nullable()->after('telefone');
            $table->integer('estado')->nullable()->after('cidade');
            $table->integer('pais')->nullable()->after('estado');
            $table->boolean('concede_direitos')->nullable()->after('pais');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('telefone');
            $table->dropColumn('cidade');
            $table->dropColumn('estado');
            $table->dropColumn('pais');
            $table->dropColumn('concede_direitos');
        });
    }
}
