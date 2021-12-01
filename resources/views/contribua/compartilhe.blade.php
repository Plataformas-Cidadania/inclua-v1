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
                    <h1>Compartilhe</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>

    <div class="container">
        <div id="compartilhe"></div>
        {{--<div class="row">
            <div class="col-md-7">
                <p>Selecione os temas:</p>


                <p>Selecione as dimensões:</p>
                <div class="row">
                    <div class="col-md-12">
                        <div class="nav-icons">
                            <img src="/img/dimensao1.png" alt="" >
                            <img src="/img/dimensao2.png" alt="" >
                            <img src="/img/dimensao3.png" alt="" class="opacity-5">
                            <img src="/img/dimensao4.png" alt="" class="opacity-5">
                            <img src="/img/dimensao5.png" alt="" class="opacity-5">
                        </div>
                    </div>
                </div>
                <br>

                <p>Indicador:</p>
                <select name="select" class="form-control">
                    <option value="0">Selecione</option>
                    <option value="valor2" selected>Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>
                <br>

                <p>Idioma:</p>
                <ul class="btn-form">
                    <li>Português</li>
                    <li>Inglês</li>
                    <li>Espanhol</li>
                </ul>
                <br>

            </div>
            <div class="col-md-1">&nbsp;</div>
            <div class="col-md-4">
                <p>Tipo de arquivo:</p>
                <ul class="btn-form text-center">
                    <li>PDF</li>
                    <li>DOC</li>
                    <li>IMG</li>
                    <li>Link</li>
                    <li>Vídeo</li>
                </ul>
                <br>

                <div class="text-center">
                    <ul class="btn-form text-center">
                        <li>
                            <i class="far fa-file-pdf fa-3x"></i><br>
                            Selecionar PDF
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-12">
                <br>
                <div class="dorder-container justify-content-end">
                    <button class="btn btn-theme bg-pri float-end" type="button" >Enviar <i class="fas fa-angle-right"></i></button>
                </div>
                <br>
                <br>
            </div>
        </div>--}}
    </div>




@endsection
