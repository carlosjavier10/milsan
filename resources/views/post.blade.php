@extends('layouts.app')

@section('title', 'Post')

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
footer --}}

    @include('headers.blog-background-header')

    @include('menus.topic-menu')
    <main class="container blog-body">

        @include('blog-sections.post-image-header')

        <div class="row g-5">
            <div class="col-md-8">
                <h3 class="pb-4 mb-4 fst-italic border-bottom">
                    {{ $post->featured_image_caption }}
                </h3>

                <article class="blog-post">
                    <h2 class="blog-post-title"> {{ $post->title }}</h2>
                    <p class="blog-post-meta">{{ \Carbon\Carbon::parse($post->published_at)->toDayDateTimeString() }} by
                        <a href="#"> {{ $post->user->name }} </a></p>

                    {!! $post->body !!}
                    <span>
                        <h4>Etiquetas del Post</h4>
                    </span>
                    <div class="col-md-8 blog-tags">
                        <nav class="blog-pagination" aria-label="Pagination">
                            @foreach ($post->tags as $tag)
                                <a class="btn btn-outline-primary" href="#">{{ $tag->name }} </a>
                            @endforeach
                        </nav>
                    </div>
                </article>
            </div>
            @include('blog-sections.right-sidebar')
        </div>

        <h3 class="text-center">Ultimas Publicaciones </h3>
        @include('blog-sections.last-post')
    </main>
@endsection
