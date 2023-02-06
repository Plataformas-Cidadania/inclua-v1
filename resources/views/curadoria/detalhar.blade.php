@extends('layout')
{{--@section('title', $page->titulo)
@section('keywords', keywords($page->titulo." ".$page->descricao, 2))
@section('description', description($page->descricao))
@section('image', "/imagens/modulos/lg-".$page->imagem)--}}
@section('content')
    <script>
        curadoria_id = {{$id}}
    </script>
        <div id="curadoriaDetalhar" />
@endsection
