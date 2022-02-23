<!-- Modal Indicação-->
<div class="modal fade" id="modalCuradoriaRecurso" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Recursos</h4>
            </div>
            <div class="modal-body">
                <form action="frmcuradoria_recurso">
                    <label for="recurso">Recurso</label>
                    <select
                        name="id_recurso"
                        class="form-control width-grande"
                        ng-model="recurso"
                        ng-init="recurso = null"
                        ng-required="true"
                        ng-options="option.nome for option in recursos track by option.id_recurso"
                        placeholder="Selecione"
                    >
                        <option value="" ng-disabled="!!curadoria_recurso.id_categoria">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btncuradoria_recurso" ng-click="inserircuradoria_recurso()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemCuradoriaRecurso"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemCuradoriaRecurso && totalCuradoriaRecurso==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalCuradoriaRecurso>0" class="table table-striped">
                        <thead>
                        <tr>
                            {{--<th>Recurso</th>--}}
                            <th>Recurso</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="curadoriaRecurso in curadoriasRecursos">
                            {{--<td><% getRecurso(curadoria_recurso.id_recurso) %></td>--}}
                            <td><% curadoriaRecurso.nome %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluircuradoria_recurso" class="fa fa-remove fa-2x" ng-click="perguntaExcluircuradoria_recurso(curadoria_recurso.id_curadoria, curadoriaRecurso.id_recurso, curadoriaRecurso.nome)"></i></a>
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
<!-- Fim Modal Recurso-->
<!-- Modal Excluir Recurso-->
<div class="modal fade" id="modalExcluircuradoria_recurso" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Excluir Recurso</h4>
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
                <button id="btnExcluircuradoria_recurso" type="button" class="btn btn-default" ng-click="excluircuradoria_recurso(idExcluirCuradoriaRecursoIdCuradoria, idExcluirCuradoriaRecursoidRecurso);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluircuradoria_recurso" class="modal-footer" ng-show="excluidocuradoria_recurso">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
