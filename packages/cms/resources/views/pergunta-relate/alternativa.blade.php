<!-- Modal Indicação-->
<div class="modal fade" id="modalAlternativa" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Indicadores</h4>
            </div>
            <div class="modal-body">
                <form action="frmAlternativa">
                    <label for="alternativa">Alternativa</label>
                    <input type="text" name="alternativa" class="form-control width-grande <% validar(alternativa.descricao)%>" ng-model="alternativa.descricao" ng-required="true">
                    <br>
                    <label for="outros">Outros</label>
                    <select name="outros" id="outros" class="form-control width-medio <% validar(alternativa.status)%>" ng-model="alternativa.outros" ng-required="true" ng-init="alternativa.outros = 0;">
                        <option value="0" ng-selected="pergunta.tipo_resposta == 0">Não</option>
                        <option value="1" ng-selected="pergunta.tipo_resposta == 1">Sim</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btnAlternativa" ng-click="inserirAlternativa()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemAlternativas"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemAlternativas && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalAlternativas>0" class="table table-striped">
                        <thead>
                        <tr>
                            {{--<th>Recurso</th>--}}
                            <th>Alternativa</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="alternativa in alternativas">
                            {{--<td><% alternativa.recurso.nome %></td>--}}
                            <td><% alternativa.descricao %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluirAlternativa" class="fa fa-remove fa-2x" ng-click="perguntaExcluirAlternativa(alternativa.id_alternativa, alternativa.descricao)"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemAlternativa %></div>
            </div>
            <div id="fecharAlternativa" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Indicador-->
<!-- Modal Excluir Indicador-->
<div class="modal fade" id="modalExcluirAlternativa" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Excluir Alternativa</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {{--<div class="col-md-3">
                        <img  ng-src="imagens/recursos/xs-<% imagemExcluir %>" width="100">
                    </div>--}}
                    <div class="col-md-9">
                        <p><% tituloExcluirAlternativa %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidoAlternativa %></div>
            </div>
            <div id="opcoesExcluirAlternativa" class="modal-footer" ng-show="!excluidoAlternativa">
                <button id="btnExcluirAlternativa" type="button" class="btn btn-default" ng-click="excluirAlternativa(idExcluirAlternativa);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluirAlternativa" class="modal-footer" ng-show="excluidoAlternativa">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
