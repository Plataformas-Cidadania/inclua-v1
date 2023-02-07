{{--<div id="barra-brasil" style="background:#7F7F7F; height: 20px; padding:0 0 0 10px;display:block;">
    <ul id="menu-barra-temp" style="list-style:none;">
        <li style="display:inline; float:left;padding-right:10px; margin-right:10px; border-right:1px solid #EDEDED">
            <a href="http://brasil.gov.br" style="font-family:sans,sans-serif; text-decoration:none; color:white;">Portal do Governo Brasileiro</a>
        </li>
    </ul>
</div>--}}

<div class="progress">
    <div  id="progress" class="progress-bar bg-success" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="bg-lgt d-print-none topM" id="acessibilidade" >
    <div class="container">
        <div class="row">
            <div class="col-6 celHider">
                <ul id="atalhos" class="top-links">
                    <li><a href="<?php if($rota != '/'){?>{{$rota}}<?php }?>#iniciodoconteudo" accesskey="1">Ir para o Conteúdo [1]</a></li>
                    <li><a href="<?php if($rota != '/'){?>{{$rota}}<?php }?>#iniciodomenu" accesskey="2">Ir para o Menu [2]</a></li>
                    <li><a href="<?php if($rota != '/'){?>{{$rota}}<?php }?>#search" accesskey="3">Ir para a busca [3]</a></li>
                    <li><a href="<?php if($rota != '/'){?>{{$rota}}<?php }?>#iniciodorodape" accesskey="4" class="link-to-menu">Ir para o rodapé [4]</a></li>
                </ul>
            </div>
            <div class="col text-lg-right text-md-right">
                <a href="https://www.ipea.gov.br" target="_blank" alt="Link externo para o IPEA." title="Link externo para o IPEA."><img src="img/logo-ipea.png" class="top-ipea"/></a>
            </div>
            <div class="col text-right top-icons">
                <ul id="botoes" >
                    {{--<li class="bg-pri box-font-size rounded-circle cursor"><a id="aumenta_fonte" >A+</a></li>
                    <li class="bg-sec box-font-size rounded-circle cursor"><a id="reset_fonte">A&nbsp;</a></li>
                    <li class="bg-ter box-font-size rounded-circle cursor"><a id="reduz_fonte">A-</a></li>
                    <li><a class="btn-constrat cursor"><i class="fas fa-adjust fa-2x" style="vertical-align: middle;"></i> </a></li>--}}
                    <li><a href="acessibilidade"><i class="fas fa-universal-access fa-2x" style="vertical-align: middle;"></i> <!--Acessibilidade--></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>


<script>
    (function (){
        'use strict';

        var btnSetItem = document.querySelector('.btn-constrat')

        function setLocalStorage(){

            if(localStorage.getItem('contrast')==='true'){
                document.getElementById('contrast').className = 'contrast';
            }else{
                document.getElementById('contrast').className = 'contrast-off';
            }

            btnSetItem.addEventListener('click', () => {
                if(localStorage.getItem('contrast')==='true'){
                    localStorage.setItem('contrast', false);
                    document.getElementById('contrast').className = 'contrast-off';
                }else{
                    localStorage.setItem('contrast', true);
                    document.getElementById('contrast').className = 'contrast';
                }
            })

        }

        setLocalStorage();


    }());
</script>

<style>
    .box-font-size{
        width: 25px;
        height: 25px;
        color: #FFFFFF;
        cursor: pointer;
        text-align: center;
        padding-top: -1px;
    }
    .box-font-size a{
        display: block;
    }
</style>

{{--CEl--}}
<div class="header-cel text-center d-block d-sm-none" >
    <div class="row">
        <div class="col-2">
            <i class="fas fa-bars fa-2x btn-cel menu-cel-icon"></i>
            <i class="fas fa-times fa-2x btn-cel menu-cel-hide"></i>
        </div>
        <div class="col-8">
            <a href="/">
                <h2 class="logo" style="float: left">INCLUA</h2>
            </a>
        </div>
        <div class="col-xs-2"></div>
    </div>
</div>

<?php

$urlWp =
    env('APP_URL') === "https://inclua.ipea.gov.br" ||
    env('APP_URL') === "http://inclua.ipea.gov.br" ||
    env('APP_URL') === "http://inclua.ipea.gov.br/" ||
    env('APP_URL') === "http://inclua.ipea.gov.br/"
        ? "https://inclua-wp.ipea.gov.br/"
        : "http://inclua-wp-hom.ipea.gov.br/"
?>

<div class="menu-cel hidden-lg hidden-md hidden-sm menu-cel-hide" style="display: none;" id="iniciodomenu">
    <ul>
        <br>
        {{--<li role="presentation"><a href="" accesskey="h" @if($rota=='/') class="corrente" @endif>Início</a></li>
        <li role="presentation"><a href="pre-diagnostico" >Diagnóstico</a></li>
        <li role="presentation"><a href="recursos" >Biblioteca</a></li>
        <li role="presentation"><a href="curadoria" >Curadoria</a></li>
        <li role="presentation"><a href="contribua"  @if($rota=='contribua') class="corrente" @endif>Interaja</a></li>
        <li role="presentation"><a href="sobre" accesskey="q" @if($rota=='sobre') class="corrente" @endif>Sobre</a></li>
        <li role="presentation"><a href="contato" accesskey="c" @if($rota=='quem') class="contato" @endif>Contato</a></li>--}}

        <li role="presentation"><a href={{$urlWp}} accesskey="h" @if($rota=='/') class="corrente" @endif>Início</a></li>
        <li role="presentation"><a href="{{$urlWp}}index.php/ilha-de-possibilidades/" >Ilha de possibilidades</a></li>
        <li role="presentation"><a href="diagnostico" >Diagnóstico</a></li>
        <li role="presentation"><a href="recursos" >Biblioteca</a></li>
        <li role="presentation"><a href="curadoria" >Curadoria</a></li>
        <li role="presentation"><a href="contribua"  @if($rota=='contribua') class="corrente" @endif>Interaja</a></li>
        <li role="presentation"><a href="sobre" accesskey="q" @if($rota=='sobre') class="corrente" @endif>Sobre</a></li>
        <li role="presentation"><a href="contato" accesskey="c" @if($rota=='quem') class="contato" @endif>Contato</a></li>
    </ul>
</div>
<div class="box-menu menu-cel-hide" style="display: none;"></div>
{{--CEl--}}



<header id="iniciodoconteudo"  role="banner">

    <div class="container d-none d-xl-block d-sm-block">
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-light">
                    <a class="navbar-brand" href="#">
                        <h2 class="logo">INCLUA</h2>
                    </a>
                    {{--<div>
                        <div class="btn-group">
                            <ul id="menu-desk">
                                <li role="presentation"><a href="" accesskey="h" @if($rota=='/') class="corrente" @endif>Início</a></li>
                                <li role="presentation"><a href="pre-diagnostico" >Diagnóstico</a></li>
                                <li role="presentation"><a href="recursos" >Biblioteca</a></li>
                                <li role="presentation"><a href="curadoria" >Curadoria</a></li>
                                <li role="presentation"><a href="contribua"  @if($rota=='contribua') class="corrente" @endif>Interaja</a></li>
                                <li role="presentation"><a href="sobre" accesskey="q" @if($rota=='sobre') class="corrente" @endif>Sobre</a></li>
                                <li role="presentation"><a href="contato" accesskey="c" @if($rota=='quem') class="contato" @endif>Contato</a></li>
                            </ul>
                        </div>
                    </div>--}}
                </nav>
            </div>
        </div>
    </div>




<style>
    .btn-login-menu{
        width: 90%;
        border-radius: 2px;
        margin: 0 5px 8px 8px;
    }
</style>
    <style>
        .logo {
            font-family: "Sora", sans-serif;
            font-size: 50px;
            font-weight: 700;
        }

        .navbar-nav2 {
            display: flex;
            flex-direction: row;
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
        }

        .navbar-nav2 li {
            display: inline-block;
            margin-left: 20px;
        }

        .navbar-nav2 li a{
            display: inline-block;
        }

        a.navbar-brand.logo {
            font-size: 50px;
            font-weight: 700;
        }

        .nav-link {
            padding: 0;
            margin-bottom: 20px;
        }

        a.nav-link {
            color: black;
            font-family: "Sora", sans-serif;
            font-size: 16px;
        }

        .nav-link:visited,
        .nav-link:link {
            border-bottom: 2px solid transparent;
        }

        .nav-link:hover,
        .nav-link:active {
            border-bottom: 2px solid #fbcb4a;
            color: #626262;
        }

        .nav-item {
            margin-left: 0px;
            padding: 0 20px 0 0;
        }

        @media  only screen and (max-width : 575px) {
            .navbar-nav2 {
                display: none;
            }
        }
</style>

    <div class="container">
        <ul class="navbar-nav2">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href={{$urlWp}}>Início</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{$urlWp}}index.php/ilha-de-possibilidades/">Ilha de possibilidades</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="diagnostico">Diagnóstico</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="recursos">Biblioteca</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="curadoria">Curadoria</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contribua">Interaja</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sobre">Sobre</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contato">Contato</a>
            </li>

        </ul>
    </div>
    @if($rota=='/')
        <div class="owl-carousel owl-theme">
            @foreach($webdoors as $webdoor)
                <a href="{{$webdoor->link}}" target={{$webdoor->link_target===0 ? '' : '_blank'}}>
                    <picture>
                        <source class="owl-lazy" media="(min-width: 350px)" data-srcset="imagens/webdoors/lg-{{$webdoor->imagem}}">
                        <source class="owl-lazy" media="(min-width: 650px)" data-srcset="imagens/webdoors/md-{{$webdoor->imagem}}">
                        <img class="owl-lazy" data-src="imagens/webdoors/lg-{{$webdoor->imagem}}" alt="">
                    </picture>
                </a>
            @endforeach

        </div>
    @endif




</header>
