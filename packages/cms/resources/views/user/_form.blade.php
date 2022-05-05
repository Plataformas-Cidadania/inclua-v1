{{--É NECESSÁRIO RODAR O COMANDO composer require illuminate/html E ALTERAR ACRESCENTAR LINHA NO ARQUIVO config/app.php--}}

{!! Form::label('name', 'Nome *') !!}<br>
{!! Form::text('name', null, ['class'=>"form-control width-grande <% validar(user.name) %>", 'ng-model'=>'user.name', 'ng-required'=>'true', 'init-model'=>'user.name', 'placeholder' => '']) !!}<br>

{!! Form::label('email', 'E-mail *') !!}<br>
{!! Form::text('email', null, ['class'=>"form-control width-grande <% validar(user.email) %>", 'ng-model'=>'user.email', 'ng-required'=>'true', 'init-model'=>'user.email']) !!}<br>




