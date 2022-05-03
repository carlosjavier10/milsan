<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       DB::table('canvas_users')->insert([

            'id' => '7a913285-aac8-45dc-b68e-be47ec21a41c',
            'name' => 'Example User',
            'email' => 'email@example.com',
            'username' => null,
            'password' => '$2y$10$nDyAlRkEOq6wd6Jvl0ILF.u1WTGPF6UMep1qWLQf5A8H3.KnbUlYG',
            'summary' =>  'Sumario descrip',
            'avatar' =>    null,
            'dark_mode' => null,
            'digest' => null,
            'locale' => null,
            'role' => '3',
            'remember_token' => null,
            'created_at'  => null,
            'updated_at' =>  null,
            'deleted_at'  => null,

       ]);
    }
}
