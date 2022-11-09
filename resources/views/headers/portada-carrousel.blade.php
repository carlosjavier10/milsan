
@push('css')
<link rel="stylesheet" type="text/css" href=" {{ asset('/css/cover.css') }} ">
@endpush

 <!--==========================
    Header
    ============================-->
    <header id="header">

{{--       <div id="logo" class="">
        <h1><a href="#intro" class="scrollto">BizPage</a></h1>
      </div> --}}

      <a href="#"><img class="logobt" src=" {{ asset('/images/MSarquitecta favicon white.svg') }}  " alt="" title="" /></a>

    </header><!-- #header -->
    <div>
      <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">

        <div class="cb position-relative">

          <a href="{{ url('portfolio/') }}" class="">
            <button type="button" class="coverbutton btn btn-secondary">Proyectos+</button>
          </a>

        </div>


        <div class="carousel-inner">

          <div class="carousel-item active" data-bs-interval="3000">
            <div class="d-block  wh-img" style="background-image: url('/images/portada/MSarquitecta-cover image1.jpg');">
              <img class="wait-loading" style="display:none;" src="{{asset('/images/portada/MSarquitecta-cover image1.jpg')}}">
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="3000">
            <div class="d-block  wh-img" style="background-image: url('/images/portada/MSarquitecta-cover image2.jpg');">
              <img class="wait-loading" style="display:none;" src="{{asset('/images/portada/MSarquitecta-cover image2.jpg')}}">
            </div>
          </div>

          <div class="carousel-item"data-bs-interval="3000">

            <div class="d-block  wh-img" style="background-image: url('/images/portada/MSarquitecta-cover image3.jpg');">
              <img class="wait-loading" style="display:none;" src="{{asset('/images/portada/MSarquitecta-cover image3.jpg')}}">
            </div>

          </div>

          <div class="carousel-item"data-bs-interval="3000">
            <div class="d-block  wh-img" style="background-image: url('/images/portada/MSarquitecta-cover image4.jpg');">
              <img class="wait-loading" style="display:none;" src="{{asset('/images/portada/MSarquitecta-cover image4.jpg')}}">
            </div>
          </div>

          <div class="carousel-item"data-bs-interval="3000">
            <div class="d-block  wh-img" style="background-image: url('/images/portada/MSarquitecta-cover image5.jpg');">
              <img class="wait-loading" style="display:none;" src="{{asset('/images/portada/MSarquitecta-cover image5.jpg')}}">
            </div>
          </div>

          <div class="carousel-item"data-bs-interval="3000">
            <div class="d-block  wh-img" style="background-image: url('/images/portada/MSarquitecta-cover image6.jpg');">
              <img class="wait-loading" style="display:none;" src="{{asset('/images/portada/MSarquitecta-cover image6.jpg')}}">
            </div>
          </div>

        </div>
      </div>
    </div>