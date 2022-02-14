

{{--
<label for="descricao">Descrição</label>
<input type="text" name="descricao" class="form-control width-grande <% validar(pergunta.descricao)%>" ng-model="pergunta.descricao" ng-required="true">
--}}

{!! Form::label('descricao', 'Descrição *') !!}<br>
{!! Form::textarea('descricao', null, ['class'=>"form-control width-grande <% validar(pergunta.descricao) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'pergunta.descricao', 'init-model'=>'pergunta.descricao']) !!}<br>


<label for="tipo_resposta">Tipo de Resposta</label>
<select name="tipo_resposta" id="tipo_resposta" class="form-control width-medio <% validar(recurso.status)%>" ng-model="pergunta.tipo_resposta" ng-required="true" ng-init="pergunta.tipo_resposta = '';">
    <option value="" ng-selected="pergunta.tipo_resposta == ''">Selecione</option>
    <option value="1" ng-selected="pergunta.tipo_resposta == 1">Texto</option>
    <option value="2" ng-selected="pergunta.tipo_resposta == 2">Alternativas</option>
</select>
