@extends('layouts.app')
@section('title','Servicios')

@push('css')
    <link href="{{ asset('css/about.css') }}" type="text/css" rel="stylesheet" />
@endpush


@section('content')
@include('layouts.services-header')
@include('sections.servicios')
@include('sections.milsanword')

@include('sections.clients')
@include('sections.testimonials')


@endsection
