<label for="nome">Nome</label>
<input type="text" name="nome" class="form-control width-grande <% validar(curadoria.nome)%>" ng-model="curadoria.nome" ng-required="true">

<label for="mini_biografia">Mini Biografia</label>
<textarea cols="5" class="form-control width-grande <% validar(curadoria.mini_biografia)%>" ng-model="curadoria.mini_biografia" ng-required="true"></textarea>

<label for="tema_recorte">Tema do Recorte</label>
<input type="text" name="tema_recorte" class="form-control width-grande <% validar(curadoria.tema_recorte)%>" ng-model="curadoria.tema_recorte" ng-required="true">

{!! Form::label('texto', 'Texto *') !!}<br>
{!! Form::textarea('texto', null, ['class'=>"form-control width-grande <% validar(curadoria.texto) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'curadoria.texto', 'init-model'=>'curadoria.texto']) !!}<br>

<label for="data">Data</label>
<input type="text" name="data" class="form-control width-medio <% validar(curadoria.data)%>" ng-model="curadoria.data" ng-required="true">

<label for="link_curriculo">Data</label>
<input type="date" name="link_curriculo" class="form-control width-medio <% validar(curadoria.link_curriculo)%>" ng-model="curadoria.link_curriculo" ng-required="true">

<label for="link_video">Data</label>
<input type="text" name="link_video" class="form-control width-medio <% validar(curadoria.link_video)%>" ng-model="curadoria.link_video" ng-required="true">

