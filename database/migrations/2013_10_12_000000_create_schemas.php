<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateSchemas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::connection($this->getConnection())->unprepared("
            SET search_path to public;
            CREATE SCHEMA cms;
        ");
        DB::connection($this->getConnection())->unprepared("
            SET search_path to public;
            CREATE SCHEMA avaliacao;
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::connection($this->getConnection())->unprepared("
            SET search_path to public;
            DROP SCHEMA cms;
        ");
        DB::connection($this->getConnection())->unprepared("
            SET search_path to public;
            DROP SCHEMA avaliacao;
        ");
    }
}
