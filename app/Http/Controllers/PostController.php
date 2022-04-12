<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Canvas\Models\Post;
use Canvas\Events\PostViewed;
use Canvas\Models\Topic;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::published()->get();
        $envista = 'Todas las publicaciones';

        return view('blog', ['posts' => $posts, 'envista' => $envista ]);
    }

    public function view(Request $request, $slug)
    {
        $post = Post::where('slug', $slug)->first();
        event(new PostViewed($post));
        return view('post', ['post' => $post]);
    }

        /*retorna todos los post de un tema sin importar el usuario*/
    public function getPostByTopicAll ($slug){
        $topic = Topic::where('slug', $slug)->first();
        $posts = $topic->posts()->get();

        $envista = 'Publicaciones del tema <b> '. $topic->name.'</b>';

        return view('blog', ['posts' => $posts, 'envista' => $envista]);
    }
}
