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
                    <h1>Interaja</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6">21.875.983 perguntas</div>
            <div class="col-md-6">
                <div class="dorder-container justify-content-end">
                    <button class="btn btn-theme bg-pri float-end" type="button" >Faça uma pergunta <i class="fas fa-angle-right"></i></button>
                </div>
            </div>
            <div class="col-md-12">
                <br><br>
                <div class="row">
                    <div class="col-md-1">
                        <div class="text-center">
                            <p>0<br>votos</p>
                            <hr>
                            <p>0<br>resp.</p>
                            <hr>
                            <p>0<br>views</p>
                            <hr>
                        </div>
                    </div>
                    <div class="col-md-11">
                        <div class="dorder-container" style="min-height: 225px">
                            <div class="m-3">
                                <a href="interaja-detalhar">
                                <h2>Indicador 1.1 - DIVISÃO DO TRABALHO, COORDENAÇÃO E CONFLITO INTERINSTITUCIONAL</h2>
                                <p>CONSEQUÊNCIA: Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões negativas para o atendimento a segmentos específicos do público ou territórios atendidos</p>
                                <h5 class="float-end">criado 46 segundos atrás</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <hr>
                    </div>
                </div>

            </div>

            <div class="col-md-12"><br><br></div>
        </div>
    </div>




@endsection
