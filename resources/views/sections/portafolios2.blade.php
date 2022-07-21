{{-- ///////////////////////////////////////////////////////////////////////////////////

                              PORTFOLIO2

///////////////////////////////////////////////////////////////////////////////////////--}}



@push('css')

  <link href=" {{ asset('css/portafolios2.css') }}  " rel="stylesheet">
  {{-- expr --}}
@endpush

<div class="container">

  <div class="row row-cols-1 row-cols-md-4 g-4">

    @for ($i = 0; $i < 12; $i++)
    {{-- expr --}}

    <div class="col" style="background-image: url(' {{ asset('/images/MSArquitecta contruccion  carrusel 3.jpg') }} ');" >


<div class="card text-bg-dark"  >
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
  </div>
</div>




    </div>

    @endfor


  </div>


</div>