<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
   <title>{{ config('app.name') }} @yield('title') </title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link rel="icon" href=" {{ asset('/images/MSarquitecta favicon.svg')}} " sizes="any" type="image/svg+xml">
{{--   <link href=" {{ asset('/images/apple-touch-icon.png') }} " rel="apple-touch-icon"> --}}

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href=" {{ asset('lib/bootstrap/css/bootstrap.min.css') }} " rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href=" {{ asset('lib/font-awesome/css/font-awesome.min.css') }}  " rel="stylesheet">
  <link href=" {{ asset('lib/animate/animate.min.css') }} " rel="stylesheet">
  <link href=" {{ asset('lib/ionicons/css/ionicons.min.css') }} " rel="stylesheet">
  <link href=" {{ asset('lib/owlcarousel/assets/owl.carousel.min.css') }} " rel="stylesheet">
  <link href=" {{ asset('lib/lightbox/css/lightbox.min.css') }} " rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href=" {{ asset('css/style.css') }}  " rel="stylesheet">


</head>

<body>

@include('layouts.nav-menu')

@include('layouts.carrousel')



  <!-- JavaScript Libraries -->
  <script src=" {{ asset('lib/jquery/jquery.min.js') }} "></script>
  <script src=" {{ asset('lib/jquery/jquery-migrate.min.js') }} "></script>
  <script src=" {{ asset('lib/bootstrap/js/bootstrap.bundle.min.js') }} "></script>
  <script src=" {{ asset('lib/easing/easing.min.js') }} "></script>
  <script src=" {{ asset('lib/superfish/hoverIntent.js') }} "></script>
  <script src=" {{ asset('lib/superfish/superfish.min.js') }} "></script>
  <script src=" {{ asset('lib/wow/wow.min.js') }} "></script>
  <script src=" {{ asset('lib/waypoints/waypoints.min.js') }} "></script>
  <script src=" {{ asset('lib/counterup/counterup.min.js') }} "></script>
  <script src=" {{ asset('lib/owlcarousel/owl.carousel.min.js') }} "></script>
  <script src=" {{ asset('lib/isotope/isotope.pkgd.min.js') }} "></script>
  <script src=" {{ asset('lib/lightbox/js/lightbox.min.js') }} "></script>
  <script src=" {{ asset('lib/touchSwipe/jquery.touchSwipe.min.js') }} "></script>
  <!-- Contact Form JavaScript File -->
  <script src=" {{ asset('contactform/contactform.js') }} "></script>

  <!-- Template Main Javascript File -->
  <script src=" {{ asset('js/main.js') }} "></script>
</body>
</html>