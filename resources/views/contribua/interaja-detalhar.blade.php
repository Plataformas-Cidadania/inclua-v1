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
            <div class="col-md-12">
                <br><br>
                <div class="bg-lgt p-2">
                    <div class="row ">
                        <div class="col-md-1">
                            <div class="text-center">
                                <br>
                                <p><i class="far fa-thumbs-up fa-2x"></i><br>255</p>
                                <hr>
                                <p><i class="far fa-thumbs-down fa-2x"></i><br>2</p>
                            </div>
                        </div>
                        <div class="col-md-11">
                            <div class="dorder-container" style="min-height: 180px">
                                <div class="m-3">
                                    <h2>Indicador 1.1 - DIVISÃO DO TRABALHO, COORDENAÇÃO E CONFLITO INTERINSTITUCIONAL</h2>
                                    <p>CONSEQUÊNCIA: Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões negativas para o atendimento a segmentos específicos do público ou territórios atendidos</p>
                                    <h5 class="float-end">Perguntou 2 anos, 9 meses atrás - Visto 2500 vezes</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <br>
                    <p>5 resposta</p>


                    <div class="row">
                        <div class="col-md-1">
                            <div class="text-center">
                                <br>
                                <div class="circle-user bg-lgt2">PR</div>
                            </div>
                        </div>
                        <div class="col-md-11">
                            <div class="m-3">
                                <p><strong>Paulo Ricardo</strong> respondeu a  2 anos, 9 meses atrás</p>
                                <p>CONSEQUÊNCIA: Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões negativas para o atendimento a segmentos específicos do público ou territórios atendidos</p>
                            </div>
                        </div>
                        <div class="col-md-12"><hr></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1">
                            <div class="text-center">
                                <br>
                                <div class="circle-user bg-lgt2">PR</div>
                            </div>
                        </div>
                        <div class="col-md-11">
                            <div class="m-3">
                                <p><strong>Paulo Ricardo</strong> respondeu a  2 anos, 9 meses atrás</p>
                                <p>CONSEQUÊNCIA: Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões negativas para o atendimento a segmentos específicos do público ou territórios atendidos</p>
                            </div>
                        </div>
                        <div class="col-md-12"><hr></div>
                    </div>

                </div>



            </div>

            <div class="col-md-12"><br><br></div>
        </div>
    </div>




@endsection
