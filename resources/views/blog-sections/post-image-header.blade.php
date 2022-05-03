  <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark blog-header-image" >

    <div class="card bg-dark text-white">

        @if (isset($post->featured_image))
        <img src=" {{ url($post->featured_image) }} " class="card-img" alt="...">
        @else
        <img src=" {{ asset('images/no-image-post.jpg') }}" class="card-img" alt="...">
        @endif

        <div class="card-img-overlay">
            <h3 class="card-title"> {{ $post->title}} </h3>
            <p class="card-text">  {{ $post->summary}} </p>
            {{-- <p class="card-text">Last updated 3 mins ago</p> --}}
        </div>
    </div>

</div>