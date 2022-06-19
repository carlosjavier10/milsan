  @inject('lastproyects','App\Http\Controllers\PostService')
  <!--==========================
    Footer
    ============================-->

    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-6 footer-info">
              <a href="#"> <img class="footer-logo" src=" {{ asset('/images/MSarquitecta logo Horizontal trans.png') }}"> </a>
              <p>Somos un grupo de personas con valores y principios que unen sus fuerzas en común, para consolidarse como un equipo de trabajo productivo en todos los sentidos, que no deja de superarse cada día para llevar el éxito de nuestra empresa a otro nivel.</p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Servicios</h4>
              <ul>
                <li><i class="ion-ios-arrow-right"></i> <a href=" {{ url('servicios/#diseno') }} ">Dise&ntilde;o</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href=" {{ url('servicios/#construction') }} ">Construcci&oacute;n</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href=" {{ url('servicios') }} ">Remodelaci&oacute;n</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Terminos de uso</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Politicas de Privacidad</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4> Contacto</h4>
              <p>
                A108 Adam Street <br>
                New York, NY 535022<br>
                United States <br>
                <strong>Phone:</strong> +1 5589 55488 55<br>
                <strong><a href="contacto"> Email: </a></strong> info@msarquictecta.com<br>
              </p>

              <div class="social-links">
                <a href="https://twitter.com/msarquitecto" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://www.facebook.com/ms.arquitecta" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/ms.arquitecta/" class="instagram"><i class="fa fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@ms.arquitecta" class="tiktok"><i class="fa fa-tiktok"><img src="{{ asset('/images/tik-tok.png') }}" alt="" width="20em">  </i></a>
                {{--  <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>  --}}
              </div>

            </div>

            <div class="col-lg-3 col-md-6 footer-newsletter">
              <h4>&uacute;ltimos Proyectos</h4>

              <div class="row row-cols-1 row-cols-md-2 g-4">


               @if  (($lastproyects->lastproyects() != null) && ($lastproyects->lastproyects()->count() > 0)  )


               @foreach( $lastproyects->lastproyects() as $proyect )

               <a href=" {{ url('post/'.$proyect->slug) }} ">
                <div class="col">
                  <div class="card h-100">
                    @if (isset($proyect->featured_image))
                      {{-- expr --}}
                    <img src=" {{ $proyect->featured_image }} " class="card-img-top" alt=" {{ $proyect->image_caption}} " title=" {{ $proyect->title}} ">
                    @else
                    <img src="{{ asset('images/no-image-post.jpg') }} " class="card-img-top" alt="" title=" {{ $proyect->title}} ">
                    @endif
                  </div>
                </div>
              </a>
              @endforeach
              @else
              @endif
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>MSArquitecta</strong>. All Rights Reserved
      </div>
      <div class="credits">

        Designed by <a href="https://veneprint.com/">Veneprint</a>
      </div>
    </div>
  </footer><!-- #footer -->

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  <!-- Uncomment below i you want to use a preloader -->
  <!-- <div id="preloader"></div> -->
