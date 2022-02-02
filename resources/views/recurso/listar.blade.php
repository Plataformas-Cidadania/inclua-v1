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
                    <h1>Biblioteca de recursos</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>




    <div class="container">
        <div class="box-list mt-4 mb-4">
            <div class="row">

                <div id="recurso">&nbsp;</div>
                {{----}}
                {{--<div class="col-md-4 ">
                    <div class="dorder-container">

                        <div class="bg-lgt">
                            <div class="bg-lgt2 text-center box-list-cod">
                                <h6 class="mt-4">Código</h6>
                                <h2>3</h2>
                            </div>
                            <div class="p-2 box-list-title">
                                <p class="mt-2">Padrões globais para serviços de saúde de qualidade para adolescentes </p>
                            </div>
                            <div class="clear-both"></div>
                        </div>

                        <br>

                        <div class="row">
                            <div class="col-4"><img src="img/lines.png" alt="" width="90%"></div>
                            <div class="col-4 text-center">
                                <div class="bg-lgt2 box-list-i">
                                    <i class="far fa-file-pdf fa-3x"></i>
                                </div>

                            </div>
                            <div class="col-4">&nbsp;</div>
                        </div>
                        <div class="row">
                            <div class="col-12 box-list-p">
                                <br>
                                <p><strong>Esfera:</strong> <span>Brasil</span></p>
                                <p><strong>Idioma:</strong> <span>Português</span></p>
                                <p><strong>Tipo:</strong> <span>Manual and desigualdade</span></p>
                                <p><strong>Autoria:</strong> <span>World Health Organization</span></p>
                                <br>
                            </div>
                            <div class="col-9">
                                <div class="dorder-container">
                                    <button class="btn btn-theme bg-pri" type="button">Acessar <i class="fas fa-angle-right"></i></button>
                                </div>
                            </div>
                            <div class="col-3 d-flex justify-content-end">
                                <i class="far fa-copy fa-2x "></i>
                            </div>
                        </div>
                    </div>
                </div>--}}
                {{----}}

            </div>
        </div>
    </div>



@endsection
