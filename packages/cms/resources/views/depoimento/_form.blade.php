

<label for="descricao">Depoimento</label>
<input type="text" name="descricao" class="form-control width-grande <% validar(depoimento.nome)%>" ng-model="depoimento.descricao" ng-required="true">

<label for="status">Status</label>
<select name="status" id="status" class="form-control width-pequeno <% validar(depoimento.status)%>" ng-model="depoimento.status">
    <option value="1" ng-selected="depoimento.status == 1">Ativo</option>
    <option value="0" ng-selected="depoimento.status == 0">Inativo</option>
</select>

<img  ng-src="img/d<% depoimento.icone %>">
