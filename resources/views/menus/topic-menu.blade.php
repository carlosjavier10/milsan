@inject('temas','App\Http\Controllers\TopicService')

<div class="container">
	<div class="nav-scroller py-1 mb-2">
		<nav class="nav d-flex justify-content-between">
			@if ( count($temas->lista()) > 0 )
				@foreach( $temas->lista() as $tema)
				 <a class="p-2 link-secondary" href=" {{ url('post/topic/'.$tema->slug) }} ">{{ $tema->name}}</a>
				@endforeach
			@endif
		</nav>
	</div>
</div>

