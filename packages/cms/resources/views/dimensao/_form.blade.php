<?php /*
{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(dimensao.titulo) %>", 'ng-model'=>'dimensao.titulo', 'ng-required'=>'true', 'init-model'=>'dimensao.titulo', 'placeholder' => '']) !!}<br>
*/ ?>

<label for="titulo">Título</label>
<input type="text" name="titulo" class="form-control widh-medio <% validar(dimensao.titulo)%>" ng-model="dimensao.titulo" ng-required="true">

<label for="descricao">Descricao</label>
<input type="text" name="descricao" class="form-control widh-medio <% validar(dimensao.descricao)%>" ng-model="dimensao.descricao" ng-required="true">
