<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <title>MS Arquitecta - Arquitectura y Dise&ntilde;o Interior - @yield('title') </title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">
  @stack('meta')

  <!-- Favicons -->
  <link rel="icon" href=" {{ asset('/images/MSarquitecta favicon black.svg')}} " sizes="any" type="image/svg+xml">
  {{--   <link href=" {{ asset('/images/apple-touch-icon.png') }} " rel="apple-touch-icon"> --}}

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">

  {{-- new font --}}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Babylonica&family=Roboto:ital,wght@0,300;1,300&display=swap" rel="stylesheet">

  {{-- fuentes inyectadas --}}
  @stack('font')

  <!-- Bootstrap CSS File -->


  <!-- CSS only CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <link href=" {{ asset('lib/lightbox/css/lightbox.min.css') }} " rel="stylesheet">

  {{--  --}}

  <!-- Main Stylesheet File -->


  <link href=" {{ asset('css/style.css') }}  " rel="stylesheet">


  {{-- stylesheet pushed --}}
  @stack('css')
  @stack('headscripts')

  {{-- for snipper  --}}
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

  {{-- loading page --}}
  <script type="text/javascript">
    $(window).load(function() {
      $(".loader").fadeOut("slow");
    });

  </script>

</head>

<body>
  <div class="loader"></div>



  @stack('body')

  @yield('content')


<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>


</body>
</html>