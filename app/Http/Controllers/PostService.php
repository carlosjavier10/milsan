<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Canvas\Models\Post;
use Illuminate\Support\Facades\DB;

class PostService extends Controller
{
    public function lastposts (){
         $lastpost = Post::published()->latest()->take(3)->get();
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

}
