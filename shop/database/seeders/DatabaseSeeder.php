<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

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
        DB::table('shops')->insert([
            'title' => 't1',
            'description' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto totam quia saepe atque, tempora temporibus eos neque, esse voluptatum repellendus modi ratione qui, dolorum vel dolor incidunt dicta at quas',
            'price' => 12,
        ]);

        DB::table('shops')->insert([
            'title' => 't2',
            'description' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto totam quia saepe atque, tempora temporibus eos neque, esse voluptatum repellendus modi ratione qui, dolorum vel dolor incidunt dicta at quas',
            'price' => 22,
        ]);

        DB::table('shops')->insert([
            'title' => 't3',
            'description' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto totam quia saepe atque, tempora temporibus eos neque, esse voluptatum repellendus modi ratione qui, dolorum vel dolor incidunt dicta at quas',
            'price' => 1200,
        ]);
    }
}
