    <!--==========================
      Contact Section
      ============================-->
      @push('meta')
      <meta name="csrf-token" content="{{ csrf_token() }}">
      @endpush

      @push('headscripts')
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      @endpush


      <section id="contact" class="section-bg wow fadeInUp">
        <div class="container">

          <div class="section-header">
            <h3>Contacto</h3>
            <p>Estamos encantados de escucharte y ayudar a hacer tu sue&ntilde;o realidad</p>
          </div>

          <div class="row contact-info">

            <div class="col-md-4">
              <div class="contact-address">
                <i class="ion-ios-location-outline"></i>
                <h3>Direcci&oacute;n</h3>
                <address>A108 Adam Street, NY 535022, USA</address>
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-phone">
                <i class="ion-ios-telephone-outline"></i>
                <h3>Tel&eacute;fono</h3>
                <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-email">
                <i class="ion-ios-email-outline"></i>
                <h3>Correo</h3>
                <p><a href="mailto:info@msarquitecta.com">info@msarquitecta.com</a></p>
              </div>
            </div>

          </div>

          <div class="form">
            <div  class="wassend" id="sendmessage">Su mensaje ha sido enviado, Muchas gracias por escribirnos</div>
            <div id="errormessage">

              @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
              @endforeach

            </div>


            <form action="" method="post" role="form" class="contactForm">
              @csrf

              <div class="form-row">
                <div class="form-group col-md-6">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Su nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-md-6">
                  <input type="email" class="form-control" name="correo" id="email" placeholder="Correo Electr&oacute;nico" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="mensaje" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Su Mensaje"></textarea>
                <div class="validation"></div>
              </div>

              <div class="g-recaptcha" data-sitekey="your_site_key"></div>
              <br/>


              @if (Session::has('g-recaptcha-response'))

                  <p class="alert {{ $Session::get('alert-class','alert-info')}} ">

                    {{ Session::get('g-recaptcha-response')}}
                  </p>
                {{-- expr --}}
              @endif

              <div class="text-center"><button type="submit">Enviar</button></div>
            </form>
          </div>

        </div>
      </section><!-- #contact -->

    </main>