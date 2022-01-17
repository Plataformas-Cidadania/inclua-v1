<input type="hidden" name="letra" ng-model="pergunta.letra">
<input type="hidden" name="id_indicador" ng-model="pergunta.id_indicador"><br>
{{--<br><% pergunta.letra %><br>
<br><% pergunta %><br>--}}
<label for="descricao">Descricao</label>
<input type="text" name="descricao" class="form-control width-grande <% validar(pergunta.descricao)%>" ng-model="pergunta.descricao" ng-required="true">
<br>
<label for="legenda">Legenda</label>
<input type="text" name="legenda" class="form-control width-grande <% validar(pergunta.legenda)%>" ng-model="pergunta.legenda" ng-required="true">
<br>
<label for="tipo">Tipo</label>
<select
    name="tipo"
    id="tipo"
    class="form-control width-pequeno <% validar(pergunta.tipo)%>"
    ng-model="pergunta.tipo"
    ng-required="true"
>
    <option value="1" ng-selected="pergunta.tipo == 1">Sim/Não</option>
    <option value="2" ng-selected="pergunta.tipo == 2">Nota</option>
    <option value="3" ng-selected="pergunta.tipo == 3">Range</option>
</select>
<br>
<label for="nao_se_aplica">Opção de Não se Aplica</label>
<select name="nao_se_aplica" id="nao_se_aplica" class="form-control width-pequeno <% validar(pergunta.nao_se_aplica)%>" ng-model="pergunta.nao_se_aplica">
    <option value="0" ng-selected="pergunta.nao_se_aplica == 0">Não possui essa opção</option>
    <option value="1" ng-selected="pergunta.nao_se_aplica == 1">Possui essa opção</option>
</select>
<br>
<label for="inverter">Inverter Valores</label>
<select name="inverter" id="inverter" class="form-control width-pequeno <% validar(pergunta.inverter)%>" ng-model="pergunta.inverter">
    <option value="0" ng-selected="pergunta.inverter == 0">Não</option>
    <option value="1" ng-selected="pergunta.inverter == 1">Sim</option>
</select>
<br>
<label for="vl_subPergunta">Valor de ativação de subpergunta</label>
<input type="number" name="vl_subPergunta" id="vl_subPergunta" class="form-control width-medio <% validar(pergunta.vl_subPergunta)%>" ng-model="pergunta.vl_subPergunta">
<br>
<label for="vl_minimo">Valor Mínimo</label>
<input type="number" name="vl_minimo" class="form-control width-pequeno <% validar(pergunta.vl_minimo)%>" ng-model="pergunta.vl_minimo" ng-required="true">
<br>
<label for="vl_maximo">Valor Máximo</label>
<input type="number" name="vl_maximo" class="form-control width-pequeno <% validar(pergunta.vl_maximo)%>" ng-model="pergunta.vl_maximo" ng-required="true">
<br>
