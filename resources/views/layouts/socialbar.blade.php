
@push('css')
{{-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> --}}
<link href=" {{ asset('css/socialbar.css') }}  " rel="stylesheet">
@endpush

@push('script')
	{{-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> --}}
	{{-- <script src=" {{ asset('lib/wow/wow.min.js') }} "></script> --}}
@endpush

	<div class="social">
		<ul>
			<li>
				<a href="#" target="_blank" class="icon-instagram">
					<img class="wait-loading" src="{{ asset('/images/social/instagram-brands.svg') }}" alt="" width="20em">
				</a>
			</li>

			<li>
				<a href="#" target="_blank" class="icon-whatsapp">
					<img class="wait-loading" src="{{ asset('/images/social/whatsapp-brands.svg') }}" alt="" width="20em">
				</a>
			</li>
			<li>
				<a href="#" target="_blank" class="icon-tiktok">
					<img class="wait-loading" src="{{ asset('/images/social/tiktok-brands.svg') }}" alt="" width="20em">
				</a>
			</li>
			<li>
				<a href="" target="_blank" class="icon-twitter">
					<img class="wait-loading" src="{{ asset('/images/social/twitter-brands.svg') }}" alt="" width="20em">
				</a>
			</li>

		</ul>
	</div>