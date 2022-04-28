@extends('layouts.app')
@section('title','Home')

@section('content')
{{-- @include('layouts.nav-menu') --}}
@include('layouts.carrousel')
@include('sections.feature')
@include('sections.mainproyects')
@include('sections.servicios')
@include('sections.textpro')
@include('sections.instagramfeed')
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
