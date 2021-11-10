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
            'titulo' => 'O projeto Inclua',
            'descricao' => "
            <i>INCLUA - Plataforma de recursos pró-equidade em políticas públicas</i>
            <p>O INCLUA é uma plataforma virtual de avaliação, diagnóstico e subsídio para a identificação de potenciais riscos de reprodução de desigualdades sociais em processos cotidianos de execução de políticas públicas no Brasil. Gerida pelo Instituto de Pesquisa Econômica Aplicada – Ipea, foi lançada em novembro de 2021 e conta com o apoio e engajamento de diversos parceiros nos termos em negrito vamos colocar o link para a página Parceiros.</p>
            <p>O objetivo principal da plataforma é oferecer ferramentas gratuitas, automatizadas e de fácil acesso que possibilitam a análise e identificação de maneira ágil e precisa de possíveis falhas e problemas em projetos concretos de política pública, programa, ação ou serviço – independentemente do conjunto de entidades envolvidas (governamentais, de diferentes níveis e esfera de poder, e não-governamentais). Em outras palavras: visa apontar fragilidades nos projetos que podem prejudicar a inclusão, o acesso e o usufruto dos serviços por parte de segmentos historicamente desfavorecidos.</p>
            <p>Entende-se por esses segmentos, grupos específicos da população brasileira submetidos a processos históricos de vulnerabilização e desfavorecimento, em torno de marcadores sociais como renda e classe, raça e gênero. Além disso, considera-se, também, questões associadas a deficiências, idade e etapa do ciclo de vida, inserção em territórios, e associação a etnias, manifestações culturais, religiosas etc.</p>
            <p>A ideia é que os resultados dos diagnósticos e avaliações feitas no INCLUA colaborem não só para a reflexão, estruturação consciente e conhecimento sistemático das políticas públicas realizadas no país. Mas, também, que desenvolva o comprometimento e aguce a atenção de autoridades, gestores e agentes públicos aos riscos de desatenção, exclusão e tratamento inadequado das pessoas nos processos de provisão de políticas e serviços.</p>
            <p>Mais do que contribuir para a visibilização do problema, a plataforma fornece recursos para intervenções voltadas à neutralização ou mitigação de tais riscos. Esses recursos estão organizados em uma biblioteca contendo diversos tipos de produtos desenvolvidos pelo Ipea e por organizações parceiras que podem ser úteis, trazer inspiração e fornecer orientações e exemplos para o desenvolvimento de intervenções focadas nos riscos identificados. Espera-se, assim, contribuir para uma inclusão mais efetiva da pluralidade dos cidadãos brasileiros nas políticas públicas.</p>
",
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
            'descricao' => "

            <strong>Coordenação geral:</strong>
            <ul>
                <li>Janine Mello</li>
            </ul>
            <strong> Equipe de análise de dados:</strong>
            <ul>
                <li>Roberto Rocha C. Pires (Coordenação)</li>
                <li>Marcelo Galiza (Coordenação)</li>
                <li>Carolina Tokarski</li>
                <li>Natália Koga</li>
                <li>Nínive Fonseca Machado</li>
                <li>Tatiana Dias Silva</li>
                <li>Ana Camila Ribeiro Pereira</li>
            </ul>
            <strong>Equipe de conteúdo:</strong>
            <ul>
                <li>Camila Escudero</li>
            </ul>

            <strong>Equipe técnica de desenvolvimento:</strong>
            <ul>
                <li>Thiago Giannini</li>
                <li>Bruno Passos</li>
                <li>Fábio Barreto</li>
                <li>Raphael Silva</li>
                <li>Relison Galvão</li>
                <li>Victor Gomes</li>
            </ul>",
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
            'descricao' => 'Página em construção!',
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
            'descricao' => '',
            'slug' => 'parceiros',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Links sugeridos',
            'descricao' => '',
            'slug' => 'links',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 1,
            'cmsuser_id' => 1,
        ]);

    }
}
