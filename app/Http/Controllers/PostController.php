<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Canvas\Models\Post;
use Canvas\Events\PostViewed;
use Canvas\Models\Topic;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::published()->paginate(6);
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

    public function showbymonth ($slug){

        $fecha =  $this->getMonthYear($slug);  // Convierte el $slug en un arreglo con mes y año separado
        $monthNum = $this->numberMonth($fecha['month']); // convierte el mes a numero de mes
        $year = $fecha['year']; // obtiene el año

        $posts = DB::table('canvas_posts')
        ->whereMonth('published_at', $monthNum )
        ->whereYear('published_at', $year)
        ->get();

        $envista = 'Publicaciones para el mes de '. $this->spanishMonth($fecha['month']).' de '. $year;

        return view('blog', ['posts' => $posts, 'envista' => $envista]);
    }
    public function getMonthYear ($slug){
        $slug = trim($slug);
        $pos = strpos($slug,' ');
        $year = substr($slug,$pos+1,4);
        $month = substr($slug,0,$pos);

        $fecha = [
            'month'=> $month,
            'year'=> $year
        ];
        return ($fecha);
    }

    public function numberMonth ($month){

        switch ($month) {
            case 'January':
                return '01';
                break;
            case 'February':
                    return '02';
                    break;
            case 'March':
                        return '03';
                        break;
            case 'April':
                return '04';
                break;
            case 'May':
                return '05';
                break;
            case 'June':
                return '06';
                break;
            case 'July':
                return '07';
                break;
            case 'August':
                return '08';
                break;
                case 'September':
                    return '09';
                    break;
            case 'Octuber':
                return '10';
                break;
            case 'November':
                return '11';
                break;
            case 'December':
                return '12';
                break;
            default:
                # code...
                break;
        }
    }


    public function spanishMonth ($month){

        switch ($month) {
            case 'January':
                return 'Enero';
                break;
            case 'February':
                    return 'Febrero';
                    break;
            case 'March':
                        return 'Marzo';
                        break;
            case 'April':
                return 'Abril';
                break;
            case 'May':
                return 'Mayo';
                break;
            case 'June':
                return 'Junio';
                break;
            case 'July':
                return 'Julio';
                break;
            case 'August':
                return 'Agosto';
                break;
                case 'September':
                    return 'Septiembre';
                    break;
            case 'Octuber':
                return 'Octubre';
                break;
            case 'November':
                return 'Noviembre';
                break;
            case 'Diciembre':
                return '12';
                break;
            default:
                # code...
                break;
        }
    }
}
