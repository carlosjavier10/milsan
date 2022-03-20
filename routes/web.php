<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('locale/{locale}', function($locale){
    session()->put('locale',$locale);
    return Redirect::back();
});

Route::get('contactanos', [ContactoController::class, 'index'])->name('contactanos.index') ;


Route::post('contactanos', [ContactoController::class, 'store'])->name('contactanos.store');