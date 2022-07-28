<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Canvas\Models\Post;
use Canvas\Models\Topic;
use Illuminate\Support\Facades\DB;

class PostService extends Controller
{
    public function lastposts (){
       $lastpost = Post::published()->latest()->take(4)->get();
       return $lastpost;
   }

   public function postgroupmonth(){
        // $months = DB::table('canvas_posts')->where('published_at','<>',null) ->get();
    $months = Post::select(
        DB::raw("DATE_FORMAT(published_at,'%M %Y') as months")
    )
    ->groupBy('months')
    ->get();
    return $months;
}


public function proyectos(){

    $topic = Topic::where('slug','proyectos')->first();

    if (isset($topic)) {
        $proyectos = $topic->posts()->orderByDesc('published_at')->take(18)->get();
    }
    else{
        $proyectos = null;
    }

    return $proyectos;
}



public function lastproyects(){
    $topic = Topic::where('slug','proyectos')->first();

    if (isset($topic)) {
        $proyects = $topic->posts()->latest()->take(4)->get();
    }
    else{
        $proyects = null;
    }




    return $proyects;
}


}
