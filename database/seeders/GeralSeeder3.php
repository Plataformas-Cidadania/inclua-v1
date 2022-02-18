<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GeralSeeder3 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Curadoria',
            'descricao' => "Digite um texto",
            'slug' => 'curadoria'
        ]);
    }
}
