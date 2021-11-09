@extends('layout')
@section('title', $page->titulo)
@section('keywords', keywords($page->titulo." ".$page->descricao, 2))
@section('description', description($page->descricao))
@section('image', "/imagens/modulos/lg-".$page->imagem)
@section('content')

    <div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h1>Compartilhe</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="dorder-container">
                    <div class="dorder-container-mai p-4 text-center">
                        <i class="far fa-hand-point-up fa-3x"></i><br><br>
                        <h2>Interaja</h2>
                        <p>Dissemine informações, proponha discussões, ajude quem necessita</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="dorder-container">
                    <div class="dorder-container-mai p-4 text-center">
                        <i class="fas fa-share-alt fa-3x"></i><br><br>
                        <h2>Compartilhe</h2>
                        <p>Ajude a ampliar os recursos, compartilhe sua experiência.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="dorder-container">
                    <div class="dorder-container-mai p-4 text-center">
                        <i class="fas fa-bullhorn fa-3x"></i><br><br>
                        <h2>Relate</h2>
                        <p>Como a INCLUA te ajudou? Conte-nos sua experiência</p>
                    </div>
                </div>
            </div>
            {{--<div class="col-md-3">
                <div class="dorder-container">
                    <div class="dorder-container-mai p-4 text-center">
                        <i class="fas fa-users fa-3x"></i><br><br>
                        <h2>Comunidade</h2>
                        <p>Construa uma rede colaborativa visando o aperfeiçoamento mútuo</p>
                    </div>
                </div>
            </div>--}}
            <div class="col-md-12"><br><br></div>
        </div>
    </div>




@endsection
