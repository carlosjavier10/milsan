<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Canvas\Models\Topic;
usa Illuminate\Support\Str;

class TopicFactory extends Factory
{

    /**
     *
     * the name of the factory's correspondig model
     *
     * @var string
    */

    protected $model = Factory::class;


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id' => $faker->uuid,
            'slug' => $faker->slug,
            'name' => $faker->word,
            'user_id' => function () {
                return factory(\Canvas\Models\User::class)->create()->id;
            },
        ];
    }
}




