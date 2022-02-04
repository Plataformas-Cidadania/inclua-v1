@extends('layout')
@section('title', $page->titulo)
@section('keywords', keywords($page->titulo." ".$page->descricao, 2))
@section('description', description($page->descricao))
@section('image', "/imagens/modulos/lg-".$page->imagem)
@section('content')

    <script>
        id_user = {{auth()->user()->id}};
    </script>

    <div class="bg-lgt">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">&nbsp;</div>
                <div class="col-md-7">
                    <div>
                        <br><br>
                        <h1>{{$page->titulo}}</h1>
                        <p>{!! $page->descricao !!}</p>
                        <br>

                    </div>
                </div>
                <div class="col-md-3">
                    <img src="/img/bg-top.png" alt="" width="40%" class="float-end">
                </div>
            </div>
        </div>
    </div>
    <br/>

    {{--<div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h1>Depoimento</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-2">&nbsp;</div>
    </div>--}}

    <div class="container">
        @include('contribua.user-login')

        <div class="row">
            <div class="col-md-12">
                <div id="depoimento">&nbsp;</div>
                <br>
            </div>
        </div>
    </div>

@endsection
