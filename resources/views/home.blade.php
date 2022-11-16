@extends('layout')
@section('title', 'Seja bem-vind@')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')


    <link href="/css/home-page.css" rel="stylesheet" />

    <div class="p-3">&nbsp;</div>


    {{--/////////////////////////////////////--}}
    <section class="funciona">
        <section class="antes_funciona"></section>
        <section class="como_funciona">COMO FUNCIONA?</section>
        <section class="depois_funciona"></section>
    </section>
    <!--Diagnostico-->

    <section class="diagnostico-grid">
        <section class="diagnostico-container">
            <div class="cor_rosa">1</div>
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
            </section></a>
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
                <div class="guias2-container d-none d-sm-block d-sm-none d-md-block
                ">
                    <div class="grafico"><img src="/img/grafico.png" class="img-fluid"
                                              alt="Gráfico ilustrativo de resultados">
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
        <section class="antes_funciona"></section>
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
                    <a
                        href="{{$item->url}}"
                        target="_blank">
                        <img src="/imagens/modulos/md-{{$item->imagem}}" alt="{{$item->titulo}}" title="{{$item->titulo}}" width="100%" class="img-fluid">
                    </a>
                </div>
            </section>
        </section>
    @endforeach
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


    <!--Reuso de código -->
    <br><br>
    <section class="funciona">
        <section class="antes_funciona"></section>
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
