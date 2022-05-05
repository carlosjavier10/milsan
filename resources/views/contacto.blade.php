@extends('layouts.app')

@section('title','Contacto')
@push('css')
    <link href="{{ asset('css/about.css') }}" type="text/css" rel="stylesheet" />
@endpush


@include('layouts.contact-us-header')

@section('content')

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



@include('sections.contact')


@endsection
