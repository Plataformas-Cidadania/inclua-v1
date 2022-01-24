cmsApp.controller('recursoCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){


    $scope.recurso = {

    };
    $scope.recursos = [];
    $scope.tipos = [];
    $scope.tipo = null;
    $scope.formatos = [];
    $scope.formato = null;
    $scope.currentPage = 1;
    $scope.lastPage = 0;
    $scope.totalItens = 0;
    $scope.maxSize = 5;
    $scope.itensPerPage = 100;
    $scope.dadoPesquisa = '';
    $scope.campos = "id_recurso, nome";
    $scope.campoPesquisa = "titulo";
    $scope.processandoListagem = false;
    $scope.processandoExcluir = false;
    $scope.ordem = "id_recurso";
    $scope.sentidoOrdem = "asc";
    var $listar = false;//para impedir de carregar o conteúdo dos watchs no carregamento da página.

    $scope.$watch('currentPage', function(){
        if($listar){
            listarRecursos();
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listarRecursos();
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            listarRecursos();
        }
    });


    var listarTipos = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/tipo_recurso',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.tipos = data.data;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }


    var listarFormatos = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/formatorecurso',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.formatos = data.data;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }

    var listarRecursos = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/recurso',
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
            $scope.recursos = data.data;
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

        listarRecursos();
    };

    $scope.validar = function(){

    };


    listarRecursos();
    listarTipos();
    listarFormatos();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";

        let date = new Date();
        $scope.recurso.ultimo_acesso = date.getFullYear()+"-"+
            ((date.getMonth()+1).toString().padStart(2, "0"))+"-"+
            (date.getDate().toString().padStart(2, "0"))+" "+
            (date.getHours().toString().padStart(2, "0"))+":"+
            (date.getMinutes().toString().padStart(2, "0"))+":"+
            (date.getSeconds().toString().padStart(2, "0"));

        $scope.recurso.id_tipo_recurso = $scope.tipo.id_tipo_recurso;
        $scope.recurso.id_formato = $scope.formato.id_formato;

        //console.log($scope.recurso);

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            $http.post("api/recurso", $scope.recurso).success(function (data){
                 listarRecursos();
                 //delete $scope.recurso;//limpa o form
                $scope.recurso = {};//limpa o form
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.processandoInserir = false;
             }).error(function(data){
                $scope.mensagemInserir = "Ocorreu um erro!";
                $scope.processandoInserir = false;
             });
        }else{

            recurso.file = file;
            recurso.arquivo = arquivo;
            Upload.upload({
                url: 'api/recurso',
                data: recurso,
                //data: {recurso: $scope.recurso, file: file, arquivo: arquivo},
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                console.log(response.data);
                delete $scope.recurso;//limpa o form
                $scope.picFile = null;//limpa o file
                $scope.fileArquivo = null;//limpa o file
                listarRecursos();
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
            url: 'api/recurso/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluir = false;
                $scope.excluido = true;
                $scope.mensagemExcluido = data.message;
                listarRecursos();
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

    //INDICAÇÃO////////////////////////////////////
    $scope.indicacao = {};
    $scope.dimensao = null;
    $scope.indicador = null;
    $scope.processandoDimensoes = false;
    $scope.processandoIndicadores = false;
    $scope.processandoInserirIndicacao = false;
    $scope.listarDimensoes = function(){
        $scope.processandoDimensoes = true;
        $http({
            url: 'api/dimensao',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.dimensoes = data.data;
            $scope.processandoDimensoes = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoDimensoes = false;
        });
    }

    $scope.listarIndicadores = function(id_dimensao){
        $scope.processandoIndicadores = true;
        $http({
            url: 'api/indicadores/dimensao/'+id_dimensao,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.indicadores = data.data;
            $scope.processandoIndicadores = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoIndicadores = false;
        });
    }

    $scope.indicacao = function (id, titulo){
        $scope.indicacao.id_recurso = id;
        $scope.tituloIndicacao = titulo;
        $scope.listarDimensoes();
    }

    $scope.inserirIndicacao = function(){
        $scope.processandoInserirIndicacao= true;
        $scope.mensagemInserirIndicacao = "";
        $scope.indicacao.id_indicacao = $scope.indicador.id_indicador;
        $http.post("api/indicacao", $scope.indicacao).success(function (data){
            listarRecursos();
            $scope.mensagemInserirIndicacao =  "Gravado com sucesso!";
            $scope.processandoInserirIndicacao = false;
            $scope.indicacao = {};
        }).error(function(data){
            $scope.mensagemInserirIndicacao = "Ocorreu um erro!";
            $scope.processandoInserirIndicacao = false;
        });
    }

    ///////////////////////////////////////////////


}]);
