@extends('layouts.app')
@section('title','Servicios')

@push('css')
    <link href="{{ asset('css/about.css') }}" type="text/css" rel="stylesheet" />
@endpush


@section('content')
@include('layouts.services-header')
@include('sections.disenos2')
@include('sections.construccion2')
@include('sections.milsanword')



@endsection
