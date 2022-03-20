<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>First mail test TITLE</title>
</head>
<body>
	<h1>Correo contactato primer test hq</h1>
	<h3>Correo de  {{ $contacto['name']}} </h3>

	<p>Responder a: <strong> {{ $contacto['correo']}} </strong> </p>
	<p>Mensaje: <strong> {{ $contacto['mensaje']}} </strong> </p>


</body>
</html>