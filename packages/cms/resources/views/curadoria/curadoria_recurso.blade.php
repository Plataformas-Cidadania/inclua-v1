<!-- Modal Indicação-->
<div class="modal fade" id="modalcuradoria_recurso" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Categorias</h4>
            </div>
            <div class="modal-body">
                <form action="frmcuradoria_recurso">
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
                        <option value="" ng-disabled="!!curadoria_recurso.id_categoria">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btncuradoria_recurso" ng-click="inserircuradoria_recurso()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemcuradoriaRecurso"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemcuradoriaRecurso && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalcuradoriaRecurso>0" class="table table-striped">
                        <thead>
                        <tr>
                            {{--<th>Recurso</th>--}}
                            <th>Categoria</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="curadoria_recurso in curadoriaRecurso">
                            {{--<td><% getRecurso(curadoria_recurso.id_recurso) %></td>--}}
                            <td><% getCategoria(curadoria_recurso.id_categoria) %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluircuradoria_recurso" class="fa fa-remove fa-2x" ng-click="perguntaExcluircuradoria_recurso(curadoria_recurso.id_categoria, curadoria_recurso.id_recurso, getCategoria(curadoria_recurso.id_categoria))"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemcuradoria_recurso %></div>
            </div>
            <div id="fecharcuradoria_recurso" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Categoria-->
<!-- Modal Excluir Categoria-->
<div class="modal fade" id="modalExcluircuradoria_recurso" role="dialog">
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
                        <p><% tituloExcluircuradoria_recurso %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidocuradoria_recurso %></div>
            </div>
            <div id="opcoesExcluircuradoria_recurso" class="modal-footer" ng-show="!excluidocuradoria_recurso">
                <button id="btnExcluircuradoria_recurso" type="button" class="btn btn-default" ng-click="excluircuradoria_recurso(idExcluircuradoria_recursoCategoria, idExcluircuradoria_recursoRecurso);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluircuradoria_recurso" class="modal-footer" ng-show="excluidocuradoria_recurso">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
