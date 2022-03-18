<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Constructive HTML Template</title>
<!--

Template 2102 Constructive

http://www.tooplate.com/view/2102-constructive

-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400">  <!-- Google web font "Open Sans" -->
    <link rel="stylesheet" href="{{ asset('/css/fontawesome-all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/magnific-popup.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('/slick/slick.css') }} "/>
    <link rel="stylesheet" type="text/css" href="{{ asset('/slick/slick-theme.css') }}"/>
    <link rel="stylesheet" href="{{ asset('/css/tooplate-style.css') }}">

    <script>
        var renderPage = true;

    if(navigator.userAgent.indexOf('MSIE')!==-1
        || navigator.appVersion.indexOf('Trident/') > 0){
        /* Microsoft Internet Explorer detected in. */
        alert("Please view this in a modern browser such as Chrome or Microsoft Edge.");
        renderPage = false;
    }
    </script>

    <style type="text/css">



    </style>
</head>

<body>
    <!-- Loader -->
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>

    <!-- Page Content -->
    <div class="container-fluid tm-main">
        <div class="row tm-main-row">

            @include('layouts.sidebar')


            @yield('content')
                <footer class="footer-link">
                    <p class="tm-copyright-text">Copyright &copy; 2022 MSArquitecta powered by <b>Tecnoweb Solutions</b></p>
                </footer>
            </div>  <!-- row -->
        </div>
        <div id="preload-01"></div>
        <div id="preload-02"></div>
        <div id="preload-03"></div>
        <div id="preload-04"></div>

        <script type="text/javascript" src="{{ asset('/js/jquery-3.2.1.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('/js/jquery.magnific-popup.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('/js/jquery.backstretch.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('/slick/slick.min.js') }}"></script> <!-- Slick Carousel -->

        <script type="text/javascript" src=" {{ asset('/js/sidebar-menu-behavior.js')}} "></script>

        <script>

        </script>
    </body>
</html>