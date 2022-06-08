<?php

namespace App\Http\Controllers;

use App\Mail\ContactoMailable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Session;

class testController extends Controller
{
    //

    public function index(){

        return view('test.form');


    }

    public function store(Request $request){

        $request->validate ([
            'name'=> 'required',
            'correo'=> 'required|email',
            'mensaje'=> 'required',
            'g-recaptcha-response' => function ($attribute, $value, $fail) {
                $secretKey = config('services-recaptcha.secret');
                $secretKey = '6Lcr68gfAAAAAAtsJij6stTsJ-VDFvbQBsuazBFm';


                $response = $value;
                $userIP = $_SERVER['REMOTE_ADDR'];
                $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response&remoteip=$userIP ";


                $response = \file_get_contents($url);
                $response = json_decode($response);
                /* dd($response);*/
                if (!$response->success){
                    Session::flash('g-recaptcha-response','Por favor Marcar la Recaptcha');
                    Session::flash('alert-class','alert-danger');
                    $fail($attribute.'google reCaptha failed');

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