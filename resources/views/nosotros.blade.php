@extends('layouts.app')
@section('title','Nosotros')

@push('css')
    <link href="{{ asset('css/about.css') }}" type="text/css" rel="stylesheet" />
@endpush

@section('content')
{{-- @include('layouts.nav-menu') --}}
@include('headers.about-us-background-header')
@include('sections.ourhistory')
@include('sections.nosotros')
@include('sections.liderazgo')
@include('sections.team')





























@endsection
