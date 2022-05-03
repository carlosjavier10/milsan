@inject('lastposts','App\Http\Controllers\PostService')
<section id="" class="lastpost-section">
  <div class="row row-cols-1 row-cols-md-3 g-5 ">


    @if ($lastposts->lastposts()->count() > 0)
    {{-- expr --}}


    @foreach( $lastposts->lastposts() as $lastpost )
    <div class="col">
      <div class="card h-100 lastpost-div">

        @if (isset($lastpost->featured_image))
        <img src=" {{ url($lastpost->featured_image) }} " class="card-img-top lastpost-img" alt="...">
        @else
        <img src=" {{ asset('images/no-image-post.jpg') }}" class="card-img-top lastpost-img" alt="...">

        @endif

        <div class="card-body">
          <h5 class="card-title"> {{ $lastpost->title }} </h5>
          <p class="card-text"> {{ $lastpost->summary}} </p>
        </div>
      </div>
    </div>
    @endforeach

    @endif

  </div>
</section>