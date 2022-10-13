<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Canvas\Models\Tag;
use Faker\Generator as Faker;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        Tag::create([
            'id' => $faker->uuid,
            'slug' => 'residencial',
            'name' => 'Residencial',
            'user_id' => '7a913285-aac8-45dc-b68e-be47ec21a41c'
        ]);
        //
        Tag::create([
            'id' => $faker->uuid,
            'slug' => 'comercial',
            'name' => 'Comercial',
            'user_id' => '7a913285-aac8-45dc-b68e-be47ec21a41c'
        ]);
        //
        Tag::create([
            'id' => $faker->uuid,
            'slug' => 'corporativo',
            'name' => 'Corporativo',
            'user_id' => '7a913285-aac8-45dc-b68e-be47ec21a41c'
        ]);
        //
        Tag::create([
            'id' => $faker->uuid,
            'slug' => 'industrial',
            'name' => 'Industrial',
            'user_id' => '7a913285-aac8-45dc-b68e-be47ec21a41c'
        ]);
        //



    }
}
