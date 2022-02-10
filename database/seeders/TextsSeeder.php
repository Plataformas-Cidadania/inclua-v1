<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TextsSeeder extends Seeder
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
            'titulo' => 'Diagnóstico',
            'descricao' => 'O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.',
            'slug' => 'diagnostico',
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Resultado',
            'descricao' => 'Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões',
            'slug' => 'resultado',
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Recursos',
            'descricao' => 'O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.',
            'slug' => 'recursos',
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Diagnóstico',
            'descricao' => 'Instruções: essa atividade dura aproximadamente de XX a XX minutos e deve ser realizada com bastante atenção de forma a retratar com a maior precisão possível a situação da oferta pública na qual você está envolvido. Caso prefira, você pode baixar o questionário, ler e reunir as informações necessárias para então voltar aqui e responder às perguntas.',
            'slug' => 'pg-diagnostico',
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Concede direitos',
            'descricao' => 'Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito neste',
            'slug' => 'concede_direitos',
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Termo de uso',
            'descricao' => 'Neste espaço, você pode compartilhar sua experiência ao utilizar as ferramentas da Plataforma Inclua com outros gestores, profissionais e trabalhadores do poder público  ou demais  usuários.  Seu relato  pode nos ajudar no aprimoramento  das funcionalidades, na construção de possíveis parcerias, além da disseminação do Projeto Inclua.  Após   o   envio,   seu   relato   será   lido   pela   nossa   equipe   para   possível   publicação. Caso isso venha a acontecer, você autoriza a publicação do seu relato em nosso
site?',
            'slug' => 'termo',
        ]);


    }
}
