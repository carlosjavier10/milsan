@extends('layouts.app')

@section('title','Home')



@section('content')
@include('layouts.blog-background-header')


<section class="py-5 text-center container section-header">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h3 class="fw-light">Album example</h3>
      <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.  </p>

    </div>
  </div>
  <h4>{!! $envista !!}</h4>
</section>
<div class="album py-5 bg-light">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      @if (count($posts) > 0)
      @foreach ($posts as $post)
      <div class="col">
        <div class="card">
          @if (!empty($post->featured_image))
          <a href="{{ url('post/'.$post->slug) }}"> <img src="{{ url($post->featured_image )}}" class="card-img-top" alt="..."> </a>
          @else
           <a href="{{ url('post/'.$post->slug) }}"> <img src="{{ asset('images/no-image-post.jpg') }}" class="card-img-top" alt="..."> </a>
          @endif
          <div class="card-body section-header">
            <h3 class="card-title"><a href="{{ url('post/'.$post->slug) }}">{{ $post->title }}</a></h3>
            <p class="card-text">{{ $post->summary }} </p>
          </div>
        </div>
      </div>
      @endforeach
      @else
      <div class="col">
        <div class="card">
          {{-- <a href="{{ url('post/'.$post->slug) }}"> <img src="{{ url($post->featured_image )}}" class="card-img-top" alt="..."> </a> --}}
          <div class="card-body section-header">
            <h3 class="card-title"><a href="{{ url('blog') }}">Ir a BLog</a></h3>
            <p class="card-text"> NO hay publicaciones con este tema aun </p>
          </div>
        </div>
      </div>
      @endif
    </div>
  </div>
</div>
@endsection




