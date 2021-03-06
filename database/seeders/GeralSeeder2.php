<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GeralSeeder2 extends Seeder
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
            'titulo' => 'Pre-Diagnóstico',
            'descricao' => "O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos. A realização do diagnóstico contribui para visualização de possíveis falhas e problemas que podem estar prejudicando a inclusão, o acesso e o usufruto dos serviços por parte de segmentos tradicionalmente desfavorecidos. <br> Qualquer profissional, técnico ou gestor, que atue com execução de políticas ou serviços públicos pode realizar o diagnóstico. O diagnóstico pode ser realizado a partir do Guia INCLUA (download) ou a partir desta plataforma (online):",
            'slug' => 'pre-diagnostico'
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Título',
            'descricao' => "Descrição",
            'slug' => 'depoimento'
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Guia',
            'descricao' => "Descrição",
            'slug' => 'guia'
        ]);

        DB::table('cms.modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Fórum',
            'descricao' => "<<PÁGINA EM CONSTRUÇÃO>>",
            'slug' => 'forum',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 0,
        ]);


    }
}
