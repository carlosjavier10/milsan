@extends('layouts.app')

@section('title','Proyectos')

@push('css')
    <link href="{{ asset('css/about.css') }}" type="text/css" rel="stylesheet" />
@endpush

@section('content')
@include('layouts.proyects-header-background')
{{-- feature
nosotros
servicios
call action
skiil
facts
portfoio
clients
team
contact
footer
 --}}



@include('sections.portfolio')
@include('sections.clients')
@include('sections.testimonials')


@endsection
