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
            'titulo' => 'O Inclua',
            'descricao' => 'O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.',
            'slug' => 'sobre',
            'status' => 1,
            'show' => 1,
            'tipo_id' => 1,
            'cmsuser_id' => 1,
        ]);
    }
}
