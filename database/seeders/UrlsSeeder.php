<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UrlsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('urls')->insert([
            'imagem' => '',
            'titulo' => 'ABPN - Associação Brasileira de Pesquisadores(as) Negros(as)',
            'descricao' => 'Atualmente a ABPN é um dos órgãos fundamentais da rede de instituições que atuam no combate ao racismo, ao preconceito e à discriminação racial, com vistas à formulação, à implementação, ao monitoramento e à avaliação das políticas públicas para uma sociedade justa e equânime.',
            'url' => 'https://www.abpn.org.br/',
            'status' => 1,
            'posicao' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('urls')->insert([
            'imagem' => 'https://mulherescientistas.org/wp-content/uploads/2021/04/marca-principal-RBMC.png',
            'titulo' => 'Rede Brasileira de Mulheres Cientistas',
            'descricao' => 'Somos mulheres cientistas brasileiras e, neste momento tão dramático, que afeta inclusive as nossas produções científicas, buscamos atuar em defesa das mulheres a partir de uma perspectiva que busca a atenção a algo praticamente ignorado no debate público: a condição das mulheres brasileiras na pandemia. Para isso criamos essa rede que nasceu a partir da Nossa Carta de Lançamento assinada por mais de 3000 cientistas brasileiras. Conheça aqui a nossa carta. E conheça as cientistas do nosso Comitê Executivo.',
            'url' => 'https://mulherescientistas.org/',
            'status' => 1,
            'posicao' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('urls')->insert([
            'imagem' => 'https://neburocracia.files.wordpress.com/2018/05/cropped-logo11.png',
            'titulo' => 'Núcleo de Estudos da Burocracia NEB EAESP-FGV',
            'descricao' => 'O Núcleo de Estudos da Burocracia tem como objetivo avançar nas análises teóricas e empíricas da burocracia brasileira, considerando elementos como: estrutura burocrática, perfil dos burocratas, atuação e relacionamento da burocracia. Diversos trabalhos estão sendo desenvolvidos atualmente que tem como focos: Análise da burocracia de médio escalão, análise da burocracia de nível de rua, análise da interação entre burocracia e organizações sociais.',
            'url' => 'https://neburocracia.wordpress.com/',
            'status' => 1,
            'posicao' => 1,
            'cmsuser_id' => 1,
        ]);


    }
}

