<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React Blog</title>
        <link rel="stylesheet" href=" {{ asset('css/bootstrap.min.css') }}">

    </head>
    <body>
        <noscript>Please enable Javascript on your browser to visit this site </noscript>
        <div id="app"></div>

        <script src="{{ asset('js/admin.js') }}"></script>
        <script src="{{ asset('js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('js/popper.min.js') }}"></script>
        <script src="{{ asset('js/jquery.min.js') }}"></script>
    </body>
</html>
