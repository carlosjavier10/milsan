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

    $tag = Topic::where('slug','proyectos')->first();

    if (isset($tag)) {
        $proyectos = $tag->posts()->orderByDesc('published_at')->take(18)->get();
    }
    else{
        $proyectos = null;
    }

    return $proyectos;
}



public function lastproyects(){
    $tag = Topic::where('slug','proyectos')->first();

    if (isset($tag)) {
        $proyects = $tag->posts()->latest()->take(4)->get();
    }
    else{
        $proyects = null;
    }




    return $proyects;
}


}
