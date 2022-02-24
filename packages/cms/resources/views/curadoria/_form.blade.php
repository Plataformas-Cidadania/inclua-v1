<label for="id_curador">curador</label>
<select
    name="id_curador"
    class="form-control width-medio"
    ng-model="curador"
    ng-init="curador = null"
    ng-required="true"
    ng-options="option.nome for option in curadores track by option.id_curador"
    placeholder="Selecione"
>
    <option value="" ng-disabled="!!curadoria.id_curador">Selecione</option>
</select>
<br>

<label for="tema_recorte">Tema do Recorte*</label>
<input type="text" name="tema_recorte" class="form-control width-grande <% validar(curadoria.tema_recorte)%>" ng-model="curadoria.tema_recorte" ng-required="true">
<br>

{!! Form::label('texto', 'Texto ') !!}<br>
{!! Form::textarea('texto', null, ['class'=>"form-control width-grande <% validar(curadoria.texto) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'curadoria.texto', 'init-model'=>'curadoria.texto']) !!}<br>

<label for="data">Mês*</label>
<input type="text" name="mes" class="form-control width-medio <% validar(curadoria.mes)%>" ng-model="curadoria.mes" ng-required="true">
<br>

<label for="link_video">Link do Vídeo</label>
<input type="text" name="link_video" class="form-control width-grande <% validar(curadoria.link_video)%>" ng-model="curadoria.link_video" ng-required="false">

