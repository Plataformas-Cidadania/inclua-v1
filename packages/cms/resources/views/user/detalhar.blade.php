@extends('cms::layouts.app')

@section('content')
    {!! Html::script(config('app.url').'assets-cms/js/controllers/alterarUserCtrl.js') !!}
    <div ng-controller="alterarUserCtrl">
        <div class="box-padrao">
            <h1><a href="cms/usuarios-site"><i class="fa fa-arrow-circle-left"></i></a>&nbsp;&nbsp;Usuário</h1>

            <div >
                <span class="texto-obrigatorio">* campos obrigatórios</span><br><br>
                {!! Form::model($user, ['name' =>'form']) !!}

                <br><br>
                @include('cms::user._form')

                <input ng-model="user.alterar_senha" type="checkbox" value="true"><label>&nbsp;&nbsp;Alterar Senha</label><br><br>

                <div ng-show="user.alterar_senha">
                    <label for="password">Senha *</label><br>
                    <input type="password" class="form-control width-grande" ng-required="true" ng-model="user.password"><br>

                    <label for="conf_password">Confirmar Senha *</label><br>
                    <input type="password" class="form-control width-grande" ng-required="true" ng-model="user.confpassword">
                    <span ng-show="user.password!=user.confpassword && user.password!=''" class="text-danger"> senhas diferentes!</span><br>
                </div>


                <input type="hidden" name="id" ng-model="id" ng-init="id='{{$user->id}}'"/>
                <div class="row">
                    <div class="col-md-1 col-lg-1 col-xs-3">
                        <button class="btn btn-info" type="button" ng-click="alterar()" ng-disabled="form.$invalid && form.user.$dirty">Salvar</button>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xs-6">
                        <p class="mensagem-ok text-success"><% mensagemSalvar %></p>
                        <br><br>
                        <div ng-show="processandoSalvar"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                    </div>
                    <div class="col-md-9 col-xs-3"></div>
                </div>
                <br><br><br>





                {!! Form::close()!!}
            </div>
        </div>
    </div>
@endsection
