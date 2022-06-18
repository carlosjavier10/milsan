<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class InstagramFeedService extends Controller
{
    public function feeds(){
        try {
            $profile = \Dymantic\InstagramFeed\Profile::where('username', 'testethecode')->first();
            if ($profile != null) {
                $feeds = $profile->feed(9);
                return $feeds;
        // code...
            }
        } catch (Throwable $e) {
            report($e);

            return false;
        }

    }
}