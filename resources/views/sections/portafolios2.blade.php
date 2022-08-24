{{-- ///////////////////////////////////////////////////////////////////////////////////
                              PORTFOLIO2
///////////////////////////////////////////////////////////////////////////////////////--}}



@push('css')
  <link href=" {{ asset('css/portafolios2.css') }}  " rel="stylesheet">
  {{-- expr --}}
@endpush

<div  id="portafolio" class="container">

  <div class="row row-cols-1 row-cols-md-4 g-4">
  @foreach ($proyectos as $proyecto)
  <a href="#">

        <div class="col" style="background-image: url(' {{ asset($proyecto->featured_image) }} ');" >
          <div class="card text-bg-dark"  >
            <div class="card-img-overlay">
              <h5 class="card-title">{{ $proyecto->title}} </h5>
            </div>
          </div>

      </div>
  </a>

    @endforeach
  </div>


</div>