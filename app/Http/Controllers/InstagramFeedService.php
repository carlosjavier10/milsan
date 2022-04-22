<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InstagramFeedService extends Controller
{
    public function feeds(){
    $feed = \Dymantic\InstagramFeed\Profile::where('username', 'testethecode')->first();
    return $feed;
    }
}
