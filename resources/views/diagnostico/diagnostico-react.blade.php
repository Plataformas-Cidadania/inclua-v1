@extends('layout')
@section('title', $page->titulo)
@section('keywords', keywords($page->titulo." ".$page->descricao, 2))
@section('description', description($page->descricao))
@section('image', "/imagens/modulos/lg-".$page->imagem)
@section('content')

    <script>
        tipo = "{{$tipo}}";
        text_diagnostico_titulo = "{!! $text_diagnostico_titulo !!}";
        text_diagnostico_descricao = "{!! $text_diagnostico_descricao !!}";
    </script>
    <div id="diagnostico">&nbsp;</div>

@endsection

