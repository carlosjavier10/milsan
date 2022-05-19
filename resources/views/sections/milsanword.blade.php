

@push('font')
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Babylonica&display=swap" rel="stylesheet">
@endpush

@push('css')
 <link href=" {{ asset('css/milsanword.css') }}  " rel="stylesheet">
@endpush

<section id="milsanword" class="wow fadeInUp" style="background-image: url(/images/MSarquitecta-aboutus-background-image.jpg);">


  <div class="container col-xxl-8 px-4 py-5 bckgimg" >
    <div class="custompad row flex-lg-row-reverse align-items-center g-5 py-5">

      <div class="col-lg-6">
       {{--  <h1 class="display-5 fw-bold lh-1 mb-3">MSArquitecto</h1> --}}
        <p class="lead">"La arquitectura es el maravilloso arte que permite elevar los sueños a un nivel superior, donde la creatividad y la innovación son los protagonistas principales y el respaldo de la disciplina, la excelencia, la calidad y la objetividad marcan el norte. Lo que nos permite ser los mejores aliados en los proyectos que realizamos para nuestros Clientes y hacer tangibles sus deseos más anhelados es nuestra mayor satisfacción."</p>
        <p class="firm"><strong>Milagros Sanchez</strong> <span>Arquitecta</span></p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href="{{ url('/contacto') }}">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 custombotto">Contacto</button>
          </a>
{{--           <a href="{{ url('blog') }}">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4 custombotto2">Blog</button>
          </a> --}}
        </div>
      </div>

      <div class="col-10 col-sm-8 col-lg-6 msimgdiv">
        <img src=" {{ asset('/images/Arquitecta-Milagros-Sanchez-image-perfil.png') }} " class="msimg d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>


    </div>
  </div>



</section>