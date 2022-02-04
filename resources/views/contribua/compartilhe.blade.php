@extends('layout')
@section('title', $page->titulo)
@section('keywords', keywords($page->titulo." ".$page->descricao, 2))
@section('description', description($page->descricao))
@section('image', "/imagens/modulos/lg-".$page->imagem)
@section('content')

    <script>
        id_user = {{auth()->user()->id}};
    </script>


    <div class="bg-lgt">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">&nbsp;</div>
                <div class="col-md-7">
                    <div>
                        <br><br>
                        <h1>{{$page->titulo}}</h1>
                        <p>{!! $page->descricao !!}</p>
                        <br>

                    </div>
                </div>
                <div class="col-md-3">
                    <img src="/img/bg-top.png" alt="" width="40%" class="float-end">
                </div>
            </div>
        </div>
    </div>
    <br/>

    {{--<div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h1>Compartilhe</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-2">&nbsp;</div>
    </div>--}}

    <div class="container">

        @include('contribua.user-login')

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
