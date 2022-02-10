<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropCamposFormTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('cidade');
            $table->dropColumn('estado');
            $table->dropColumn('pais');
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
            $table->integer('cidade')->nullable()->after('telefone');
            $table->integer('estado')->nullable()->after('cidade');
            $table->integer('pais')->nullable()->after('estado');
        });
    }
}
