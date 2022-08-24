@extends('layouts.app')
@section('title','Nosotros')

@push('css')
    <link href="{{ asset('css/about.css') }}" type="text/css" rel="stylesheet" />
@endpush

@section('content')
@include('menus.nav-menu')
@include('sections.headers.about-us')
@include('sections.ourhistory')
@include('sections.nosotros')
@include('sections.liderazgo')
@include('sections.team')
@include('sections.footer')






























@endsection
