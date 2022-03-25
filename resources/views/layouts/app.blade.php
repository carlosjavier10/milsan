<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<!-- ############################################################# -->
<head>
  <title>{{ config('app.name') }} @yield('title') </title>
  <link rel="icon" type="image/x-icon" href=" {{ asset('/images/MSarquitecta favicon.svg') }} ">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link href=" {{ asset('/css/layout.css')}} " rel="stylesheet" type="text/css" media="all">
  <script src="https://kit.fontawesome.com/4aec5d5b33.js" crossorigin="anonymous"></script>
</head>
<body id="top">

@yield('content')


    <!-- JAVASCRIPTS -->
    <script src=" {{ asset('/js/jquery.min.js') }}  "></script>
    <script src=" {{ asset('/js/jquery.backtotop.js') }} "></script>
    <script src=" {{ asset('/js/jquery.mobilemenu.js') }} "></script>
  </body>
  </html>