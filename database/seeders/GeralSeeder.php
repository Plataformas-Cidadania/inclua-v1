<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GeralSeeder extends Seeder
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

        DB::table('cms.modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Meus relatos',
            'descricao' => 'Digite um texto!',
            'slug' => 'txt-meu-relate',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 3,
        ]);





    }
}
