@extends('layouts.app')

@section('title','Home')

@section('content')



@include('layouts.carrousel')


@include('sections.feature')
@include('sections.nosotros')
@include('sections.servicios')
@include('sections.callaction')
@include('sections.skills')
@include('sections.facts')
@include('sections.portfolio')
@include('sections.clients')
@include('sections.team')
@include('sections.contact')
@include('sections.footer')





{{-- @include('sections.mainproyects')
@include('sections.callaction')
@include('sections.facts')
@include('sections.clients') --}}



@endsection
