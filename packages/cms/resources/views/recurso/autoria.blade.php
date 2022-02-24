<!-- Modal Indicação-->
<div class="modal fade" id="modalAutoria" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Autores</h4>
            </div>
            <div class="modal-body">
                <form action="frmAutoria">
                    <label for="autor">Autor</label>
                    <select
                        name="id_autor"
                        class="form-control width-grande"
                        ng-model="autor"
                        ng-init="autor = null"
                        ng-required="true"
                        ng-options="option.nome for option in autores track by option.id_autor"
                        placeholder="Selecione"
                    >
                        <option value="" ng-disabled="!!autoria.id_autor">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btnAutoria" ng-click="inserirAutoria()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemAutorias"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemAutorias && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalAutorias>0" class="table table-striped">
                        <thead>
                        <tr>
                            {{--<th>Recurso</th>--}}
                            <th>Autor</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="autoria in autorias">
                            {{--<td><% getRecurso(autoria.id_recurso) %></td>--}}
                            <td><% autoria.autor.nome %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluirAutoria" class="fa fa-remove fa-2x" ng-click="perguntaExcluirAutoria(autoria.id_autor, autoria.id_recurso, autoria.autor.nome)"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemAutoria %></div>
            </div>
            <div id="fecharAutoria" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Autor-->
<!-- Modal Excluir Autor-->
<div class="modal fade" id="modalExcluirAutoria" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Excluir Autor</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {{--<div class="col-md-3">
                        <img  ng-src="imagens/recursos/xs-<% imagemExcluir %>" width="100">
                    </div>--}}
                    <div class="col-md-9">
                        <p><% tituloExcluirAutoria %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidoAutoria %></div>
            </div>
            <div id="opcoesExcluirAutoria" class="modal-footer" ng-show="!excluidoAutoria">
                <button id="btnExcluirAutoria" type="button" class="btn btn-default" ng-click="excluirAutoria(idExcluirAutoriaAutor, idExcluirAutoriaRecurso);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluirAutoria" class="modal-footer" ng-show="excluidoAutoria">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
