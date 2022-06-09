@extends('layouts.app')
@section('title','Inicio')

@section('content')
{{-- @include('layouts.nav-menu') --}}
@include('layouts.carrousel')
@include('layouts.socialbar')
@include('sections.feature')
@include('sections.mainproyects')
{{-- @include('sections.disenos')    ELIMINADO POR CLIENTE--}}
@include('sections.textpro')
{{-- @include('sections.instagramfeed') --}}
@include('sections.facts')
{{--
@include('sections.nosotros')
@include('sections.callaction')
@include('sections.skills')
@include('sections.portfolio')
@include('sections.clients')
@include('sections.team')
@include('sections.contact')
@include('sections.footer')
 --}}
@endsection
