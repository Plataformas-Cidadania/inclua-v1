@extends('layout')
@section('title', '')
@section('keywords', '')
@section('description', '')
@section('image', '')
@section('content')


    {{--<div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h1>Guia</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>--}}


    <div class="bg-lgt">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">&nbsp;</div>
                <div class="col-md-7">
                    <div>
                        <br><br>
                        <h1>{{$text->titulo}}</h1>
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

    <br><br>
    <div class="container">
        <div class="row">
           @foreach($lists as $list)
               <div class="col-md-4">
                   <a href="arquivos/guias/{{$list->arquivo}}" target="_blank">
                       <img src="imagens/guias/{{$list->imagem}}" alt="">
                       <br>
                       <br>
                       <h2>{{$list->titulo}}</h2>
                       <p>{!! $list->descricao !!}</p>
                       <br><br>
                   </a>
               </div>
           @endforeach
        </div>
    </div>
    <br><br><br><br><br>


@endsection
