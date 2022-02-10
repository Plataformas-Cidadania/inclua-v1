<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TiposPerguntasRelateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('avaliacao.tipo_pergunta_relate')->insert([
            'descricao' => 'Texto',
        ]);
        DB::table('avaliacao.tipo_pergunta_relate')->insert([
            'descricao' => 'Alternativas',
        ]);
    }
}
