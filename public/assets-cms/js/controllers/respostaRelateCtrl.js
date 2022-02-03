cmsApp.controller('respostaRelateCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){


    $scope.resposta = {
    };
    $scope.respostas = [];
    $scope.dimensao = null;
    $scope.currentPage = 1;
    $scope.lastPage = 0;
    $scope.totalItens = 0;
    $scope.maxSize = 5;
    $scope.itensPerPage = 100;
    $scope.dadoPesquisa = '';
    $scope.campos = "id_resposta, nome";
    $scope.campoPesquisa = "titulo";
    $scope.processandoListagem = false;
    $scope.processandoExcluir = false;
    $scope.ordem = "numero";
    $scope.sentidoOrdem = "asc";
    var $listar = false;//para impedir de carregar o conteúdo dos watchs no carregamento da página.

    $scope.$watch('currentPage', function(){
        if($listar){
            listarRespostas();
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listarRespostas();
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            listarRespostas();
        }
    });

    var listarRespostas = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/resposta_relate',
            method: 'GET',
            params: {
                page: $scope.currentPage,
                itensPorPagina: $scope.itensPerPage,
                dadoPesquisa: $scope.dadoPesquisa,
                campos: $scope.campos,
                campoPesquisa: $scope.campoPesquisa,
                ordem: $scope.ordem,
                sentido: $scope.sentidoOrdem
            }
        }).success(function(data, status, headers, config){
            console.log(data.data);
            $scope.respostas = data.data;
            let numeroMaximo = Math.max.apply(Math, $scope.respostas.map(function(item) { return item.numero; }));
            $scope.resposta.numero = numeroMaximo + 1;
            $scope.lastPage = data.last_page;
            $scope.totalItens = data.data.length;
            //$scope.totalItens = data.total;
            $scope.primeiroDaPagina = data.from;
            $scope.ultimoDaPagina = data.to;
            $listar = true;
            //console.log(data);
            $scope.processandoListagem = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagem = false;
        });
    };

    $scope.ordernarPor = function(ordem){
        $scope.ordem = ordem;
        //console.log($scope.ordem);
        if($scope.sentidoOrdem=="asc"){
            $scope.sentidoOrdem = "desc";
        }else{
            $scope.sentidoOrdem = "asc";
        }

        listarRespostas();
    };

    $scope.validar = function(){

    };


    listarRespostas();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            $http.post("api/resposta_relate", $scope.resposta).success(function (data){
                 listarRespostas();
                 //delete $scope.resposta;//limpa o form
                $scope.resposta = {};//limpa o form
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.processandoInserir = false;
             }).error(function(data){
                $scope.mensagemInserir = "Ocorreu um erro!";
                $scope.processandoInserir = false;
             });
        }else{

            resposta.file = file;
            resposta.arquivo = arquivo;
            Upload.upload({
                url: 'api/resposta_relate',
                data: resposta,
                //data: {resposta: $scope.resposta, file: file, arquivo: arquivo},
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                console.log(response.data);
                delete $scope.resposta;//limpa o form
                $scope.picFile = null;//limpa o file
                $scope.fileArquivo = null;//limpa o file
                listarRespostas();
                $scope.mensagemInserir =  "Gravado com sucesso!";
            }, function (response) {
                console.log(response.data);
                if (response.status > 0){
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                //console.log(evt);
                // Math.min is to fix IE which reports 200% sometimes
                $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }

    };

    $scope.limparImagem = function(){
        delete $scope.picFile;
        $scope.form.file.$error.maxSize = false;
    };

    $scope.validar = function(valor) {
        //console.log(valor);
        if(valor===undefined){
            return "campo-obrigatorio";
        }
        return "";
    };
    /////////////////////////////////

    //EXCLUIR/////////////////////////
    $scope.respostaExcluir = function (id, titulo, imagem){
        $scope.idExcluir = id;
        $scope.tituloExcluir = titulo;
        $scope.imagemExcluir = imagem;
        $scope.excluido = false;
        $scope.mensagemExcluido = "";
    }

    $scope.excluir = function(id){
        $scope.processandoExcluir = true;
        $http({
            url: 'api/resposta_relate/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluir = false;
                $scope.excluido = true;
                $scope.mensagemExcluido = data.message;
                listarRespostas();
                return;
            }
            $scope.processandoExcluir = false;
            $scope.excluido = false;
            $scope.mensagemExcluido = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluir = false;
            $scope.mensagemExcluido = "Erro ao tentar excluir!";
        });
    };

    $scope.status = function(id_depoimento, statusAtual){
        let depoimentoStatus = {
            status: statusAtual === 0 ? 1 : 0
        }
        $http.put("api/depoimento/"+id_depoimento, depoimentoStatus).success(function (data){
            //console.log(data);
            listarDepoimentos();
        }).error(function(data){
            console.log(data);
        });
    }


}]);
