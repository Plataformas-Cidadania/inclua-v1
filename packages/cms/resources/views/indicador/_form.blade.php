<?php /*
{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(indicador.titulo) %>", 'ng-model'=>'indicador.titulo', 'ng-required'=>'true', 'init-model'=>'indicador.titulo', 'placeholder' => '']) !!}<br>
*/ ?>

<input type="hidden" name="numero" ng-model="indicador.numero">

<label for="titulo">Título</label>
<input type="text" name="titulo" class="form-control widh-medio <% validar(indicador.titulo)%>" ng-model="indicador.titulo" ng-required="true">

<label for="descricao">Descricao</label>
<input type="text" name="descricao" class="form-control widh-medio <% validar(indicador.descricao)%>" ng-model="indicador.descricao" ng-required="true">

<label for="descricao">Valor Baixo</label>
<input type="number" name="descricao" class="form-control widh-pequeno <% validar(indicador.vl_baixo)%>" ng-model="indicador.vl_baixo" ng-required="true">

<label for="descricao">Valor Alto</label>
<input type="number" name="descricao" class="form-control widh-pequeno <% validar(indicador.vl_alto)%>" ng-model="indicador.vl_alto" ng-required="true">

