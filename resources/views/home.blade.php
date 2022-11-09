@extends('layout')
@section('title', 'Seja bem-vind@')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')

    <div class="p-3">&nbsp;</div>
    {{--<div id="home">&nbsp;</div>--}}
    {{--<div class="container">
        <div class="row">
            <div class="col">
                <a href="/pre-diagnostico">
                    <div class="dorder-container">
                        <div class="dorder-container-mai">
                            <div class="btn-icon">
                                <img src="img/icon-diagnostico.png" alt="Diagnóstico" title="Diagnóstico" width="100%">
                            </div>
                             <h2 class="btn-icon-h2">Diagnóstico</h2>
                            <div class="clear-both"></div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col">
                <a href="/recursos">
                    <div class="dorder-container">
                        <div class="dorder-container-mai">
                            <div class="btn-icon">
                                <img src="img/icon-biblioteca.png" alt="Biblioteca" title="Biblioteca" width="100%">
                            </div>
                            <h2 class="btn-icon-h2">Biblioteca</h2>
                            <div class="clear-both"></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>--}}

    {{--<div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h2>Como funciona?</h2>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-3 text-center">
                <img src="img/p1.png" alt="" title="" width="70%">
            </div>
            <div class="col-md-3 text-center">
                <h2 class="number-circle bg-lgt2">1</h2>
            </div>
            <div class="col-md-6">
                <h3>{{$text1->titulo}}</h3>
                <p>{!! $text1->descricao !!}</p>
                <a href="diagnostico">
                    <p>Ir para o diagnóstico <i class="fas fa-angle-right" ></i></p>
                </a>
            </div>
        </div>

        <div class="row">
            <div class="col-md-2">&nbsp;</div>
            <div class="col-md-3  text-center">
                <img src="img/arrow1.png" alt="" title="" width="40%">
                <br><br>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3 text-center">
                <h2 class="number-circle bg-lgt2">2</h2>
            </div>
            <div class="col-md-6">
                <h3>{{$text2->titulo}}</h3>
                <p>{!! $text2->descricao !!}</p>
            </div>
            <div class="col-md-3 text-center">
                <img src="img/p2.png" alt="" title="" width="70%">
            </div>
        </div>

        <div class="row">
            <div class="col-md-2">&nbsp;</div>
            <div class="col-md-3  text-center">
                <img src="img/arrow2.png" alt="" title="" width="40%">
                <br><br>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3 text-center">
                <img src="img/p3.png" alt="" title="" width="70%">
            </div>
            <div class="col-md-2 text-center">
                <h2 class="number-circle bg-lgt2">3</h2>
            </div>
            <div class="col-md-6">
                <h3>{{$text3->titulo}}</h3>
                <p>{!! $text3->descricao !!}</p>
            </div>
        </div>

    </div>--}}



    {{--/////////////////////////////////////--}}
    <style>
        :root {
            --font-global: 22px;
            --font-titulo: 3em;
            --font-global-sm: 16px;
            --font-titulo-sm: 22px;
            --guias: 20px;
            --azul: #ABD2CD;
            --verde: #ACCC83;
            --laranja: #FDCA3D;
            --rosa: #DEAFC8;

        }

        .antes_funciona {
            background-color: #abd2cd;
            grid-area: antes;
        }


        .depois_funciona {
            background-color: #abd2cd;
            grid-area: depois;
            width: 120px;
        }

        .funciona {
            display: grid;
            /* min-height: 100vh; */
            grid-template-columns: 1fr;
            grid-template-rows: 72px;
            grid-template-areas: "antes funciona depois";
        }


        .como_funciona {
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: var(--font-titulo);
            padding: 0 40px;
            background-color: none;
            grid-area: funciona;
            margin-top: 25px;
        }

        .depois_funciona {
            background-color: #abd2cd;
            grid-area: depois;
            width: 120px;
        }

        /* REUSO DE CÓDIGO */
        .saber {
            display: grid;
            /* min-height: 100vh; */
            grid-template-columns: 1fr;
            grid-template-rows: 72px;
            grid-template-areas: "antes funciona depois";
        }

        .antes_saber {
            background-color: #DEAFC8;
            grid-area: antes;
        }

        .saber_mais {
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: var(--font-titulo);
            padding: 0 40px;
            background-color: none;
            grid-area: funciona;
        }

        .depois_saber {
            background-color: #DEAFC8;
            grid-area: depois;
            width: 120px;
        }

        /* REUSO DE CÓDIGO - FIM */

        .inclua-texto {
            font-family: "Sora", sans-serif;
            padding: 40px;
            font-size: var(--font-global);
            grid-area: inclua;

        }

        .inclua-recursos-texto {
            font-family: "Sora", sans-serif;
            padding: 40px;
            font-size: var(--font-global);
            grid-area: inclua-recursos
        }

        .guias {
            font-family: "Sora", sans-serif;
            grid-area: guias;
        }

        .biblioteca {
            font-family: "Sora", sans-serif;
            grid-area: biblioteca;
        }

        .inclua-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 500px;
            grid-template-areas: "inclua guias";
        }

        .inclua-grid2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "guias inclua";
        }

        .inclua-grid3 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas:
                "inclua guias ";
        }

        .inclua-recursos-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "inclua-recursos biblioteca";
        }

        .grafico {
            grid-area: grafico;
            padding-top: 100px;

        }

        .resultado {
            font-family: "Sora", sans-serif;
            padding: 40px;
            font-size: 20px;
            grid-area: resultado;
        }

        .resultado-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 650px;
            grid-template-areas: "result";

        }

        .resultado-flex {
            display: flex;
            flex-direction: row;
            line-height: 75px;
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: var(--font-titulo);
        }

        .resultado>p.linha {
            border-color: #ACCC83;
            border-bottom-style: solid;
            padding-top: 25px;
            width: 25%;
        }

        .resultado-flex>div:nth-child(1) {
            background-color: #ACCC83;
            padding: 8px 35px;
            margin-right: 50px;
            margin-bottom: 50px;
            text-align: center;
            line-height: 75px;
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: var(--font-titulo)
        }

        .recurso-grid {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "recursos";
            margin-top: 100px;
        }

        .recurso-container {
            padding: 45px;
            display: flex;
            flex-wrap: nowrap;
        }

        .recurso-container>div {
            padding: 8px 35px;
            margin: 10px;
            text-align: center;
            line-height: 75px;
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: var(--font-titulo);
            grid-area: recursos;
        }

        .recurso-container>div:nth-child(1) {
            background-color: #abd2cd;
        }


        /* Recurso Fim */

        .diagnostico-grid {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "diagnostico";
        }

        .diagnostico-grid {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "diagnostico";
        }

        .diagnostico-container {
            padding: 45px;
            display: flex;
            flex-wrap: nowrap;
        }

        .diagnostico-container>div {
            padding: 8px 35px;
            margin: 10px;
            text-align: center;
            line-height: 75px;
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: var(--font-titulo);
            grid-area: diagnostico;
        }



        .cor_azul {
            background-color: var(--azul);

        }

        .cor_verde {
            background-color: var(--verde);

        }

        .guias-container {
            display: flex;
            flex-direction: column;
        }

        .biblioteca-container {
            display: flex;
            flex-direction: column;
        }

        .guias-container>div {
            background-color: #abd2cd;
            width: auto;
            padding: 30px;
            margin: 30px;
            text-align: center;
            line-height: 75px;
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: 40px;
            transition: 0.3s;

        }

        .biblioteca-container>div {
            background-color: #abd2cd;
            width: auto;
            padding: 30px;
            margin: 30px;
            text-align: center;
            line-height: 75px;
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: 40px;
            transition: 0.3s;

        }

        .guias-container>div:hover {
            text-decoration: none;
            background-color: #ffffff;
            border-color: #000000;
            border-style: solid;
            border-width: thin;
        }

        .biblioteca-container>div:hover {
            text-decoration: none;
            background-color: #ffffff;
            border-color: #000000;
            border-style: solid;
            border-width: thin;
        }

        .guias-container>div>a {
            color: #000000;
            text-decoration: none;

        }

        .biblioteca-container>div>a {
            color: #000000;
            text-decoration: none;
        }

        .inclua-texto>p.linha {
            border-color: #abd2cd;
            border-bottom-style: solid;
            padding-top: 25px;
            width: 25%;

        }

        .inclua-texto> p {
            line-height: 30px;
        }

        .inclua-recursos-texto>p.linha {
            border-color: #abd2cd;
            border-bottom-style: solid;
            padding-top: 25px;
            width: 25%;
        }

        .inclua-recursos-texto > p  {
            line-height: 30px;
        }

        /* 3 - PLATAFORMA*/
        .plataforma-grid {
            /* padding: 100px 50px 0 0; */
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            justify-items: center;
            align-items: center;
            grid-template-areas: "plataforma video";
        }

        .plataforma-container {
            padding: 50px 50px 50px 0px;
            margin-left: 0px;
            grid-area: "plataforma video";
        }

        .plataforma-container>h1 {
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: 40px;
            text-align: right;
        }

        .plataforma-container>h1.linha-2 {
            border-color: #FECB3F;
            border-bottom-style: solid;
            padding-top: 25px;
            width: 100%;
        }

        /* 3 - MANUAL*/
        .manual-grid {
            /* padding: 100px 50px 0 0; */
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            justify-items: center;
            align-items: center;
            grid-template-areas: "plataforma video";
        }

        .manual-container {
            padding: 50px;
            margin-left: 0px;
            padding-left: 0px;
            grid-area: "plataforma video";
        }

        .manual-container>h1 {
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: 40px;
            padding-top: 25px;
            width: 100%;
            text-align: right;
        }

        .manual-container>h1.linha-2 {
            border-color: #FECB3F;
            border-bottom-style: solid;
            padding-top: 25px;
            width: 100%;
        }

        /* 3 - POLICY BRIEF*/
        .brief-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            justify-items: center;
            align-items: center;
            grid-template-areas: "plataforma video";
        }

        .brief-container {
            /* padding: 100px 50px 0 0; */
            margin-left: 0px;
            padding-left: 0px;
            grid-area: "plataforma video";
        }

        .brief-container>h1 {
            text-align: right;
            font-family: "Sora", sans-serif;
            font-weight: 600;
            font-size: 40px;
            /* padding-right: 50px */
        }

        .brief-container>h1.linha-2 {
            border-color: #FECB3F;
            border-bottom-style: solid;
            padding-top: 25px;
            width: 100%;
        }

        /*VERSÃO MOBILE*/

        /* Extra small devices (phones, 768px and down) */
        @media (max-width: 768px) {
            body {
                overflow-x: hidden;
            }

            .antes_funciona {
                background-color: #abd2cd;
                grid-area: antes;
            }

            .antes_funciona_quer {
                background-color: var(--rosa);
                grid-area: antes;
            }

            .guias {
                font-family: "Sora", sans-serif;
                height: 500px;
                grid-area: guias;
            }

            .inclua-grid {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 480px;
                grid-template-areas:
                    "inclua "
                    "guias ";
            }

            .inclua-grid2 {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 480px;
                grid-template-areas:
                    "inclua "
                    "guias ";
            }

            .inclua-grid3 {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 480px;
                grid-template-areas:
                    "inclua "
                    "guias ";
            }

            .resultados-container {
                padding: 45px;
                display: flex;
                flex-wrap: nowrap;
                padding-top: 100px;
            }

            .como_funciona {
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: var(--font-titulo-sm);
                padding: 0 40px;
                background-color: none;
                grid-area: funciona;
                margin-top: 10px;
            }

            .inclua-recursos-grid {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 450px;
                grid-template-areas: "inclua-recursos inclua-recursos"
                    "biblioteca biblioteca";
            }

            .saber_mais {
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 30px;
                padding: 0 20px;
                background-color: none;
                grid-area: funciona;
                /* width: 400px; */
            }

            .manual-container>h1 {
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 25px;
                padding-top: 25px;
                /* width: 92%; */
                text-align: center;
            }

            .guias2-container>div {
                /* background-color: #abd2cd; */
                width: auto;
                /* padding: 30px; */
                /* margin: 30px; */
                text-align: center;
                line-height: 75px;
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 40px;
                transition: 0.3s;
            }

            .diagnostico-container {
                padding: 45px;
                display: flex;
                flex-wrap: nowrap;
                padding: 0;
                /* width: 400px; */
            }

            .diagnostico-container>div {
                padding: 8px 35px;
                text-align: center;
                line-height: 75px;
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 32px;
                grid-area: diagnostico;
                margin-left: 0%;
            }

            .diagnostico-grid {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                grid-template-areas: "diagnostico";
            }

            .inclua-texto {
                font-family: "Sora", sans-serif;
                padding: 40px;
                font-size: var(--font-global-sm);
                grid-area: inclua;

            }

            .inclua-recursos-texto {
                font-family: "Sora", sans-serif;
                padding: 40px;
                font-size: var(--font-global-sm);
                grid-area: inclua-recursos
            }


            .biblioteca-container>div {
                background-color: #abd2cd;
                text-align: center;
                line-height: 75px;
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 40px;
                transition: 0.3s;
            }

            .plataforma-grid {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: center;
                align-items: center;
                grid-template-areas: "plataforma";
            }

            .plataforma-container {
                padding: 0px;
                margin-left: 0px;
                padding-left: 0px;
                grid-area: "plataforma";

            }

            .plataforma-container>h1 {
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 22px;
                text-align: center;
                padding: 25px 10px 0px 10px;
            }

            .funciona {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 40px;
                grid-template-areas: "antes funciona";
            }

            .recurso-container {
                padding: 0;
                display: flex;
                flex-wrap: nowrap;
                height: 90px;
            }

            .recurso-container>div {
                padding: 8px 35px;
                /* margin: 10px; */
                text-align: center;
                line-height: 75px;
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 32px;
                grid-area: recursos;
            }

            .recurso-container>div:nth-child(1) {
                background-color: var(--laranja);
                margin: 0;
            }

            .depois_saber {
                background-color: #DEAFC8;
                grid-area: depois;
            }

            .manual-grid {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                /* justify-items: center;
                align-items: center; */
                grid-template-areas: "plataforma";
            }

            .brief-grid {
                display: grid;
                padding: 0;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                justify-items: right;
                grid-template-areas: "plataforma";
            }

            .brief-container {
                padding: 0px;
                margin-left: 0px;
                grid-area: "plataforma video";
            }

            .brief-container>h1 {
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 25px;
                padding-top: 35px;
                text-align: center;
            }

            .guias-container>div>a {
                color: #000000;
                text-decoration: none;
                font-size: var(--guias);
            }


            .saber_mais {
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 21px;
                padding: 20px;
                background-color: none;
                grid-area: funciona;
            }

            /* .text-end {
                text-align: center !important;
                padding: 0;
            } */

            .biblioteca {
                font-family: "Sora", sans-serif;
                grid-area: biblioteca;
                height: 300px;
            }

            .biblioteca-container>div {
                background-color: var(--laranja);
                width: auto;
                padding: 30px;
                margin: 30px;
                text-align: center;
                line-height: 75px;
                font-family: "Sora", sans-serif;
                font-weight: 600;
                font-size: 27px;
                transition: 0.3s;

            }

            .depois_funciona {
                background-color: #abd2cd;
                grid-area: depois;
                width: 0px;
            }

            .biblioteca-container>div>a {
                color: #000000;
                text-decoration: none;
                font-size: var(--guias);
            }

            .grafico {
                grid-area: grafico;
                padding-top: 10px;

            }

            .manual-container {
                padding: 0px;
                margin-left: 0px;
                padding-left: 0px;
                grid-area: "plataforma video";
            }
        }
    </style>

    <br><br>
    <section class="funciona">
        <section class="antes_funciona"></section>
        <section class="como_funciona">COMO FUNCIONA?</section>
        <section class="depois_funciona"></section>
    </section>
    <!--Diagnostico-->

    <section class="diagnostico-grid">
        <section class="diagnostico-container">
            <div class="cor_azul">1</div>
            <div>{{$text1->titulo}}</div>
        </section>
        </div>
        <section class="inclua-grid3">
            <section class="inclua-texto">
                <p>{!! $text1->descricao !!}</p>
                <!--Linha azul-->
                <p class="linha"></p>

            </section>
            <section class="guias">
                <div class="guias-container">
                    <div><a href="/guias" target="_self">GUIAS</a></div>
                    <div><a href="/diagnostico" target="_self">DIAGNÓSTICO ONLINE</a></div>
                </div>
            </section>
        </section>
    </section>
    <!--Diagnostico Fim-->

    <!--Reuso de código-->
    <!--Diagnostico-2-->

    <section class="resultados-grid">
        <section class="diagnostico-container">
            <div class="cor_verde">2</div>
            <div>{{$text2->titulo}}</div>
        </section>
        </div>
        <section class="inclua-grid2">
            <section class="inclua-texto">
                <p>{!! $text2->descricao !!}</p>

                <!--Linha azul-->
                <p class="linha"></p>
                </div>
            </section>
            <section class="guias">
                <div class="guias2-container">
                    <div class="grafico"><img src="img/grafico.png" class="img-fluid" alt="Gráfico ilustrativo de resultados">
                    </div>
                </div>
            </section>
        </section>
    </section>
    <!--Diagnostico-2 Fim-->


    <!--Reuso de código-->
    <section class="recurso-grid">
        <section class="recurso-container">
            <div>3</div>
            <div>{{$text3->titulo}}</div>
        </section>
        </div>
        <section class="inclua-recursos-grid">
            <section class="inclua-recursos-texto">
                <p>{!! $text3->descricao !!}</p>
                <!--Linha azul-->
                <p class="linha"></p>

            </section>
            <section class="biblioteca">
                <div class="biblioteca-container">
                    <div><a href="/recursos" target="_self">BIBLIOTECA</a></div>
                    <div><a href="/curadoria" target="_self">CURADORIA</a></div>
                </div>
            </section>
        </section>
    </section>

    <!--Reuso de código -->
    <section class="funciona">
        <section class="antes_funciona_quer"></section>
        <section class="como_funciona">QUER SABER MAIS?</section>
        <section class="depois_funciona"></section>
    </section>
    <!--Reuso de código - Fim-->


    @foreach($linksHome as $item)
    <section class="plataforma-grid">
        <section class="container-fluid plataforma-container">
            <h1>{{$item->titulo}}</h1>
            <!--Linha laranja-->
            <h1 class="linha-2"></h1>
        </section>
        <section class="video-container">
            <div class="grafico">
                {{--<img src="img/video.png" class="img-fluid"
                                      alt="Vídeo ilustrativo de material instrucional">--}}
                <a
                    href="{{$item->url}}"
                    target="_blank">
                <img src="/imagens/modulos/md-{{$item->imagem}}" alt="{{$item->titulo}}" title="{{$item->titulo}}" width="100%" class="img-fluid">
                </a>
            </div>
        </section>
    </section>
    @endforeach

    {{--
    <!--PLATAFORMA-->
    <section class="plataforma-grid">
        <section class="container-fluid plataforma-container">
            <h1>COMO USAR A PLATAFORMA</h1>
            <!--Linha laranja-->
            <h1 class="linha-2"></h1>
        </section>

        <section class="video-container">
            <div class="grafico"><img src="img/video.png" class="img-fluid"
                                      alt="Vídeo ilustrativo de material instrucional">
            </div>
        </section>
    </section>
    {{--<!--MANUAL-->
    <section class="manual-grid">
        <section class="container-fluid manual-container">
            <h1>MANUAL</h1>
            <!--Linha laranja-->
            <h1 class="linha-2"></h1>
        </section>

        <section class="manual-container">
            <div class="grafico "><a href="/manual" target="_blank"><img
                        src="img/MANUAL_DE_ACESSO.png" class="img-fluid" alt="Gráfico ilustrativo de resultados"></a>
            </div>
        </section>
    </section>
    <!--POLICY BRIEF-->
    <section class="brief-grid">
        <section class="container-fluid  brief-container">
            <h1>POLICY BRIEF</h1>
            <!--Linha laranja-->
            <h1 class="linha-2"></h1>
        </section>

        <section class="brief-container">
            <div class="grafico "><a
                    href="https://repositorio.ipea.gov.br/bitstream/11058/11244/1/EmQuestao_n14_Inclua.pdf"
                    target="_blank"><img src="img/POLICY_BRIEF.png" class="img-fluid"
                                         alt="Gráfico ilustrativo de resultados">
            </div></a>
        </section>
    </section>--}}
    {{--/////////////////////////////////////--}}


    <div class="p-3">&nbsp;</div>

    <div class="bg-lgt">
        <div>
            <div class="row">
                <div class="col-md-2  bg-lines">
                    {{--<img src="img/lines.png" alt="" width="100%">--}}
                </div>
                <div class="col-md-8">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="pt-5 pb-5">
                                    <br><br>
                                    <h2>{{$text4->titulo}} </h2>
                                    <h3>{!! $text4->descricao !!}</h3>
                                    <br><br>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-2">
                    &nbsp;
                </div>

            </div>
        </div>
    </div>

    <?php /*?><div class="bg-lgt bg-lines">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="owl-carousel owl-theme">
                        @foreach($depoimentos as $depoimento)
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="img/d{{$depoimento->icone}}.png" alt="" title="" width="100%"  style="padding: 5rem">
                                </div>
                                <div class="col-md-8">
                                    <div style="padding: 8rem">
                                        <h2>“{{$depoimento->descricao}}” </h2>
                                        <h3>{{$depoimento->name}}</h3>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>

            </div>
        </div>
    </div>
    <?php */?>




    {{--<div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h2>PARCEIROS E PARCEIRAS</h2>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>--}}

    <!--Reuso de código -->
    <br><br>
    <section class="funciona">
        <section class="antes_funciona_quer"></section>
        <section class="como_funciona">PARCEIROS E PARCEIRAS</section>
        <section class="depois_funciona"></section>
    </section>
    <br><br>
    <!--Reuso de código - Fim-->


    <div class="container">
        <div class="row">
            @foreach($partners as $partner)
                <div class="col-xs-6 col-sm-4 col-md-3 item-logo text-center">
                    <a href={{$partner->url}} target="_blank">
                        @if(empty($partner->imagem))
                        <object data="img/sem-imagem.png" type="image/png" class="img-responsive">
                        @else
                        <object data="imagens/parceiros/xs-{{$partner->imagem}}" type="image/png" class="img-responsive">
                        @endif
                            <picture>
                                <source data-src="/imagens/parceiros/md-{{$partner->imagem}}" media="(max-width: 468px)">
                                <source data-src="/imagens/parceiros/md-{{$partner->imagem}}" media="(max-width: 768px)">
                                <source data-src="/imagens/parceiros/md-{{$partner->imagem}}" class="img-responsive">
                                <img src="/img/pre-img.gif" data-src="/imagens/parceiros/md-{{$partner->imagem}}" alt="Imagem sobre {{$partner->title}}" title="Imagem sobre {{$partner->title}}" width="100%" class="cliente-list-img-hover lazyload">
                            </picture>
                        </object>
                        <br>
                        <br>
                        <p>{{$partner->titulo}}</p>
                    </a>
                </div>
            @endforeach
        </div>
    </div>
    <br><br>

<script>

    $(document).ready(function() {
        var owl = $('.customMn');
        owl.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay:true,
            dots: true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            autoplayTimeout:15000,
            responsive: {
                0: {
                    items: 5
                },
                600: {
                    items: 8
                },
                1000: {
                    items: 4
                }
            }
        });
    })

</script>

@endsection
