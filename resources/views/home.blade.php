@extends('layout')
@section('title', 'Seja bem-vind@')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')

    <div class="p-3">&nbsp;</div>
    <div id="home">&nbsp;</div>
    {{--<div class="container">
        <div id="home">&nbsp;</div>
        <div class="row">
            <div class="col">
                <div class="dorder-container">
                    <div class="dorder-container-mai">
                        <div class="btn-icon">
                            <img src="img/icon-diagnostico.png" alt="Diagnóstico" title="Diagnóstico" width="100%">
                        </div>
                         <h2 class="btn-icon-h2">Diagnóstico</h2>
                        <div class="clear-both"></div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="dorder-container">
                    <div class="dorder-container-mai">
                        <div class="btn-icon">
                            <img src="img/icon-biblioteca.png" alt="Biblioteca" title="Biblioteca" width="100%">
                        </div>
                        <h2 class="btn-icon-h2">Biblioteca</h2>
                        <div class="clear-both"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>--}}

    <div class="container-fluid">
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
    </div>

    <div class="p-3">&nbsp;</div>
    <div class="bg-lgt bg-lines">
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




    <div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h2>Parceiros</h2>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>
    <div class="container">
        <div class="row">
            @foreach($partners as $partner)
                <div class="col-xs-6 col-sm-4 col-md-3 item-logo text-center">
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
