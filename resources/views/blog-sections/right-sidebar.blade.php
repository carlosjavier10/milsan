<div class="col-md-4">
    <div class="position-sticky" style="top: 2rem;">
        <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">Sobre {{ $post->user->name }}</h4>
            <p class="mb-0"> {{ $post->user->summary }} </p>
        </div>

        @inject('postservice','App\Http\Controllers\PostService')



        <div class="p-4">
            <h4 class="fst-italic">Archives</h4>
            <ol class="list-unstyled mb-0">

                @foreach ($postservice->postgroupmonth() as $month)
                    <li><a href="{{ url('/post/month/'.$month->months) }}">{{ $month->months }}</a></li>
                @endforeach

            </ol>
        </div>

        <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
            </ol>
        </div>
    </div>
</div>
