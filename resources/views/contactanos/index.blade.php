@extends('layouts.app')

@section('title','Contactanos')

@section('title','Contactanos')

@section('content')

<div class="container">

    @if (session('info'))

        <div class="alert alert-success" role="alert" id="box-success">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="closebtn"></button>
          Mensaje Enviado <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>

    @endif

    <h1>Deja un Mensaje</h1>


    <form action="{{ route('contactanos.store')}}" method="POST" >
        @csrf

        @include('tools.svg-icons')

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Your name</label>
          <input type="text" class="form-control" id="" placeholder="Your name" name="name" >
      </div>

            @error('name')
              <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                  <div>
                     {{ $message }}
                </div>
            </div>

            @enderror

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="" placeholder="name@example.com" name="correo" >
  </div>

              @error('correo')
              <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                  <div>
                     {{ $message }}
                </div>
            </div>

            @enderror

  <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="" rows="3" name="mensaje"></textarea>
  </div>

            @error('mensaje')
              <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                  <div>
                     {{ $message }}
                </div>
            </div>

            @enderror

  <button type="submit" class="btn btn-primary">Submit</button>

</form>

</div>


@endsection
