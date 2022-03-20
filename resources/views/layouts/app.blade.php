<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }} @yield('title') </title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

       <link rel="stylesheet" href="{{ asset('/css/laravel.css') }}">
       <link rel="stylesheet" href="{{ asset('/css/nav-menu.css') }}">

        <!-- Styles -->
        <style>



        </style>

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>

        <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <script src="https://kit.fontawesome.com/3851450290.js" crossorigin="anonymous"></script>

    </head>

    @include('layouts.nav-menu')

     @yield('content')

    <body class="antialiased">



        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

        <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        <script>
            $(function() { $(".toggle").on("click", function() { if ($(".item").hasClass("active")) { $(".item").removeClass("active"); $(this).find("a").html("<i class='fas fa-bars'></i>"); } else { $(".item").addClass("active"); $(this).find("a").html("<i class='fas fa-times'></i>"); } }); });
        </script>
    </body>
</html>
