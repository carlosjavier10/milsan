    <!--==========================
      Portfolio Section
      ============================-->

      @inject('proyectos', 'App\Http\Controllers\PostService')

      <section id="portfolio"  class="section-bg" >
        <div class="container">

          <header class="section-header">
            <h3 class="section-title">Nuestros Proyectos</h3>
          </header>

          <div class="row">
            <div class="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">Todos</li>
                <li data-filter=".filter-residencial">Residencial</li>
                <li data-filter=".filter-comercial">Comercial</li>
                <li data-filter=".filter-corporativo">Corporativo</li>
                <li data-filter=".filter-industrial">Industrial</li>
                <li data-filter=".filter-enproceso">En Proceso</li>
              </ul>
            </div>
          </div>

          <div class="row portfolio-container">

            @if ($proyectos->proyectos()->count() > 0)


            @foreach ($proyectos->proyectos() as $proyecto)

            <div style="display:none">

              {{ $tags = ''}}
              @forelse($proyecto->tags as $tag)
              {{ $tags = $tags.$tag->slug.' '}}
              @empty
              @endforelse
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-{{$tags}} wow fadeInUp">
              <div class="portfolio-wrap">
                <figure>

                  @if  (isset ($proyecto->featured_image))

                  <img src=" {{ url($proyecto->featured_image )}}" class="img-fluid" alt="">

                  <a href=" {{ url($proyecto->featured_image )}} " data-lightbox="portfolio" data-title=" {{ $proyecto->featured_image_caption ? $proyecto->featured_image_caption : "NO CAPTION"; }}" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>

                  @else
                  <img src=" {{ asset('images/no-image-post.jpg') }}" class="img-fluid" alt="">


                  <a href=" {{ asset('images/no-image-post.jpg') }} " data-lightbox="portfolio" data-title=" {{ $proyecto->featured_image_caption ? $proyecto->featured_image_caption : "NO CAPTION"; }}" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>

                  @endif

                  <a href="{{ url('post/'.$proyecto->slug) }}" class="link-details" title="Ver Publicaci"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">{{ $proyecto->title}}</a></h4>
                  <p>
                    {{ $tags }}
                  </p>
                </div>
              </div>
            </div>

            @endforeach
            @endif

          </div>

        </div>
    </section><!-- #portfolio -->