<!-- Modal Indicação-->
<div class="modal fade" id="modalcategorizacao" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">categorias</h4>
            </div>
            <div class="modal-body">
                <form action="frmcategorizacao">
                    <label for="dimensao">Dimensão</label>
                    <select
                        name="id_dimensao"
                        class="form-control width-grande"
                        ng-model="dimensao"
                        ng-init="dimensao = null"
                        ng-required="true"
                        ng-options="option.titulo for option in dimensoes track by option.id_dimensao"
                        placeholder="Selecione"
                        ng-change="listarcategorias(dimensao.id_dimensao)"
                    >
                        <option value="" ng-disabled="!!categorizacao.id_dimensao">Selecione</option>
                    </select>
                    <br>
                    <label for="categoria">categoria</label>
                    <select
                        name="id_categoria"
                        class="form-control width-grande"
                        ng-model="categoria"
                        ng-init="categoria = null"
                        ng-required="true"
                        ng-options="option.titulo for option in categorias track by option.id_categoria"
                        placeholder="Selecione"
                    >
                        <option value="" ng-disabled="!!categorizacao.id_categoria">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btncategorizacao" ng-click="inserircategorizacao()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemcategorizacoes"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemcategorizacoes && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalcategorizacoes>0" class="table table-striped">
                        <thead>
                        <tr>
                            <th>Recurso</th>
                            <th>categoria</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="categorizacao in categorizacoes">
                            <td><% categorizacao.recurso.nome %></td>
                            <td><% categorizacao.categoria.titulo %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluircategorizacao" class="fa fa-remove fa-2x" ng-click="perguntaExcluircategorizacao(categorizacao.id_categoria, categorizacao.id_recurso, categorizacao.categoria.titulo)"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemcategorizacao %></div>
            </div>
            <div id="fecharcategorizacao" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal categoria-->
<!-- Modal Excluir categoria-->
<div class="modal fade" id="modalExcluircategorizacao" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Excluir categoria</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {{--<div class="col-md-3">
                        <img  ng-src="imagens/recursos/xs-<% imagemExcluir %>" width="100">
                    </div>--}}
                    <div class="col-md-9">
                        <p><% tituloExcluircategorizacao %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidocategorizacao %></div>
            </div>
            <div id="opcoesExcluircategorizacao" class="modal-footer" ng-show="!excluidocategorizacao">
                <button id="btnExcluircategorizacao" type="button" class="btn btn-default" ng-click="excluircategorizacao(idExcluircategorizacaocategoria, idExcluircategorizacaoRecurso);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluircategorizacao" class="modal-footer" ng-show="excluidocategorizacao">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
