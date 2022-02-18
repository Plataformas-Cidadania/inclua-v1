<label for="nome">Nome</label>
<input type="text" name="nome" class="form-control width-grande <% validar(curador.nome)%>" ng-model="curador.nome" ng-required="true">

<label for="url_imagem">Url Imagem</label>
<input type="text" name="url_imagem" class="form-control width-medio <% validar(curador.url_imagem)%>" ng-model="curador.url_imagem" ng-required="true">

<label for="minicv">Nome</label>
<textarea name="minicv" class="form-control <% validar(curador.minicv)%>" cols="10" ng-model="curador.minicv" ng-required="true"></textarea>

<label for="link_curriculo">Link para Currículo</label>
<input type="text" name="link_curriculo" class="form-control width-medio <% validar(curador.link_curriculo)%>" ng-model="curador.link_curriculo" ng-required="true">

