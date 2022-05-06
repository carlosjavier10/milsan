<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	 <meta name="csrf-token" content="{{ csrf_token() }}">


	<title>form test</title>


	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body>


	<div class="container">


		<form action="{{ route('formtest.store') }} " method="post" role="form" class="contactForm">
			@csrf

			<div class="form-row">
				<div class="form-group col-md-6">
					<input type="text" name="name" class="form-control" id="name" placeholder="Su nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
					<div class="validation"></div>
				</div>
				<div class="form-group col-md-6">
					<input type="email" class="form-control" name="correo" id="email" placeholder="Correo Electr&oacute;nico" data-rule="email" data-msg="Please enter a valid email" />
					<div class="validation"></div>
				</div>
			</div>
			<div class="form-group">
				<input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
				<div class="validation"></div>
			</div>
			<div class="form-group">
				<textarea class="form-control" name="mensaje" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Su Mensaje"></textarea>
				<div class="validation"></div>
			</div>

			<div class="g-recaptcha" data-sitekey=" {{config('services.recaptcha.key')}}"></div>
			<br/>


			@if (Session::has('g-recaptcha-response'))


			<p class="alert  ">

				{{ Session::get('g-recaptcha-response')}}
			</p>
			{{-- expr --}}
			@endif

			<div class="text-center"><button type="submit">Enviar</button></div>
		</form>

	</div>



</body>
</html>