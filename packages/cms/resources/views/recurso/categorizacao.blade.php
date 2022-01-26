<!-- Modal Indicação-->
<div class="modal fade" id="modalCategorizacao" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Categorias</h4>
            </div>
            <div class="modal-body">
                <form action="frmCategorizacao">
                    <label for="categoria">Categoria</label>
                    <select
                        name="id_categoria"
                        class="form-control width-grande"
                        ng-model="categoria"
                        ng-init="categoria = null"
                        ng-required="true"
                        ng-options="option.nome for option in categorias track by option.id_categoria"
                        placeholder="Selecione"
                    >
                        <option value="" ng-disabled="!!categorizacao.id_categoria">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btnCategorizacao" ng-click="inserirCategorizacao()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemCategorizacoes"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemCategorizacoes && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalCategorizacoes>0" class="table table-striped">
                        <thead>
                        <tr>
                            <th>Recurso</th>
                            <th>Categoria</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="categorizacao in categorizacoes">
                            <td><% getRecurso(categorizacao.id_recurso) %></td>
                            <td><% getCategoria(categorizacao.id_categoria) %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluirCategorizacao" class="fa fa-remove fa-2x" ng-click="perguntaExcluirCategorizacao(categorizacao.id_categoria, categorizacao.id_recurso, getCategoria(categorizacao.id_categoria))"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemCategorizacao %></div>
            </div>
            <div id="fecharCategorizacao" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Categoria-->
<!-- Modal Excluir Categoria-->
<div class="modal fade" id="modalExcluirCategorizacao" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Excluir Categoria</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {{--<div class="col-md-3">
                        <img  ng-src="imagens/recursos/xs-<% imagemExcluir %>" width="100">
                    </div>--}}
                    <div class="col-md-9">
                        <p><% tituloExcluirCategorizacao %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidoCategorizacao %></div>
            </div>
            <div id="opcoesExcluirCategorizacao" class="modal-footer" ng-show="!excluidoCategorizacao">
                <button id="btnExcluirCategorizacao" type="button" class="btn btn-default" ng-click="excluirCategorizacao(idExcluirCategorizacaoCategoria, idExcluirCategorizacaoRecurso);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluirCategorizacao" class="modal-footer" ng-show="excluidoCategorizacao">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
