cmsApp.controller('relateUsuarioCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){


    $scope.relate = {
    };
    $scope.showRelate = 0;
    $scope.relates = [];
    $scope.user_id = 0;
    $scope.tipos = [];
    $scope.tipo = null;
    $scope.formatos = [];
    $scope.formato = null;
    $scope.currentPage = 1;
    $scope.lastPage = 0;
    $scope.totalItens = 0;
    $scope.maxSize = 5;
    $scope.itensPerPage = 10;
    $scope.dadoPesquisa = '';
    $scope.campos = "id_relate, nome";
    $scope.campoPesquisa = "titulo";
    $scope.processandoListagem = false;
    $scope.processandoExcluir = false;
    $scope.ordem = "id_relate";
    $scope.sentidoOrdem = "asc";
    var $listar = false;//para impedir de carregar o conteúdo dos watchs no carregamento da página.

    $scope.$watch('currentPage', function(){
        if($listar){
            listarRelates();
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listarRelates();
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            if($scope.dadoPesquisa.length > 2 || $scope.dadoPesquisa.length === 0){
                listarRelates();
            }
        }
    });
    $scope.$watch('user_id', function(){
        console.log('watch user_id', $scope.user_id);
        if($scope.user_id > 0){
            listarRelates();
        }
    });

    var listarRelates = function(){
        $scope.processandoListagem = true;

        if(!$scope.user_id > 0){
            return;
        }
        let url = 'cms/busca_relates/usuario/'+$scope.user_id;
        $http({
            url: url,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.montarArrayRelates(data);
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagem = false;
        });
    };



    var listarRelates= function(){
        $scope.processandoListagem = true;

        if(!$scope.user_id > 0){
            return;
        }
        let url = 'cms/busca_relates/usuario/'+$scope.user_id;
        $http({
            url: url,
            method: 'GET',
            params: {
                /*page: $scope.currentPage,
                itensPorPagina: $scope.itensPerPage,
                dadoPesquisa: $scope.dadoPesquisa,
                campos: $scope.campos,
                campoPesquisa: $scope.campoPesquisa,
                ordem: $scope.ordem,
                sentido: $scope.sentidoOrdem*/
            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.relates = data;
            $scope.lastPage = 1;
            $scope.totalItens = data.length;
            $scope.primeiroDaPagina = 1
            $scope.ultimoDaPagina = 1;
            $listar = true;

            $scope.relates.forEach((item) => {
                var dataInput = item.created_at.slice(0, 10);
                let date = new Date(dataInput);
                item.dataFormatada = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
            })

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

        listarRelates();
    };

    $scope.validar = function(){

    };


    listarRelates();


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
            url: 'api/relate/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluir = false;
                $scope.excluido = true;
                $scope.mensagemExcluido = data.message;
                listarRelates();
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

    $scope.status = function(id_relate, statusAtual){
        let relateStatus = {
            status: statusAtual === 0 ? 1 : 0
        }
        $http.put("api/relate/"+id_relate, relateStatus).success(function (data){
            //console.log(data);
            listarRelates();
        }).error(function(data){
            console.log(data);
        });
    }


}]);
