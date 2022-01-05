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
                    <h1>Contribua</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>





    @if((array)auth()->user())




        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Authentication -->
                    <form method="POST" action="{{ route('logout') }}" class="text-right">
                        @csrf
                        Olá, {{auth()->user()->name}}!
                        <x-responsive-nav-link :href="route('logout')"
                                               onclick="event.preventDefault();
                                    this.closest('form').submit();">
                            <strong> {{ __('Sair') }}</strong>
                        </x-responsive-nav-link>
                    </form>
                    <br>
                </div>
            </div>


            <div class="row">
                <div class="col-md-4">
                    <a href="interaja">
                        <div class="dorder-container">
                            <div class="dorder-container-mai p-4 text-center">
                                <i class="far fa-hand-point-up fa-3x"></i><br><br>
                                <h2>Interaja</h2>
                                <p>Dissemine informações, proponha discussões, ajude quem necessita</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="compartilhe">
                        <div class="dorder-container">
                            <div class="dorder-container-mai p-4 text-center">
                                <i class="fas fa-share-alt fa-3x"></i><br><br>
                                <h2>Compartilhe</h2>
                                <p>Ajude a ampliar os recursos, compartilhe sua experiência.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="relate">
                        <div class="dorder-container">
                            <div class="dorder-container-mai p-4 text-center">
                                <i class="fas fa-bullhorn fa-3x"></i><br><br>
                                <h2>Relate</h2>
                                <p>Como a INCLUA te ajudou? Conte-nos sua experiência</p>
                            </div>
                        </div>
                    </a>
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
    @else
        <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <h2>Já tenho cadastro</h2>
                    @include('auth.login')
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <h2>Criar meu cadastro</h2>
                    @include('auth.register')
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>

    @endif






@endsection
