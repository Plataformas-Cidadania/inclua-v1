<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class APISeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DIMENSOES
        DB::table('avaliacao.dimensao')->insert([
            'numero' => 1,
            'titulo' => 'Participação social e representação',
            'descricao' => 'Chama atenção para o conjunto de relações institucionais ...',
            'vl_baixo' => 43,
            'vl_alto' => 23
        ]);
        DB::table('avaliacao.dimensao')->insert([
            'numero' => 2,
            'titulo' => 'Dimensão 2',
            'descricao' => '....',
            'vl_baixo' => 44,
            'vl_alto' => 25
        ]);
        // INDICADORES
        DB::table('avaliacao.indicador')->insert([
            'numero' => 1,
            'titulo' => 'indc',
            'descricao' => 'Identifica e avalia o grau de maturidade da articulação institucional...',
            'id_dimensao' => 1,
            'vl_baixo' => 22,
            'vl_alto' => 11
        ]);

        DB::table('avaliacao.indicador')->insert([
            'numero' => 2,
            'titulo' => 'indc',
            'descricao' => 'Identifica o indicador 2',
            'id_dimensao' => 1,
            'vl_baixo' => 22,
            'vl_alto' => 11
        ]);

        DB::table('avaliacao.indicador')->insert([
            'numero' => 3,
            'titulo' => 'indc',
            'descricao' => 'Identifica ...',
            'id_dimensao' => 2,
            'vl_baixo' => 8,
            'vl_alto' => 4
        ]);

        DB::table('avaliacao.indicador')->insert([
            'numero' => 4,
            'titulo' => 'indc',
            'descricao' => 'Identifica mais um...',
            'id_dimensao' => 2,
            'vl_baixo' => 8,
            'vl_alto' => 4
        ]);
        // PERGUNTAS
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Caso o processo de implementação dessa oferta pública envolva mais de uma organização (ou múltiplas unidades de uma organização) responsável por etapas diferentes da produção do bem ou serviço, existem espaços e mecanismos para promover a coordenação e a articulação das ações entre essas organizações? [Por exemplo: reuniões periódicas, comitês gestores, instâncias de mediação, etc.] Marque uma opção abaixo.',
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
            'vl_minimo' => 0,
            'vl_maximo' => 1,
            'tipo'=> 1,
            'nao_se_aplica'=> 0,
            'inverter' => 0,
            'id_indicador' => 1,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'aa',
            'descricao' => ' Pergunta filha de outa pergunta ',
             'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
            'vl_minimo' => 0,
            'vl_maximo' => 1,
            'tipo'=> 1,
            'nao_se_aplica'=> 0,
            'inverter' => 0,
            'id_indicador' => 1,
            'id_perguntaPai' => 1,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Busca saber sobre xxx',
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
            'vl_minimo' => 0,
            'vl_maximo' => 5,
            'tipo'=> 1,
            'nao_se_aplica'=> 0,
            'inverter' => 0,
            'id_indicador' => 1,
        ]);

        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Busca saber sobre xxx',
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
            'vl_minimo' => 0,
            'vl_maximo' => 10,
            'tipo'=> 1,
            'nao_se_aplica'=> 0,
            'inverter' => 0,
            'id_indicador' => 2,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Busca saber sobre xxx',
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
            'vl_minimo' => 0,
            'vl_maximo' => 1,
            'tipo'=> 1,
            'nao_se_aplica'=> 0,
            'inverter' => 0,
            'id_indicador' => 2,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Busca saber sobre xxx',
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
            'vl_minimo' => 0,
            'vl_maximo' => 1,
            'tipo'=> 1,
            'nao_se_aplica'=> 0,
            'inverter' => 0,
            'id_indicador' => 3,
        ]);
        DB::table('avaliacao.pergunta')->insert([
            'letra' => 'a',
            'descricao' => 'Busca saber sobre xxx',
            'legenda' => 'Sendo 1: Discorda totalmente e 5: Concorda Totalmente',
            'vl_minimo' => 0,
            'vl_maximo' => 1,
            'tipo'=> 1,
            'nao_se_aplica'=> 0,
            'inverter' => 0,
            'id_indicador' => 4,
        ]);
        // RISCOS
        DB::table('avaliacao.risco')->insert([
            'vl_alto' => 5,
            'vl_baixo' => 1,
            'id_indicador' => 1,
        ]);
        DB::table('avaliacao.risco')->insert([
            'vl_alto' => 5,
            'vl_baixo' => 1,
            'id_indicador' => 1,
        ]);
        DB::table('avaliacao.risco')->insert([
            'vl_alto' => 5,
            'vl_baixo' => 1,
            'id_indicador' => 2,
        ]);
        DB::table('avaliacao.risco')->insert([
            'vl_alto' => 5,
            'vl_baixo' => 1,
            'id_indicador' => 4,
        ]);
        // AUTOR
        DB::table('avaliacao.autor')->insert([
            'nome' => 'Jorge',
        ]);
        DB::table('avaliacao.autor')->insert([
            'nome' => 'Maycon',
        ]);
        // FORMATO_RECURSO
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Formato 1',
        ]);
        DB::table('avaliacao.formato_recurso')->insert([
            'nome' => 'Formato 2',
        ]);
        // TIPO_RECURSO
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Tipo 1',
        ]);
        DB::table('avaliacao.tipo_recurso')->insert([
            'nome' => 'Tipo 2',
        ]);
        //CATEGORIA
        DB::table('avaliacao.categoria')->insert([
            'nome' => 'Categoria 1',
        ]);
        DB::table('avaliacao.categoria')->insert([
            'nome' => 'Categoria 2',
        ]);

        //RECURSO
        DB::table('avaliacao.recurso')->insert([
            'nome' => 'Recurso 1',
            'ultimo_acesso' => Carbon::parse('2000-01-01'),
            'esfera' => 'Area de atuacao 1',
            'id_tipo_recurso' => 1,
            'id_formato' => 1,
        ]);
        DB::table('avaliacao.recurso')->insert([
            'nome' => 'Recurso 2',
            'ultimo_acesso' => Carbon::parse('2000-01-01'),
            'esfera' => 'Area de atuacao 2',
            'id_tipo_recurso' => 1,
            'id_formato' => 2,
        ]);
        DB::table('avaliacao.recurso')->insert([
            'nome' => 'Recurso 3',
            'ultimo_acesso' => Carbon::parse('2000-01-01'),
            'esfera' => 'Area de atuacao 2',
            'id_tipo_recurso' => 2,
            'id_formato' => 1,
        ]);
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
            'uri' => 'htpps://..',
            'idioma' => 'PT-BR',
            'id_recurso' => 1,
        ]);
        DB::table('avaliacao.link')->insert([
            'uri' => 'htpps://..',
            'idioma' => 'EN',
            'id_recurso' => 2,
        ]);
        DB::table('avaliacao.link')->insert([
            'uri' => 'htpps://......',
            'idioma' => 'EN',
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
            'id_recurso' => 1,
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
        DB::table('avaliacao.indicacao')->insert([
            'id_indicador' => 3,
            'id_recurso' => 2,
        ]);
        DB::table('avaliacao.indicacao')->insert([
            'id_indicador' => 4,
            'id_recurso' => 1,
        ]);

    }
}

