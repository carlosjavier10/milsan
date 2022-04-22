    <!--==========================
      INnstagram feed Section
      ============================-->
      @inject('feeds','App\Http\Controllers\InstagramFeedService')

      <h1>{{ $feeds->feeds() }}</h1>

      @if (!empty($feeds->feeds()))
        <h1>ESTRO AL IF</h1>

      @foreach ($feeds->feeds() as $feed)

      @endforeach
      @else

      <h1>ESTRO AL ELSE</h1>
      @endif

      <section id="instagramfeed">
        <div class="container">

          <header class="section-header">
            <h3>Instagram Feeds</h3>
            <p>S&iacute;guenos en Instagram, siempre estamos publicando nuestros ultimos proyectos, avances, tips para remodelaci&oacute;n y decoraci&oacute;n y muchisima informaci&oacuten; </p>
          </header>

          <div class="row about-cols">



            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              <div class="col">
                <div class="card card-cover  overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('images/facts-bg.jpg');  background-size: 100% 100%;">
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                    <ul class="d-flex list-unstyled mt-auto">
                      <li class="me-auto">
                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                      </li>
                      <li class="d-flex align-items-center me-3">
                        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg>
                        <small>Earth</small>
                      </li>
                      <li class="d-flex align-items-center">
                        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
                        <small>3d</small>
                      </li>
                    </ul>
                  </div>
                </div>
                <div style="text-align: center; font-weight: bold !important; font-size: 2 em !important;">  <h5> background-size: 100% 100%;</h5> </div>
              </div>


            </div>




          </div>

        </div>
    </section><!-- #Nosotros -->