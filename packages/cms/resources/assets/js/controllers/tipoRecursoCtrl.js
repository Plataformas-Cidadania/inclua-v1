cmsApp.controller('tipoRecursoCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){


    $scope.tipoRecurso = {
        numero: 2,
        titulo: 'aaaa',
        descricao: 'aaaaaaaaaaa',
        vl_baixo: 1,
        vl_alto: 2,
    };
    $scope.tiposRecursos = [];
    $scope.dimensoes = [];
    $scope.dimensao = null;
    $scope.currentPage = 1;
    $scope.lastPage = 0;
    $scope.totalItens = 0;
    $scope.maxSize = 5;
    $scope.itensPerPage = 100;
    $scope.dadoPesquisa = '';
    $scope.campos = "id_tipo_recurso, nome";
    $scope.campoPesquisa = "titulo";
    $scope.processandoListagem = false;
    $scope.processandoExcluir = false;
    $scope.ordem = "numero";
    $scope.sentidoOrdem = "asc";
    var $listar = false;//para impedir de carregar o conteúdo dos watchs no carregamento da página.

    $scope.$watch('currentPage', function(){
        if($listar){
            listartiposRecursos();
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listartiposRecursos();
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            listartiposRecursos();
        }
    });


    var listartiposRecursos = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/tipo_recurso',
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
            $scope.tiposRecursos = data.data;
            let numeroMaximo = Math.max.apply(Math, $scope.tiposRecursos.map(function(item) { return item.numero; }));
            $scope.tipoRecurso.numero = numeroMaximo + 1;
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

        listartiposRecursos();
    };

    $scope.validar = function(){

    };


    listartiposRecursos();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            $http.post("api/tipo_recurso", $scope.tipoRecurso).success(function (data){
                 listartiposRecursos();
                 //delete $scope.tipoRecurso;//limpa o form
                $scope.tipoRecurso = {};//limpa o form
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.processandoInserir = false;
             }).error(function(data){
                $scope.mensagemInserir = "Ocorreu um erro!";
                $scope.processandoInserir = false;
             });
        }else{

            tipoRecurso.file = file;
            tipoRecurso.arquivo = arquivo;
            Upload.upload({
                url: 'api/tipo_recurso',
                data: tipoRecurso,
                //data: {tipoRecurso: $scope.tipoRecurso, file: file, arquivo: arquivo},
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                console.log(response.data);
                delete $scope.tipoRecurso;//limpa o form
                $scope.picFile = null;//limpa o file
                $scope.fileArquivo = null;//limpa o file
                listartiposRecursos();
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
            url: 'api/tipo_recurso/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluir = false;
                $scope.excluido = true;
                $scope.mensagemExcluido = data.message;
                listartiposRecursos();
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


}]);
