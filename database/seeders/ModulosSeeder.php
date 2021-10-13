<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModulosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Sobre',
            'descricao' => 'Escreva uma descrição.',
            'slug' => 'sobre',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Equipe',
            'descricao' => 'Escreva uma descrição.',
            'slug' => 'equipe',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Mapa do site',
            'descricao' => 'Escreva uma descrição.',
            'slug' => 'mapa-do-site',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Parceiros',
            'descricao' => 'Escreva uma descrição.',
            'slug' => 'parceiros',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Links',
            'descricao' => 'Escreva uma descrição.',
            'slug' => 'links',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 1,
            'cmsuser_id' => 1,
        ]);

    }
}
