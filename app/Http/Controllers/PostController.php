<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Canvas\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::published()->get();
        return view('blog', ['posts' => $posts]);
    }

    public function view(Request $request, $slug)
    {
        $post = Post::where('slug', $slug)->first();
        return view('post', ['post' => $post]);
    }
}
