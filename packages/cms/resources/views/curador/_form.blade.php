<label for="nome">Nome*</label>
<input type="text" name="nome" class="form-control width-grande <% validar(curador.nome)%>" ng-model="curador.nome" ng-required="true">
<br>

<label for="url_imagem">Url Imagem</label>
<input type="text" name="url_imagem" class="form-control width-medio" ng-model="curador.url_imagem" >
<br>

{!! Form::label('minicv', 'Mini Biografia *') !!}<br>
{!! Form::textarea('minicv', null, ['class'=>"form-control width-grande <% validar(curador.minicv) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'curador.minicv', 'init-model'=>'curador.minicv']) !!}<br>


<label for="link_curriculo">Link para Currículo</label>
<input type="text" name="link_curriculo" class="form-control width-grande <% validar(curador.link_curriculo)%>" ng-model="curador.link_curriculo" >
<br>

