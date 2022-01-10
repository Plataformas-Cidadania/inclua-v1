<?php /*
{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(indicador.titulo) %>", 'ng-model'=>'indicador.titulo', 'ng-required'=>'true', 'init-model'=>'indicador.titulo', 'placeholder' => '']) !!}<br>
*/ ?>

<input type="hidden" name="numero" ng-model="indicador.numero">
<input type="hidden" name="id_dimensao" ng-model="indicador.id_dimensao">

<br>
{{--<label for="dimensao_id">Dimensão</label>
<select
    name="dimensao_id"
    class="form-control width-grande"
    ng-model="dimensao"
    ng-init="dimensao = null"
    ng-required="true"
    ng-options="option.titulo for option in dimensoes track by option.id_dimensao"
    placeholder="Selecione"
>
    <option value="" ng-disabled="!!indicador.dimensao_id">Selecione</option>
</select>
<br>--}}

<label for="titulo">Título</label>
<input type="text" name="titulo" class="form-control width-medio <% validar(indicador.titulo)%>" ng-model="indicador.titulo" ng-required="true">

<label for="descricao">Descricao</label>
<input type="text" name="descricao" class="form-control width-medio <% validar(indicador.descricao)%>" ng-model="indicador.descricao" ng-required="true">

<label for="consequencia">Consequência</label>
<input type="text" name="consequencia" class="form-control width-medio <% validar(indicador.consequencia)%>" ng-model="indicador.consequencia" ng-required="true">

<label for="descricao">Valor Baixo</label>
<input type="number" name="vl_baixo" class="form-control width-pequeno <% validar(indicador.vl_baixo)%>" ng-model="indicador.vl_baixo" ng-required="true">

<label for="descricao">Valor Alto</label>
<input type="number" name="vl_alto" class="form-control width-pequeno <% validar(indicador.vl_alto)%>" ng-model="indicador.vl_alto" ng-required="true">

