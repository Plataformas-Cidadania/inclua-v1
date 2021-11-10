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
                    <h1>Relate</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="dorder-container">
                    <div class="dorder-container-mai p-4 ">
                        <p>1 - CONSEQUÊNCIA: Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões negativas para o atendimento a segmentos específicos do público ou territórios atendidos</p>
                        <br>
                        <div class="row">
                            <div class="col-md-3 text-center">
                                <i class="far fa-frown fa-3x"></i><br>
                                <p>Não gostei</p>
                            </div>
                            <div class="col-md-3 text-center">
                                <i class="far fa-meh fa-3x"></i><br>
                                <p>Indiferente</p>
                            </div>
                            <div class="col-md-3 text-center">
                                <i class="far fa-smile fa-3x"></i><br>
                                <p>Gostei</p>
                            </div>
                            <div class="col-md-3 text-center">
                                <i class="far fa-heart fa-3x"></i><br>
                                <p>Amei</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="dorder-container">
                    <div class="dorder-container-mai p-4 ">
                        <p>1 - CONSEQUÊNCIA: Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões negativas para o atendimento a segmentos específicos do público ou territórios atendidos</p>
                        <br>
                        <div class="row">
                            <div class="col-md-3 text-center">
                                <i class="far fa-frown fa-3x"></i><br>
                                <p>Não gostei</p>
                            </div>
                            <div class="col-md-3 text-center">
                                <i class="far fa-meh fa-3x"></i><br>
                                <p>Indiferente</p>
                            </div>
                            <div class="col-md-3 text-center">
                                <i class="far fa-smile fa-3x"></i><br>
                                <p>Gostei</p>
                            </div>
                            <div class="col-md-3 text-center">
                                <i class="far fa-heart fa-3x"></i><br>
                                <p>Amei</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
            <div class="col-md-12">
                <div class="dorder-container justify-content-end">
                    <button class="btn btn-theme bg-pri float-end" type="button" >Enviar <i class="fas fa-angle-right"></i></button>
                </div>
                <br>
                <br>
            </div>
        </div>
    </div>




@endsection
