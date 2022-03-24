  <nav>
    <ul class="menu nav">
      <li class="logo">
        {{-- <a href="#"><img class="logoh" src="{{ asset('/storage/images/logo_header_white.png') }}"></a> --}}
        <a href="#"><img class="logoh" src="{{ asset('/images/MSarquitecta logo header black.png') }}"></a>
      </li>
      <li class="item nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="item nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
  <li class="item nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
  <li class="item nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
  <li class="item nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
  <li class="item nav-item">
        <a class="nav-link {{ request()->routeIs('contactanos.index') ? 'active' : '' }}" href="{{ route('contactanos.index') }} ">Contact</a>
{{--    </li>
      <li class="itaem button">
        <a href="#">Log In</a>
      </li>
      <li class="item button secondary">
        <a href="#">Sign Up</a>
      </li> --}}

      <li class="item">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {{__('messages.language')}}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="locale/en">{{__('messages.english')}}</a></li>
            <li><a class="dropdown-item" href="locale/es">{{__('messages.spanish')}} </a></li>

          </ul>
        </div>
      </li>



      <li class="toggle">
        <a href="#">
          <i class="fas fa-bars"> </i>
        </a>
      </li>

    </ul>




  </nav>
