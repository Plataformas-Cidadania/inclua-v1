<!-- Modal Indicação-->
<div class="modal fade" id="modalRecurso_curadoria" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Categorias</h4>
            </div>
            <div class="modal-body">
                <form action="frmRecurso_curadoria">
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
                        <option value="" ng-disabled="!!recurso_curadoria.id_categoria">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btnRecurso_curadoria" ng-click="inserirRecurso_curadoria()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemRecursoCuradoria"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemRecursoCuradoria && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalRecursoCuradoria>0" class="table table-striped">
                        <thead>
                        <tr>
                            {{--<th>Recurso</th>--}}
                            <th>Categoria</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="recurso_curadoria in recursoCuradoria">
                            {{--<td><% getRecurso(recurso_curadoria.id_recurso) %></td>--}}
                            <td><% getCategoria(recurso_curadoria.id_categoria) %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluirRecurso_curadoria" class="fa fa-remove fa-2x" ng-click="perguntaExcluirRecurso_curadoria(recurso_curadoria.id_categoria, recurso_curadoria.id_recurso, getCategoria(recurso_curadoria.id_categoria))"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemRecurso_curadoria %></div>
            </div>
            <div id="fecharRecurso_curadoria" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Categoria-->
<!-- Modal Excluir Categoria-->
<div class="modal fade" id="modalExcluirRecurso_curadoria" role="dialog">
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
                        <p><% tituloExcluirRecurso_curadoria %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidoRecurso_curadoria %></div>
            </div>
            <div id="opcoesExcluirRecurso_curadoria" class="modal-footer" ng-show="!excluidoRecurso_curadoria">
                <button id="btnExcluirRecurso_curadoria" type="button" class="btn btn-default" ng-click="excluirRecurso_curadoria(idExcluirRecurso_curadoriaCategoria, idExcluirRecurso_curadoriaRecurso);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluirRecurso_curadoria" class="modal-footer" ng-show="excluidoRecurso_curadoria">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
