@extends('layouts.app')

@section('title','Home')

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

@include('sections.mainproyects')
@include('sections.callaction')
{{-- @include('sections.skills') --}}
@include('sections.facts')
@include('sections.clients')



@endsection
