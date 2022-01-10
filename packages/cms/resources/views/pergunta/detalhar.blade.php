@extends('cms::layouts.app')

@section('content')
    {!! Html::script(config('app.url').'assets-cms/js/controllers/alterarPerguntaCtrl.js') !!}
    <div ng-controller="alterarPerguntaCtrl">
        <div class="box-padrao">
            <h1><a href="javascript:history.back();"><i class="fa fa-arrow-circle-left"></i></a>&nbsp;&nbsp;Pergunta</h1>
            <?php //print_r($pergunta);?>
            <div ng-init="carregaImagem('{{$pergunta->imagem}}', '{{$pergunta->arquivo}}'); listarDimensoes(); id_pergunta={{$pergunta->id_pergunta}}">
                <span class="texto-obrigatorio">* campos obrigatórios</span><br><br>
                {!! Form::model($pergunta, ['name' =>'form']) !!}
                <div class="container-thumb" style="display: none;">
                    <div class="box-thumb" name="fileDrop" ngf-drag-over-class="'box-thumb-hover'" ngf-drop ngf-select ng-model="picFile"
                         ng-show="!picFile && !imagemBD" accept="image/*" ngf-max-size="2MB">Solte uma imagem aqui!</div>
                    <img ng-show="picFile" ngf-thumbnail="picFile" class="thumb">
                    <img ng-show="imagemBD" class="thumb" ng-src="<% imagemBD %>">
                </div>
                {{--<br>--}}
                <span class="btn btn-primary btn-file" ng-show="!picFile && !imagemBD" style="display: none;">
                    Escolher imagem <input  type="file" ngf-select ng-model="picFile" name="file" accept="image/*" ngf-max-size="2MB" ngf-model-invalid="errorFile">
                </span>
                <button class="btn btn-danger" ng-click="limparImagem()" ng-show="picFile || imagemBD" type="button" style="display: none;">Remover Imagem</button>
                <i ng-show="form.file.$error.maxSize" style="margin-left: 10px;">Arquivo muito grande <% errorFile.size / 1000000|number:1 %>MB: máximo 2MB</i>

                {{--<br><br>--}}

                <span class="btn btn-primary btn-file" ng-show="!fileArquivo && !arquivoBD" style="display: none;">
                    Escolher Arquivo <input  type="file" ngf-select ng-model="fileArquivo" name="fileArquivo" accept="application/pdf,.zip,.rar,.doc,.docx,.xlsx,.xls" ngf-max-size="100MB" ngf-model-invalid="errorFile">
                </span>
                <button class="btn btn-danger" ng-click="limparArquivo()" ng-show="fileArquivo || arquivoBD" type="button">Remover Arquivo</button>
                <a href="arquivos/perguntas/<% arquivoBD %>" target="_blank" ng-show="arquivoBD"><% arquivoBD %></a>
                <a ng-show="fileArquivo"><% fileArquivo.name %></a>
                {{--<br><br>--}}

                <br><br>
                @include('cms::pergunta._form')
                <input type="hidden" name="id" ng-model="id" ng-init="id='{{$pergunta->id_pergunta}}'"/>
                <div class="row">
                    <div class="col-md-1 col-lg-1 col-xs-3">
                        <br>
                        <button class="btn btn-info" type="button" ng-click="alterar(picFile, fileArquivo)" ng-disabled="form.$invalid && form.pergunta.$dirty">Salvar</button>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xs-6">
                        <span class="progress" ng-show="picFile.progress >= 0">
                            <div style="width: <% picFile.progress %>%" ng-bind="picFile.progress + '%'"></div>
                        </span>
                        <div ng-show="processandoSalvar"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                        <div><% mensagemSalvar %></div>
                        <span ng-show="picFile.result">{{--Upload Successful--}}</span>
                        <span class="err" ng-show="errorMsg"><% errorMsg %></span>
                    </div>
                    <div class="col-md-9 col-xs-3"></div>
                </div>
                <br><br><br>


                {!! Form::close()!!}
            </div>
        </div>
    </div>
@endsection
