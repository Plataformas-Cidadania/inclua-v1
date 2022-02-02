

<label for="descricao">Depoimento</label>
<input type="text" name="descricao" class="form-control width-grande <% validar(depoimento.nome)%>" ng-model="depoimento.descricao" ng-required="true">

<img  ng-src="img/d<% depoimento.icone %>.png">
