<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(CmsUsersTableSeeder::class);
        $this->call(SettingsSeeder::class);
        $this->call(TextsSeeder::class);
        $this->call(ModulosSeeder::class);
        $this->call(UrlsSeeder::class);
        $this->call(ParceirosSeeder::class);
        $this->call(PerguntasRelateSeeder::class);
        $this->call(GeralSeeder::class);
        $this->call(GeralSeeder2::class);
        $this->call(GeralSeeder3::class);
        $this->call(APISeeder::class);

    }
}
