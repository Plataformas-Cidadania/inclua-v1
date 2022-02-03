@extends('layout')
@section('title', $page->titulo)
@section('keywords', keywords($page->titulo." ".$page->descricao, 2))
@section('description', description($page->descricao))
@section('image', "/imagens/modulos/lg-".$page->imagem)
@section('content')

    <script>
        id_user = {{auth()->user()->id}};
    </script>

    <div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h1>Relate</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-2">&nbsp;</div>
    </div>

    <div class="container">
        @include('contribua.user-login')

        <div class="row">
            <div class="col-md-12">
                <div id="relate">&nbsp;</div>
                <br>
            </div>
        </div>
    </div>




@endsection
