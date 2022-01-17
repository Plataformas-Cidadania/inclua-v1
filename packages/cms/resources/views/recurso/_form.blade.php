
<label for="id_tipo_recurso">Tipo</label>
<select
    name="id_tipo_recurso"
    class="form-control width-medio"
    ng-model="tipo_recurso"
    ng-init="tipo_recurso = null"
    ng-required="true"
    ng-options="option.nome for option in tipos track by option.id_tipo_recurso"
    placeholder="Selecione"
>
    <option value="" ng-disabled="!!recurso.id_tipo_recurso">Selecione</option>
</select>
<br>

<label for="nome">Nome</label>
<input type="text" name="nome" class="form-control width-grande <% validar(recurso.nome)%>" ng-model="recurso.nome" ng-required="true">

<label for="esfera">Esfera</label>
<input type="text" name="esfera" class="form-control width-grande <% validar(recurso.esfera)%>" ng-model="recurso.esfera" ng-required="true">

<label for="status">Status</label>
<select name="status" id="status" class="form-control width-pequeno <% validar(recurso.status)%>" ng-model="recurso.status">
    <option value="1" ng-selected="recurso.status == 1">Ativo</option>
    <option value="0" ng-selected="recurso.status == 0">Inativo</option>
</select>
