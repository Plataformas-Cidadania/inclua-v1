@extends('layout')
@section('title', $modulo->titulo)
@section('keywords', keywords($modulo->titulo." ".$modulo->descricao, 2))
@section('description', description($modulo->descricao))
@section('image', "/imagens/modulos/lg-".$modulo->imagem)
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
                        <h1>{{$modulo->titulo}}</h1>
                        <p>{!! $modulo->descricao !!}</p>
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



    <div class="container">
        @include('contribua.user-login')

        <div class="row">
            <div class="col-md-12">
                {{--<div id="relate">&nbsp;</div>--}}
                <br>
            </div>
        </div>
    </div>




@endsection
