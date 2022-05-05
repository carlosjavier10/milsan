<?php

namespace App\Http\Controllers;
use App\Mail\ContactoMailable;
use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

class ContactoController extends Controller
{

    public function index(){

        return view('contactanos.index');


    }

    public function store(Request $request){

        $request->validate ([
            'name'=> 'required',
            'correo'=> 'required|email',
            'mensaje'=> 'required',
        ]);

        $correo = new ContactoMailable($request->all());
        Mail::to('carlosjavier10@gmail.com')->send($correo);

        return 'OK';
    }

}
