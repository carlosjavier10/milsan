    <!--==========================
      construccion Section
      ============================-->

      @push('script')

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


      @endpush

      @push('css')
      <style type="text/css">

        ion-icon
        {
          color: #eabe3f;
          font-size: 2.5em;

        }

  </style>
  @endpush

  <div id="contruction"></div>
  <section id="services">
    <div class="container">

        <header class="section-header wow fadeInUp">
            <h3>Construcci&oacute;n</h3>
            <h4>subtitulo</h4>
            <p>texto breve sobre el servicio de construccion.</p>
        </header>

        <div class="row">

            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="box wow bounceInUp" data-wow-duration="1.4s">
                        <div class="icon">
                            <ion-icon name="glasses-outline"></ion-icon>
                        </div>

                        <h4 class="title"><a href="">Supervici&oacute;n</a></h4>
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                    </div>
                </div>
                <div class="col">
                    <div class="box wow bounceInUp" data-wow-duration="1.4s">

                        <div class="icon">
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                        </div>
                        <h4 class="title"><a href="">Mano de obra</a></h4>
                        <p class="description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </p>
                    </div>
                </div>
                <div class="col">
                    <div class="box wow bounceInUp" data-wow-duration="1.4s">

                        <div class="icon">
                            <ion-icon name="construct-outline"></ion-icon>
                        </div>
                        <h4 class="title"><a href="">Fabricaci&oacute;n</a></h4>
                        <p class="description">Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div class="col">
                    <div class="box wow bounceInUp" data-wow-duration="1.4s">
                        <div class="icon">
                            <ion-icon name="color-wand-outline"></ion-icon>
                        </div>
                        <h4 class="title"><a href="">Decoraci&oacute;n</a></h4>
                        <p class="description">Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section><!-- #servicio -->
