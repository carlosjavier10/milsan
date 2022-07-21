@push('css')
<link rel="stylesheet" type="text/css" href=" {{ asset('/css/cover.css') }} ">
@endpush




 <!--==========================
    Header
    ============================-->
    <header id="header">

      <div id="logo" class="">
       {{--  <h1><a href="#intro" class="scrollto">BizPage</a></h1> --}}
       <!-- Uncomment below if you prefer to use an image logo -->
       {{-- <a href="/"><img class="logoms" src=" {{ asset('/images/MSarquitecta favicon black.svg') }}  " alt="" title="" /></a> --}}
       <h1>Milagros Sanchez Arquitecta</h1>
     </div>

   </header><!-- #header -->

   <div>

     <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="{{ asset('/images/portada/MSarquitecta cover image 1.jpg') }}" class="d-block wh-img" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="{{ asset('/images/portada/MSarquitecta cover image 2.jpg') }}" class="d-block wh-img" alt="...">
        </div>
        <div class="carousel-item"data-bs-interval="3000">
          <img src="{{ asset('/images/portada/MSarquitecta cover image 3.jpg') }}" class="d-block wh-img" alt="...">
        </div>
      </div>
    </div>

    <a href=" {{ url('proyectos') }}"><img class="logobt" src=" {{ asset('/images/MSarquitecta favicon white.svg') }}  " alt="" title="" /></a>
  </div>