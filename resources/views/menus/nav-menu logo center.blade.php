
@push('css')
<link href=" {{ asset('css/logo menu center.css') }}  " rel="stylesheet">
@endpush



<div class="menu_logo_center_container">
  <header class="blog-header py-3">

    <div class="row flex-nowrap justify-content-between align-items-center">

      <div class="col-4 pt-1">
        <a class="link-secondary" href=" {{ url('proyectos') }} ">Todos</a>
        <a class="link-secondary" href="{{ url('proyectos/?filter=residencial') }}">Residencial</a>
        <a class="link-secondary" href="{{ url('proyectos/?filter=comercial') }}">Comercial</a>
        <a class="link-secondary" href="{{ url('proyectos/?filter=corporativo') }}">Corporativo</a>
        <a class="link-secondary" href="{{ url('proyectos/?filter=industrial') }}">Industrial</a>
      </div>

      <div class="col-4 text-center">
        <a class="blog-header-logo text-dark" href="#"> <img class="" src=" {{ asset('/images/MSarquitecta favicon white.svg') }}  " alt="" title="" /> </a>
      </div>

      <div class="col-4 d-flex justify-content-end align-items-center">

        <div class="container-fluid">



         <nav id="nav-menu-container">
          <div class="toggle-logo">
            <img src=" {{ asset('/images/MSarquitecta favicon white.svg') }}  " >
          </div>
          <ul class="nav-menu">
            {{-- <li class=" {{ ! Route::is('index') ?: 'menu-active'}} "><a  href="{{ url('/') }}">Inicio</a></li> --}}
            <li class=" {{ ! Route::is('nosotros') ?: 'menu-active'}} "><a href="{{ url('nosotros') }}">Nosotros</a></li>
            <li class=" {{ ! Route::is('servicios') ?: 'menu-active'}} "><a href="{{ url('servicios') }}">Servicios</a></li>
            {{-- <li class=" {{ ! Route::is('proyectos') ?: 'menu-active'}} "><a href=" {{ url('proyectos') }}"> Proyectos</a></li> --}}
            <li class=" {{ ! Route::is('') ?: 'menu-active'}} "><a href=" {{ url('blog') }}">Blog</a></li>
          <li class=" {{ ! Route::is('contacto') ?: 'menu-active'}} "><a href="{{ url('contacto') }}">Contacto</a></li>
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>


  </div>

</div>
</header>
</div>