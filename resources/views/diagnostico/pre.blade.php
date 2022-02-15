@extends('layout')
@section('title', $page->titulo)
@section('keywords', keywords($page->titulo." ".$page->descricao, 2))
@section('description', description($page->descricao))
@section('image', "/imagens/modulos/lg-".$page->imagem)
@section('content')


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
                        <div class="row">
                            <div class="col-md-6">
                                <a href="guias">
                                    <div class="dorder-container cursor">
                                        <div class="bg-lgt2 p-3">
                                            <h2 style="margin-top: 15px;">Guias</h2>
                                            <i class="fas fa-angle-right fa-3x float-end" style="margin-top: -52px;"></i>
                                        </div>
                                    </div>
                                    <br>
                                </a>
                            </div>
                            <div class="col-md-6">
                                <a href="diagnostico">
                                    <div class="dorder-container cursor">
                                        <div class="bg-lgt2 p-3">
                                            <h2 style="margin-top: 15px;">Diagnóstico online</h2>
                                            <i class="fas fa-angle-right fa-3x float-end" style="margin-top: -52px;"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <br>
                        </div>
                        <br>

                    </div>
                </div>
                <div class="col-md-3">
                    <img src="/img/bg-top.png" alt="" width="80%" class="float-end">
                </div>
            </div>
        </div>
    </div>


    <br>


@endsection

