<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Canvas\Models\Topic;

class TopicService extends Controller
{
    public function lista(Request $request)
    {
       $topics = Topic::all();

       if ($request->ajax()){
        $response  = [
            'success'   => true,
            'topics' => $topics,


        ];

        return response()->json($response, 200);
    }
    else{
        return $topics;
    }
}

}
