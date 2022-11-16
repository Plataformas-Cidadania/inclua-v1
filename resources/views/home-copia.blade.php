@extends('layout')
@section('title', 'Seja bem-vind@')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')


    <link href="/css/home-page.css" />

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
