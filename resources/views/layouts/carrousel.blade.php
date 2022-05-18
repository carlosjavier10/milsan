  <!--==========================
    Intro Section
  ============================-->
  <section id="intro">
    <div class="intro-container">
      <div id="introCarousel" class="carousel  slide carousel-fade" data-ride="carousel">

        <ol class="carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <div class="carousel-item active">
            <div class="carousel-background"><img src=" {{ asset('/images/intro-carousel/1.jpg') }} " alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>!Hacemos realidad lo imaginado!</h2>
                <p>Un equipo comprometido con esta mágica profesión que día a día apuesta por seguir construyendo sueños…</p>
                <a href="{{ url('/proyectos') }}" class="btn-get-started scrollto">Ver Proyectos</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background"><img src="{{ asset('/images//intro-carousel/2.jpg') }} " alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>Comprometidos con los resultado</h2>
                <p>Analizar todos los aspectos, aplicar estrategias y buscar las mejores soluciónes, es la etapa en la que mas nos enfocamos y destacamos.</p>
                <a href="{{ url('/proyectos') }}" class="btn-get-started scrollto">Ver Proyectos</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background"><img src=" {{ asset('/images/intro-carousel/3.jpg') }} " alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>Arte Habitable</h2>
                <p>Es donde la ciencia y el arte se equilibran, es hacer realidad lo imaginado...</p>
                <a href="{{ url('/proyectos') }}" class="btn-get-started scrollto">Proyectos</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background"><img src=" {{ asset('/images//intro-carousel/4.jpg') }} " alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>Personas con Valores y Principios</h2>
                <p>Que unen sus fuerzas en común, para consolidarse como un equipo de trabajo productivo en todos los sentidos, que no deja de superarse cada día para llevar el éxito de nuestra empresa a otro nivel</p>
                <a href="{{ url('/nosotros') }}" class="btn-get-started scrollto">Más Sobre MS</a>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-background"><img src=" {{ asset('/images/intro-carousel/5.jpg') }} " alt=""></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2> Tecnología Inmersiva </h2>
                <p> Una experiencia real del proyecto y sus detalles estéticos, Ahorre tiempo y optimice su presupuesto. Nos mantenemos en constante actualización con nuevas tecnologias</p>
                <a href="{{ url('/proyectos') }}" class="btn-get-started scrollto">Ver Proyectos </a>
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>

        <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Siguiente</span>
        </a>

      </div>
    </div>
  </section><!-- #intro -->

  <main id="main">
