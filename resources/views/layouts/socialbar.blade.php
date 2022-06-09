@push('css')
<link href=" {{ asset('css/socialbar.css') }}  " rel="stylesheet">
@endpush

	<div class="social">
		<ul>
			<li>
				<a href="#" target="_blank" class="icon-instagram">
					<img src="{{ asset('/images/social/instagram-brands.svg') }}" alt="" width="20em">
				</a>
			</li>

			<li>
				<a href="#" target="_blank" class="icon-whatsapp">
					<img src="{{ asset('/images/social/whatsapp-brands.svg') }}" alt="" width="20em">
				</a>
			</li>
			<li>
				<a href="#" target="_blank" class="icon-tiktok">
					<img src="{{ asset('/images/social/tiktok-brands.svg') }}" alt="" width="20em">
				</a>
			</li>
			<li>
				<a href="" target="_blank" class="icon-twitter">
					<img src="{{ asset('/images/social/twitter-brands.svg') }}" alt="" width="20em">
				</a>
			</li>

		</ul>
	</div>