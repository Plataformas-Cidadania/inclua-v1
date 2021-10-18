@extends('layout')
@section('title', $page->titulo)
@section('keywords', keywords($page->titulo." ".$page->descricao, 2))
@section('description', description($page->descricao))
@section('image', "/imagens/modulos/lg-".$page->imagem)
@section('content')


    <div class="bg-lgt">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">&nbsp;</div>
                <div class="col-md-7">
                    <div>
                        <br><br>
                        <h1>Diagnóstico</h1>
                        <p>Instruções: essa atividade dura aproximadamente de XX a XX minutos e deve ser realizada com bastante atenção de forma a retratar com a maior precisão possível a situação da oferta pública na qual você está envolvido. Caso prefira, você pode baixar o questionário, ler e reunir as informações necessárias para então voltar aqui e responder às perguntas.</p>
                        <br>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="dorder-container cursor">
                                    <div class="bg-lgt2 p-3">
                                        <h2 style="margin-top: 15px;">Completo</h2>
                                        <i class="fas fa-angle-right fa-3x float-end" style="margin-top: -52px;"></i>
                                    </div>
                                </div>
                                <br>
                            </div>
                            <div class="col-md-6">
                                <div class="dorder-container cursor">
                                    <div class="bg-lgt2 p-3">
                                        <h2 style="margin-top: 15px;">Parcial</h2>
                                        <i class="fas fa-angle-right fa-3x float-end" style="margin-top: -52px;"></i>
                                    </div>
                                </div>
                            </div>
                            <br>
                        </div>
                        <br>

                    </div>
                </div>
                <div class="col-md-3">
                    <img src="/img/bg-top.png" alt="" width="80%" class="float-end">
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="text-center nav-icons">
                    <img src="/img/dimensao1.png" alt="" >
                    <img src="/img/dimensao2.png" alt="" >
                    <img src="/img/dimensao3.png" alt="" class="opacity-5">
                    <img src="/img/dimensao4.png" alt="" class="opacity-5">
                    <img src="/img/dimensao5.png" alt="" class="opacity-5">
                    <hr/>
                </div>
            </div>
        </div>
    </div>

    <div class="dorder-container" style="margin-left: 10px;">
        <div class="bg-pri">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 text-center">
                        <img src="/img/dimensao1-g.png" alt=""  >
                        <h2>DIMENSÃO 1</h2>
                    </div>
                    <div class="col-md-9">
                        <h2 class="mt-5">Participação social e representação institucional</h2>
                        <p class="mb-5">Chama atenção para o conjunto de relações institucionais envolvidas no processo de implementação, envolvendo tanto articulações entre órgãos governamentais e organizações do setor privado e da sociedade civil. O foco se volta para identificação das implicações de falhas de articulação e conflitos interinstitucionais sobre os segmentos específicos do público atendido e para a existência e operação de compromissos institucionais e instrumentos de gestão pró-equidade. É composta por dois indicadores.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>


    <br>
    <div class="container">
        <div class="row mt-3">
            <div class="col-6 col-6">
                <h2>INDICADOR 2.1</h2>
            </div>
            <div class="col-6 col-6 d-grid gap-2 d-md-flex justify-content-end">
                <div class="nav-circle">
                    <i class="fas fa-circle tx-pri"></i>
                    <i class="far fa-circle tx-pri"></i>
                </div>
            </div>
            <div class="col-md-12"> <hr style="margin-top: 1px;"/></div>
            <div class="col-md-12 mt-3">
                <h3>DIVISÃO DO TRABALHO, COORDENAÇÃO E CONFLITO INTERINSTITUCIONAL</h3>
                <p>Identifica e avalia o grau de maturidade da articulação institucional, atenção a conflitos e disputas interorganizacionais, falhas de conexão, lacunas derivadas da divisão do trabalho entre as organizações e esforços de reorganização do arranjo institucional.</p>
                <br/>
            </div>

            <div class="col-md-12">
                <div class="box-items bg-lgt">
                    <p class="mb-3"><strong>P1.1a</strong> Caso o processo de implementação dessa oferta pública envolva mais de uma organização (ou múltiplas unidades de uma organização) responsável por etapas diferentes da produção do bem ou serviço, existem espaços e mecanismos para promover a coordenação e a articulação das ações entre essas organizações? [Por exemplo: reuniões periódicas, comitês gestores, instâncias de mediação, etc.] Marque uma opção abaixo.</p>
                    <div class="form-check float-start">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Sim
                        </label>
                    </div>
                    <div class="form-check  float-end">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Não
                        </label>
                    </div>
                    <div class="clear-both"></div>
                </div>
                <br/>
            </div>

            <div class="col-md-12">
                <div class="box-items bg-lgt">
                    <p><strong>P2.1a</strong> Caso o processo de implementação dessa oferta pública envolva mais de uma organização (ou múltiplas unidades de uma organização) responsável por etapas diferentes da produção do bem ou serviço, existem espaços e mecanismos para promover a coordenação e a articulação das ações entre essas organizações? [Por exemplo: reuniões periódicas, comitês gestores, instâncias de mediação, etc.] Marque uma opção abaixo.</p>
                    <div>
                        <br>
                        <div class="range-merker">
                            <div class="range-merker-box"><div class="range-merker-box-item bg-pri">1</div></div>
                            <div class="range-merker-box"><div class="range-merker-box-item bg-pri">2</div></div>
                            <div class="range-merker-box"><div class="range-merker-box-item bg-pri">3</div></div>
                            <div class="range-merker-box"><div class="range-merker-box-item">4</div></div>
                            <div class="range-merker-box"><div class="range-merker-box-item">5</div></div>
                            <div class="range-merker-box"><div class="range-merker-box-item">6</div></div>
                            <div class="range-merker-box"><div class="range-merker-box-item">7</div></div>
                            <div class="range-merker-box"><div class="range-merker-box-item">8</div></div>
                            <div class="range-merker-box"><div class="range-merker-box-item">9</div></div>
                            <div class="range-merker-box"><div class="range-merker-box-item">10</div></div>
                        </div>
                        {{--<label for="customRange1" class="form-label">Bom</label>--}}
                        <br/>
                        <input type="range" class="form-range range" id="customRange1" min="1" max="10" value="3" >
                    </div>
                </div>
                <br/>
            </div>

            <div class="col-md-12">
                <div class="row mt-4 mb-4">
                    <div class="col-6 col-6  d-grid gap-2 d-md-flex justify-content-start">
                        <div class="nav-circle mt-2 ">
                            <i class="fas fa-circle tx-pri"></i>
                            <i class="far fa-circle tx-pri"></i>
                        </div>
                    </div>
                    <div class="col-6 col-6">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <div class="dorder-container">
                                <button class="btn btn-theme bg-pri" type="button">indicador 2.2 <i class="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

