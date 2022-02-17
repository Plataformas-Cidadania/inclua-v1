<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class RecursosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
         * DADOS APENAS PARA TESTES.
         * Os dados de recursos reais serão inseridos via ETL*/
        // AUTOR
        DB::table('avaliacao.autor')->insert([
            'nome' => 'Vienna City',
        ]);
        DB::table('avaliacao.autor')->insert([
            'nome' => 'OPAS',
        ]);
        // FORMATO_RECURSO
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'pdf',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'img',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Video',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Site',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Curso',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Pasta compartilhada',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Reportagem',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Diversos',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Audio',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'E-book',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Sem informação',
        ]);
        // TIPO_RECURSO
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Artigo',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Blog',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Diagnóstico',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Indicador',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Engaging Institutions',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Manual',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Estratégia/Roadmap',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Curso',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Sem informação',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => ' ',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => '',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => '',
        ]);

        //CATEGORIA
        DB::table('avaliacao.categoria')->insert([
            'nome' => 'gênero',
        ]);
        DB::table('avaliacao.categoria')->insert([
            'nome' => 'linguagem simples',
        ]);

        //RECURSO
        DB::table('avaliacao.recurso')->insert([
            'nome' => 'GENDER MAINSTREAMING MADE EASY: Practical advice for more gender equality in the Vienna City Administration',
            'ultimo_acesso' => Carbon::parse('2000-01-01'),
            'esfera' => 'Municipal',
            'id_tipo_recurso' => 1,
            'id_formato' => 1,
            'status' => 1
        ]);
        DB::table('avaliacao.recurso')->insert([
            'nome' => 'Guia para Implementação das Prioridades Transversais na OPAS/OMS do Brasil: direitos humanos, equidade, gênero e etnicidade e raça',
            'ultimo_acesso' => Carbon::parse('2000-01-01'),
            'esfera' => 'Brasil',
            'id_tipo_recurso' => 1,
            'id_formato' => 2,
            'status' => 1
        ]);
        DB::table('avaliacao.recurso')->insert([
            'nome' => 'Equidade de gênero em saúde',
            'ultimo_acesso' => Carbon::parse('2000-01-01'),
            'esfera' => 'Brasil',
            'id_tipo_recurso' => 2,
            'id_formato' => 1,
            'status' => 1
        ]);
        for($i=1;$i<=92;$i++){
            DB::table('avaliacao.recurso')->insert([
                'nome' => 'teste' . $i,
                'ultimo_acesso' => Carbon::parse('2000-01-01'),
                'esfera' => 'Brasil',
                'id_tipo_recurso' => 2,
                'id_formato' => 1,
                'status' => 1
            ]);
        }
        // CATEGORIZACAO
        DB::table('avaliacao.categorizacao')->insert([
            'id_categoria' => 1,
            'id_recurso' => 1,
        ]);
        DB::table('avaliacao.categorizacao')->insert([
            'id_categoria' => 2,
            'id_recurso' => 1,
        ]);
        DB::table('avaliacao.categorizacao')->insert([
            'id_categoria' => 1,
            'id_recurso' => 2,
        ]);
        DB::table('avaliacao.categorizacao')->insert([
            'id_categoria' => 2,
            'id_recurso' => 3,
        ]);

        // LINK
        DB::table('avaliacao.link')->insert([
            'uri' => 'https://www.wien.gv.at/english/administration/gendermainstreaming/principles/manual.html	',
            'idioma' => 'Inglês/Alemão',
            'id_recurso' => 1,
        ]);
        DB::table('avaliacao.link')->insert([
            'uri' => 'https://www.oecd.org/gov/toolkit-for-mainstreaming-and-implementing-gender-equality.pdf	',
            'idioma' => 'Português',
            'id_recurso' => 2,
        ]);
        DB::table('avaliacao.link')->insert([
            'uri' => 'https://www.youtube.com/playlist?list=PLHHnQGKBbuiz67NzUaFFwTu5Rj8airwXv	',
            'idioma' => 'Português',
            'id_recurso' => 3,
        ]);
        // AUTORIA
        DB::table('avaliacao.autoria')->insert([
            'id_autor' => 1,
            'id_recurso' => 1,
        ]);
        DB::table('avaliacao.autoria')->insert([
            'id_autor' => 1,
            'id_recurso' => 2,
        ]);
        DB::table('avaliacao.autoria')->insert([
            'id_autor' => 2,
            'id_recurso' => 3,
        ]);
        // INDICACAO
        DB::table('avaliacao.indicacao')->insert([
            'id_indicador' => 1,
            'id_recurso' => 1,
        ]);
        DB::table('avaliacao.indicacao')->insert([
            'id_indicador' => 1,
            'id_recurso' => 2,
        ]);
        DB::table('avaliacao.indicacao')->insert([
            'id_indicador' => 1,
            'id_recurso' => 3,
        ]);
        DB::table('avaliacao.indicacao')->insert([
            'id_indicador' => 2,
            'id_recurso' => 2,
        ]);
        DB::table('avaliacao.indicacao')->insert([
            'id_indicador' => 2,
            'id_recurso' => 3,
        ]);

    }
}
