    <!--==========================
      Contact Section
      ============================-->
      @push('meta')
      <meta name="csrf-token" content="{{ csrf_token() }}">
      @endpush

      @push('headscripts')
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
      @endpush

      @push('css')
      <link href=" {{ asset('css/sublimecontact.css') }}  " rel='stylesheet' type='text/css' media="all" />


      @endpush

      <div id="contacto">

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


            <h1 class="agileits w3 wthree w3-agile w3-agileits agileinfo agile">Encantados de escucharte</h1>
            <div class="content-w3ls agileits w3 wthree w3-agile w3-agileits agileinfo agile">

              <div  class="wassend" id="sendmessage">Su mensaje ha sido enviado, Muchas gracias por escribirnos</div>
              <div id="errormessage">
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
              </div>

              <form action="" method="post" role="form" class="contactForm form-agileits" >
                @csrf
                <h2>Escribenos</h2>


                <input type="text" name="name"  id="name" placeholder="Su nombre" data-rule="minlen:4" data-msg="por favor ingrese al menos 4 caracteres" title="Ingrese su nombre" required />
                <div class="validation"></div>

                <input type="email" name="correo" id="email" placeholder="Correo Electr&oacute;nico" data-rule="email" data-msg="Por favor ingrese un email v&aacute;lido" title="Por favor ingrese un correo electronico v&aacute;lido" required  />
                <div class="validation"></div>

                <input type="text" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Por favor use al menos 8 caracteres" title="Sobre que quieres escribirnos" />
                <div class="validation"></div>


                <textarea name="mensaje" rows="5" data-rule="required" data-msg="Por favor cuentanos como podemos ayudarte" placeholder="Su Mensaje"></textarea>
                <div class="validation"></div>

                <div class="g-recaptcha" data-sitekey=" {{config('services.recaptcha.key')}}"></div>
                <br/>
                <p id="recaptch-fail" class="alert alert-danger" style="display:none;">
                  Por favor verifique el recaptcha
                </p>

                <button id="submit" type="submit">Enviar</button>
                <input id="submit" type="submit" class="sign-in" value="Enviar">
              </form>


            </div>
          </div>
        </div>
      </section><!-- #contact -->
      </div>

    </main>