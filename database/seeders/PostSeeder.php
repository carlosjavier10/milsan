<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Canvas\Models\Post;
use Canvas\Models\Tag;
use Canvas\Models\Topic;
use Faker\Generator as Faker;


class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {

        $topic = Topic::where('slug','proyectos')->first();

        for ($i=0; $i <20 ; $i++) {
            // code...
        $tag = Tag::orderByRaw("RAND()")->limit(2)->first();
        $post = Post::create([
            'id' => $faker->uuid,
            'slug' => $faker->slug,
            'title' => $faker->word,
            'summary' => $faker->sentence,
            'body' => $faker->realText(),
            'published_at' => today()->toDateTimeString(),
            'featured_image' => $faker->imageUrl(),
            'featured_image_caption' => $faker->sentence,
            'user_id' => '7a913285-aac8-45dc-b68e-be47ec21a41c',
            'meta' => [
                'title' => $faker->sentence,
                'description' => $faker->sentence,
                'canonical_link' => $faker->sentence,
            ],

        ]);
        $post->tags()->attach($tag->id);
        $post->topic()->attach($topic->id);

        }
    }
}
