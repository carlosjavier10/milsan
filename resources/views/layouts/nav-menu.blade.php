 <!--==========================
    Header
  ============================-->
  <header id="header">
    <div class="container-fluid">

      <div id="logo" class="pull-left ">
       {{--  <h1><a href="#intro" class="scrollto">BizPage</a></h1> --}}
        <!-- Uncomment below if you prefer to use an image logo -->
         <a href="/"><img class="logoms" src=" {{ asset('/images/MSarquitecta logo Horizontal logo dorado.png') }}  " alt="" title="" /></a>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class=" {{ ! Route::is('index') ?: 'menu-active'}} "><a  href="{{ url('/') }}">Inicio</a></li>
          <li class=" {{ ! Route::is('nosotros') ?: 'menu-active'}} "><a href="{{ url('nosotros') }}">Nosotros</a></li>
          <li class=" {{ ! Route::is('servicios') ?: 'menu-active'}} "><a href="{{ url('servicios') }}">Servicios</a></li>
          <li class=" {{ ! Route::is('proyectos') ?: 'menu-active'}} "><a href=" {{ url('proyectos') }}"> Proyectos</a></li>
          <li class=" {{ ! Route::is('') ?: 'menu-active'}} "><a href=" {{ url('blog') }}">Blog</a></li>
{{--           <li class="menu-has-children"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li> --}}
          <li class=" {{ ! Route::is('contacto') ?: 'menu-active'}} "><a href="{{ url('contacto') }}">Contacto</a></li>
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->
