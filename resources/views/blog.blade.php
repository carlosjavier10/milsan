@extends('layouts.app')

@section('title','Blog')


@push('css')
<style type="text/css">
  #paginate-arrow svg {
    width: 3em;
  }

  #paginate-arrow p {
    padding-top: 1em
  }
  #paginate-arrow {
    text-align: center !important;

  }

  @media (max-width: 390px) {
    #paginate-arrow {
      font-size: 0.7em !important;
    }
  }

  @media (max-width: 344px) {
    #paginate-arrow {
      font-size: 0.5em !important;
    }
  }
</style>

@endpush
@include('layouts.blog-background-header')
@include('sections.blog')




