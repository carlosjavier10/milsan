<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Canvas\Models\Topic;
use Faker\Generator as Faker;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        //Topic::factory(5)->create();


            Topic::create([
                'id' => $faker->uuid,
                'slug' => 'proyectos',
                'name' => 'Proyectos',
                'user_id' => '7a913285-aac8-45dc-b68e-be47ec21a41c'
            ]);

    }
}
