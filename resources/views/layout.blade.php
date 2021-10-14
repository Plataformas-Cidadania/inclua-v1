<?php $rota = Route::getCurrentRoute()->uri();?>

<?php
    $setting = DB::table('settings')->orderBy('id', 'desc')->first();
    $base_href = config('app.url');
    $barra = "";

?>

<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{$setting->titulo}} - @yield('title')</title>
        <base href="{{$base_href}}{{$barra}}">
        @include('layouts.metas')
        @include('layouts.links')
        @include('conexoes.css')
     </head>
    <body id="contrast" >
        @include('layouts.layout1')
    </body>
</html>


<style type="text/css">
    .contrast-off{

    }
    .contrast{
        background-color: #000000!important;
        color: #FFFFFF!important;
    }
    .contrast > div{
        background-color: #000000!important;
        color: #FFFFFF!important;
    }
    .contrast > div > div{
        background-color: #000000!important;
        color: #FFFFFF!important;
    }
    .contrast > div > div > div{
        background-color: #000000!important;
        color: #FFFFFF!important;
    }
    .contrast > header > div > div > div > nav{
        background-color: #000000!important;
        color: #FFFFFF!important;
    }
</style>

@include('conexoes.js')
