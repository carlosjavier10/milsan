@inject('lastposts','App\Http\Controllers\PostService')
<section id="" class="lastpost-section">
  <div class="row row-cols-1 row-cols-md-3 g-5 ">


    @if ($lastposts->lastposts()->count() > 0)
    {{-- expr --}}

    @foreach( $lastposts->lastposts() as $lastpost )

    @if ($loop->index<=2)
      {{-- expr --}}
    <div class="col">
      <div class="card h-100 lastpost-div">

        <a href=" {{ url('post/'.$lastpost->slug) }} ">
        @if (isset($lastpost->featured_image))
        <img src=" {{ url($lastpost->featured_image) }} " class="card-img-top lastpost-img" alt=" {{ $lastpost->image_caption}} ">
        @else
        <img src=" {{ asset('images/no-image-post.jpg') }}" class="card-img-top lastpost-img" alt="no image post">

        @endif

        <div class="card-body">
          <h5 class="card-title"> {{ $lastpost->title}} </h5>
          <p class="card-text"> {{ $lastpost->summary}} </p>
        </div>
        </a>
      </div>
    </div>

    @endif
    @endforeach

    @endif

  </div>
</section>