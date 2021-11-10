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
                <h3>Diagnóstico</h3>
                <p>O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.</p>
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
                <h3>Diagnóstico</h3>
                <p>O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.</p>
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
                <h3>Diagnóstico</h3>
                <p>O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.</p>
            </div>
        </div>
    </div>

    <div class="p-3">&nbsp;</div>
    <div class="bg-lgt bg-lines">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src="img/p4.png" alt="" title="" width="100%"  style="padding: 5rem">
                </div>
                <div class="col-md-8">
                    <div style="padding: 8rem">
                        <h2>“Amei! Me ajudou muito! Me fez enxergar questões que não via antes!” </h2>
                        <h3>Maria lima</h3>
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
                <div class="col-xs-6 col-sm-4 col-md-2 item-logo">
                    <picture>
                        <source data-src="/imagens/parceiros/md-{{$partner->imagem}}" media="(max-width: 468px)">
                        <source data-src="/imagens/parceiros/md-{{$partner->imagem}}" media="(max-width: 768px)">
                        <source data-src="/imagens/parceiros/md-{{$partner->imagem}}" class="img-responsive">
                        <img src="/img/pre-img.gif" data-src="/imagens/parceiros/md-{{$partner->imagem}}" alt="Imagem sobre {{$partner->title}}" title="Imagem sobre {{$partner->title}}" width="100%" class="cliente-list-img-hover lazyload">
                    </picture>
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
