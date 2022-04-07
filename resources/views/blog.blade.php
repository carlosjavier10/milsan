@extends('layouts.app')

@section('title','Home')



@section('content')
@include('layouts.blog-background-header')


<section class="py-5 text-center container section-header">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h3 class="fw-light">Album example</h3>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
{{--         <p>
          <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
      </p> --}}
  </div>
</div>
</section>

<div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
            <div class="card bg-dark text-white">
                <img src=" {{ asset('images/about-vision.jpg') }} " class="card-img blog-image"  alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title"> <a href="">Card title</a></h5>
                    <p class="card-text">TAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
        <div class="col">
          <div class="col">
            <div class="card h-100 ">
                <div class="bg-dark ">
                    <img src="{{ asset('images/about-vision.jpg') }} " class="card-img-top blog-image bg-dark" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title"><a href="">Card title</a></h5>
                    <p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col">
      <div class="card shadow-sm">
        <img src="{{ asset('images/about-vision.jpg') }} ">


        <div class="card-body">
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
{{--               <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> --}}
</div>
<small class="text-muted">9 mins</small>
</div>
</div>
</div>
</div>
</div>

{{--  --}}
{{--  --}}
{{--  --}}
<div style="height: 200px;"></div>

<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="{{ asset('images/about-vision.jpg') }}" class="card-img-top" alt="...">
      <div class="card-body section-header">
        <h3 class="card-title"><a href="">Card title</a></h3>
        <p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="{{ asset('images/about-vision.jpg') }}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><a href="">Card title</a></h5>
        <p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="{{ asset('images/about-vision.jpg') }}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><a href="">Card title</a></h5>
        <p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="{{ asset('images/about-vision.jpg') }}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><a href="">Card title</a></h5>
        <p class="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas </p>
      </div>
    </div>
  </div>
</div>
{{--  --}}
{{--  --}}
{{--  --}}

</div>
</div>

{{--  --}}
{{--  --}}
{{--  --}}
{{--  --}}








@endsection




{{-- @if (count($posts) > 0)

@foreach ($posts as $post)
<div>
    <img src=" {{ url($post->featured_image )}} ">

    <h3>
        <a href={{ url('post/'.$post->slug) }}>{{ $post->title }}</a>
    </h3>
    <p>{{ $post->summary }}</p>
</div>
<p>--------------------------------------------------------</p>

<p> {{ $post->title }} </p>
<p> {{ $post->featured_image }} </p>


@endforeach

@endif --}}