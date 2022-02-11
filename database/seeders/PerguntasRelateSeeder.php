<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PerguntasRelateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //PERGUNTA 1
        DB::table('avaliacao.pergunta_relate')->insert([
            'descricao' => '
            O campo abaixo permite um texto livre de até 5 mil caracteres. Na construção do seu relato, procure tomar como referência as seguintes perguntas listadas:</strong><br>
            <br>
            <strong>1. Relate como foi o processo de utilização das ferramentas de diagnóstico e recursos da biblioteca da Plataforma INCLUA. </strong><br>
            <br>
            Qual oferta pública e qual segmento do público foram objetos de avaliação? <br>
            Os questionários foram respondidos individualmente ou em grupo? <br>
            Foi utilizado algum recurso da biblioteca? Como foi essa experiência?<br>
            <br>
            <strong>2. Relate as repercussões que esse processo teve na sua equipe, organização ou na condução da oferta pública. </strong><br>
            <br>
            Como os resultados foram percebidos?<br>
            O que foi feito a partir deles?<br>
            Alguma iniciativa nova foi estabelecida no seu ambiente de trabalho para reduzir riscos de desatenção, exclusão ou tratamento inadequado? Explique<br>
            <br>
            <strong>3. Relate quais as perspectivas de reutilização da Plataforma Inclua daqui para frente, seja na análise continuada da mesma experiência ou também de outra oferta pública ou outro segmento do público.</strong><br>
            <br>
            Descreva a sua experiência*<br>
            ',
            'max_caracteres_resposta' => 5000,
            'tipo_resposta' => 1,
        ]);

        //PERGUNTA 2
        DB::table('avaliacao.pergunta_relate')->insert([
            'descricao' => '
            <strong>MULTIMÍDIA</strong><br>
            <br>
            Caso queira, pode enviar um link com algum material ou recurso que possa complementar ou enriquecer o seu relato.<br>
            ',
            'max_caracteres_resposta' => 200,
            'tipo_resposta' => 1,
        ]);

        //PERGUNTA 3
        DB::table('avaliacao.pergunta_relate')->insert([
            'descricao' => '
            <strong>Responsável pelo relato*</strong><br>
            <br>
            ',
            'max_caracteres_resposta' => 200,
            'tipo_resposta' => 2,
        ]);

        //ALTERNATIVAS DA PERGUNTA 3
        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Técnico responsável pela oferta do bem ou serviço',
            'id_pergunta' => 3,
        ]);
        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Coordenador/Diretor/Gestor de programas, projetos, serviços',
            'id_pergunta' => 3,
        ]);
        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Membro da equipe gestora responsável pela oferta pública',
            'id_pergunta' => 3,
        ]);
        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Membro de Organização Internacional, da Sociedade Civil, de Movimentos Sociais',
            'id_pergunta' => 3,
        ]);

        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Pesquisador, Cientista, estudante ou membro da comunidade acadêmica',
            'id_pergunta' => 3,
        ]);

        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Outro – Especificar',
            'outros' => 1,
            'id_pergunta' => 3,
        ]);

        //PERGUNTA 4
        DB::table('avaliacao.pergunta_relate')->insert([
            'descricao' => '
            <strong>Área de atuação em que trabalha*</strong><br>
            <br>
            ',
            'tipo_resposta' => 1,
        ]);

        //PERGUNTA 5
        DB::table('avaliacao.pergunta_relate')->insert([
            'descricao' => '
            <strong>Programa/Projeto/Serviço em que trabalha?*</strong><br>
            <br>
            ',
            'tipo_resposta' => 1,
        ]);

        //PERGUNTA 6
        DB::table('avaliacao.pergunta_relate')->insert([
            'descricao' => '
            <strong>Público atendido pelo Programa/Projeto/Serviço em que trabalha?*</strong><br>
            <br>
            ',
            'tipo_resposta' => 1,
        ]);

        //PERGUNTA 7
        DB::table('avaliacao.pergunta_relate')->insert([
            'descricao' => '
            <strong>Abrangência do serviço/projeto/programa em que atua</strong><br>
            <br>
            ',
            'tipo_resposta' => 2,
        ]);

        //ALTERNATIVAS DA PERGUNTA 7
        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Municipal',
            'id_pergunta' => 7,
        ]);

        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Regional',
            'id_pergunta' => 7,
        ]);

        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Estadual',
            'id_pergunta' => 7,
        ]);

        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Federal',
            'id_pergunta' => 7,
        ]);

        DB::table('avaliacao.alternativa_relate')->insert([
            'descricao' => 'Outro – Especificar',
            'outros' => 1,
            'id_pergunta' => 7,
        ]);
    }
}
