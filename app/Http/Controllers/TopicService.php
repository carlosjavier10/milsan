<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Canvas\Models\Topic;

class TopicService extends Controller
{
    public function lista()
    {
         $lista = Topic::all();
         return $lista;
    }

}
