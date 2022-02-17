<!-- Modal Indicação-->
<div class="modal fade" id="modalIndicacao" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Indicadores</h4>
            </div>
            <div class="modal-body">
                <form action="frmIndicacao">
                    <label for="dimensao">Dimensão</label>
                    <select
                        name="id_dimensao"
                        class="form-control width-grande"
                        ng-model="dimensao"
                        ng-init="dimensao = null"
                        ng-required="true"
                        ng-options="option.titulo for option in dimensoes track by option.id_dimensao"
                        placeholder="Selecione"
                        ng-change="listarIndicadores(dimensao.id_dimensao)"
                    >
                        <option value="" ng-disabled="!!indicacao.id_dimensao">Selecione</option>
                    </select>
                    <br>
                    <label for="indicador">Indicador</label>
                    <select
                        name="id_indicador"
                        class="form-control width-grande"
                        ng-model="indicador"
                        ng-init="indicador = null"
                        ng-required="true"
                        ng-options="option.titulo for option in indicadores track by option.id_indicador"
                        placeholder="Selecione"
                    >
                        <option value="" ng-disabled="!!indicacao.id_indicador">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btnIndicacao" ng-click="inserirIndicacao()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemIndicacoes"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemIndicacoes && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalIndicacoes>0" class="table table-striped">
                        <thead>
                        <tr>
                            {{--<th>Recurso</th>--}}
                            <th>Indicador</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="indicacao in indicacoes">
                            {{--<td><% indicacao.recurso.nome %></td>--}}
                            <td><% indicacao.indicador.titulo %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluirIndicacao" class="fa fa-remove fa-2x" ng-click="perguntaExcluirIndicacao(indicacao.id_indicador, indicacao.id_recurso, indicacao.indicador.titulo)"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemIndicacao %></div>
            </div>
            <div id="fecharIndicacao" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Indicador-->
<!-- Modal Excluir Indicador-->
<div class="modal fade" id="modalExcluirIndicacao" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Excluir Indicador</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {{--<div class="col-md-3">
                        <img  ng-src="imagens/recursos/xs-<% imagemExcluir %>" width="100">
                    </div>--}}
                    <div class="col-md-9">
                        <p><% tituloExcluirIndicacao %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidoIndicacao %></div>
            </div>
            <div id="opcoesExcluirIndicacao" class="modal-footer" ng-show="!excluidoIndicacao">
                <button id="btnExcluirIndicacao" type="button" class="btn btn-default" ng-click="excluirIndicacao(idExcluirIndicacaoIndicador, idExcluirIndicacaoRecurso);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluirIndicacao" class="modal-footer" ng-show="excluidoIndicacao">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
