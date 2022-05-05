<?php

namespace App\Http\Controllers;
use App\Mail\ContactoMailable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Session;

class ContactoController extends Controller
{

    public function index(){

        return view('contacto');


    }

    public function store(Request $request){

        $request->validate ([
            'name'=> 'required',
            'correo'=> 'required|email',
            'mensaje'=> 'required',
            'g-recaptcha-response' => function ($attribute, $value, $fail) {
                $secretKey = config('services-recaptcha.secret');
                $response = $value;
                $userIP = $_SERVER['REMOTE_ADDR'];
                $url = "tps://www.google.com/recaptcha/api/siteverify?secret=secretKey&response=$response&remoteip=$userIP "
                $response = \file_get_contents($url);
                $response = json_decode($response);

                if (!$response->success){
                    session::flash('g-recaptcha-response','Por favor Marcar la Recaptcha');
                    session::flash('alert-class','alert-danger');
                    $fail(attribute.'google recaptcha failed');

                }




            }
        },





    ]);


        $correo = new ContactoMailable($request->all());
        Mail::to('carlosjavier10@gmail.com')->send($correo);

        $msg='OK';

        //return 'OK';
        Return response()->json('OK', 200);
               // return redirect()->route('contactanos.index')->with('msg','OK');



    }

}
