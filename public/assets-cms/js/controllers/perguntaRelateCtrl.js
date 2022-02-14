cmsApp.controller('perguntaRelateCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){


    $scope.pergunta = {
    };
    $scope.perguntas = [];
    $scope.tiposRespostas= {
        1: "Texto",
        2: "Alternativas"
    };
    $scope.dimensao = null;
    $scope.currentPage = 1;
    $scope.lastPage = 0;
    $scope.totalItens = 0;
    $scope.maxSize = 5;
    $scope.itensPerPage = 100;
    $scope.dadoPesquisa = '';
    $scope.campos = "id_pergunta, nome, tipo_resposta";
    $scope.campoPesquisa = "titulo";
    $scope.processandoListagem = false;
    $scope.processandoExcluir = false;
    $scope.ordem = "numero";
    $scope.sentidoOrdem = "asc";
    var $listar = false;//para impedir de carregar o conteúdo dos watchs no carregamento da página.

    $scope.$watch('currentPage', function(){
        if($listar){
            listarPerguntas();
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listarPerguntas();
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            listarPerguntas();
        }
    });

    var listarPerguntas = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/pergunta_relate',
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
            $scope.perguntas = data.data;
            let numeroMaximo = Math.max.apply(Math, $scope.perguntas.map(function(item) { return item.numero; }));
            $scope.pergunta.numero = numeroMaximo + 1;
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

        listarPerguntas();
    };

    $scope.validar = function(){

    };


    listarPerguntas();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            $http.post("api/pergunta_relate", $scope.pergunta).success(function (data){
                 listarPerguntas();
                 //delete $scope.pergunta;//limpa o form
                $scope.pergunta = {};//limpa o form
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.processandoInserir = false;
             }).error(function(data){
                $scope.mensagemInserir = "Ocorreu um erro!";
                $scope.processandoInserir = false;
             });
        }else{

            pergunta.file = file;
            pergunta.arquivo = arquivo;
            Upload.upload({
                url: 'api/pergunta_relate',
                data: pergunta,
                //data: {pergunta: $scope.pergunta, file: file, arquivo: arquivo},
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                console.log(response.data);
                delete $scope.pergunta;//limpa o form
                $scope.picFile = null;//limpa o file
                $scope.fileArquivo = null;//limpa o file
                listarPerguntas();
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
    $scope.perguntaExcluir = function (id, titulo, imagem){
        $scope.idExcluir = id;
        $scope.tituloExcluir = titulo;
        $scope.imagemExcluir = imagem;
        $scope.excluido = false;
        $scope.mensagemExcluido = "";
    }

    $scope.excluir = function(id){
        $scope.processandoExcluir = true;
        $http({
            url: 'api/pergunta_relate/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluir = false;
                $scope.excluido = true;
                $scope.mensagemExcluido = data.message;
                listarPerguntas();
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


    //ALTERNATIVAS////////////////////////////////////
    $scope.alternativa = {};
    $scope.dimensao = null;
    $scope.indicador = null;
    $scope.alternativas = [];
    $scope.totalAlternativas = 0;
    $scope.processandoDimensoes = false;
    $scope.processandoIndicadores = false;
    $scope.processandoInserirAlternativa = false;
    $scope.processandoListagemAlternativas = false;

    $scope.modalAlternativa = function (id, titulo){
        $scope.alternativa.id_pergunta = id;
        $scope.tituloAlternativa = titulo;
        $scope.listarAlternativas()
    }

    $scope.inserirAlternativa = function(){
        console.log($scope.alternativa);
        $scope.processandoInserirAlternativa= true;
        $scope.mensagemInserirAlternativa = "";
        $http.post("api/alternativa_relate", $scope.alternativa).success(function (data){
            $scope.listarAlternativas();
            $scope.mensagemInserirAlternativa =  "Gravado com sucesso!";
            $scope.processandoInserirAlternativa = false;
            $scope.alternativa.descricao = "";
        }).error(function(data){
            $scope.mensagemInserirAlternativa = "Ocorreu um erro!";
            $scope.processandoInserirAlternativa = false;
        });
    }

    $scope.listarAlternativas = function(){
        $scope.processandoListagemAlternativas = true;
        $http({
            url: 'api/alternativa_relate/perguntaRelate/'+$scope.alternativa.id_pergunta,
            //url: 'api/alternativa_relate/',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.alternativas = data.data;
            $scope.totalAlternativas = $scope.alternativas.length;
            $scope.processandoListagemAlternativas = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagemAlternativas = false;
        });
    }

    $scope.perguntaExcluirAlternativa = function (idAlternativa,  titulo){
        $scope.idExcluirAlternativa = idAlternativa;
        $scope.tituloExcluirAlternativa = titulo;
        $scope.excluidoAlternativa = false;
        $scope.mensagemExcluidoAlternativa = "";
    }

    $scope.excluirAlternativa = function(idAlternativa){
        $scope.processandoExcluirAlternativa = true;
        $http({
            url: 'api/alternativa_relate/'+idAlternativa,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluirAlternativa = false;
                $scope.excluidoAlternativa = true;
                $scope.mensagemExcluidoAlternativa = data.message;
                $scope.listarAlternativas();
                return;
            }
            $scope.processandoExcluirAlternativa = false;
            $scope.excluidoAlternativa = false;
            $scope.mensagemExcluidoAlternativa = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluirAlternativa = false;
            $scope.mensagemExcluidoAlternativa = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////


}]);
