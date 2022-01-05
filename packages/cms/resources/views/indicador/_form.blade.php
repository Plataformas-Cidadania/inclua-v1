<?php /*
{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(indicador.titulo) %>", 'ng-model'=>'indicador.titulo', 'ng-required'=>'true', 'init-model'=>'indicador.titulo', 'placeholder' => '']) !!}<br>
*/ ?>

<input type="hidden" name="numero" ng-model="indicador.numero">

<label>Dimensão</label>
<select name="dimensao_id" id="dimensao_id" ng-model="indicador.dimensao_id">
    <option ng-repeat="option in dimensoes" value="<% option.id %>"><% option.titulo %>"></option>
</select>
<br>

<label for="titulo">Título</label>
<input type="text" name="titulo" class="form-control widh-medio <% validar(indicador.titulo)%>" ng-model="indicador.titulo" ng-required="true">

<label for="descricao">Descricao</label>
<input type="text" name="descricao" class="form-control widh-medio <% validar(indicador.descricao)%>" ng-model="indicador.descricao" ng-required="true">

<label for="consequencia">Consequência</label>
<input type="text" name="consequencia" class="form-control widh-medio <% validar(indicador.consequencia)%>" ng-model="indicador.consequencia" ng-required="true">

<label for="descricao">Valor Baixo</label>
<input type="number" name="vl_baixo" class="form-control widh-pequeno <% validar(indicador.vl_baixo)%>" ng-model="indicador.vl_baixo" ng-required="true">

<label for="descricao">Valor Alto</label>
<input type="number" name="vl_alto" class="form-control widh-pequeno <% validar(indicador.vl_alto)%>" ng-model="indicador.vl_alto" ng-required="true">

