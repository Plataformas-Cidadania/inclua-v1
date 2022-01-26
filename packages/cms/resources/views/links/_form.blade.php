<input type="hidden" name="id_recurso" ng-model="link.id_recurso">

<label for="uri">Uri</label>
<input type="text" name="nome" class="form-control width-medio <% validar(link.nome)%>" ng-model="link.uri" ng-required="true">

<label for="uri">Idioma</label>
<input type="text" name="idioma" class="form-control width-medio <% validar(link.idioma)%>" ng-model="link.idioma" ng-required="true">

