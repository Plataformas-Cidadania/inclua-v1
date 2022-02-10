<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRelateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao.relate', function (Blueprint $table) {
            $table->increments("id_relate")
                ->comment('Identifica o relate');
            $table->integer('id_user')->nullable();
            $table->foreign('id_user')->references('id')
                ->on('public.users')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('avaliacao.relate');
    }
}
