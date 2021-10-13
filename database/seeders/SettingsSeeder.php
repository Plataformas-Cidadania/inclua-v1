<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            'imagem' => '',
            'email' => 'admin@cms',
            'titulo' => 'INCLUA',
            'rodape' => 'Todos direitos reservados <a href="https://www.ipea.gov.br"> Ipea</a>',

            'endereco_titulo' => 'Ipea - Brasília',
            'cep' => '70076-900',
            'endereco' => 'SBS',
            'numero' => 'Quadra 1 - Bloco J',
            'complemento' => 'Ed. BNDES',
            'bairro' => 'Brasília',
            'cidade' => 'Brasília',
            'estado' => 'DF',
            'telefone' => '',
            'telefone3' => '',

            'endereco_titulo2' => 'Ipea - Rio de Janeiro',
            'cep2' => '20071-900',
            'endereco2' => 'Av. Presidente Vargas',
            'numero2' => 730,
            'complemento2' => '16° andar – Torres 3 e 4 - Ed. Bacen',
            'bairro2' => 'Centro',
            'cidade2' => 'Rio de Janeiro',
            'estado2' => 'RJ',
            'telefone2' => '',

            'facebook' => 'https://www.facebook.com/ipeaonline',
            'youtube' => 'http://www.youtube.com/user/agenciaipea',
            'pinterest' => '',
            'twitter' => 'http://www.twitter.com/ipeaonline',
            'instagram' => '',
            'blog' => '',

            'titulo_contato' => 'Titulo contato',
            'descricao_contato' => 'Descrição contato',

            'cmsuser_id' => '1',
        ]);
    }
}

