cmsApp.controller('curadoriaCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.curadoria = {
    };
    $scope.curadorias = [];
    $scope.curadores = [];
    $scope.curador = null;
    $scope.currentPage = 1;
    $scope.lastPage = 0;
    $scope.totalItens = 0;
    $scope.maxSize = 5;
    $scope.itensPerPage = 10;
    $scope.dadoPesquisa = '';
    $scope.campos = "id_curadoria, tema_recorte, mes";
    $scope.campoPesquisa = "tema_recorte";
    $scope.processandoListagem = false;
    $scope.processandoExcluir = false;
    $scope.ordem = "id_curadoria";
    $scope.sentidoOrdem = "asc";
    var $listar = false;//para impedir de carregar o conteúdo dos watchs no carregamento da página.

    $scope.$watch('currentPage', function(){
        if($listar){
            listarCuradorias();
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listarCuradorias();
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            if($scope.dadoPesquisa.length > 2 || $scope.dadoPesquisa.length === 0){
                listarCuradorias();
            }
        }
    });

    $scope.listarCuradores = function(){
        $http({
            url: 'api/curador',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.curadores = data.data;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }

    var listarCuradorias = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/curadoria/',
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
            $scope.curadorias = data.data;
            //$scope.lastPage = pesquisa ? 1 : data.last_page;
            $scope.totalItens = data.data.length;
            /*$scope.primeiroDaPagina = pesquisa ? 1 : data.from;
            $scope.ultimoDaPagina = pesquisa ? 1 : data.to;*/
            $listar = true;
            console.log($scope.curadorias);
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

        listarCuradorias();
    };

    $scope.validar = function(){

    };


    listarCuradorias();
    $scope.listarCuradores();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";

        $scope.curadoria.id_curador = $scope.curador.id_curador;

        //console.log($scope.curadoria);

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            $http.post("api/curadoria", $scope.curadoria).success(function (data){
                 listarCuradorias();
                 //delete $scope.curadoria;//limpa o form
                $scope.curadoria = {};//limpa o form
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.processandoInserir = false;
             }).error(function(data){
                $scope.mensagemInserir = "Ocorreu um erro!";
                $scope.processandoInserir = false;
             });
        }else{

            curadoria.file = file;
            curadoria.arquivo = arquivo;
            Upload.upload({
                url: 'api/curadoria',
                data: curadoria,
                //data: {curadoria: $scope.curadoria, file: file, arquivo: arquivo},
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                console.log(response.data);
                delete $scope.curadoria;//limpa o form
                $scope.picFile = null;//limpa o file
                $scope.fileArquivo = null;//limpa o file
                listarCuradorias();
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
            url: 'api/curadoria/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluir = false;
                $scope.excluido = true;
                $scope.mensagemExcluido = data.message;
                listarCuradorias();
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

    $scope.status = function(id_curadoria, statusAtual){
        let curadoriaStatus = {
            status: statusAtual === 0 ? 1 : 0
        }
        $http.put("api/curadoria/"+id_curadoria, curadoriaStatus).success(function (data){
            //console.log(data);
            listarCuradorias();
        }).error(function(data){
            console.log(data);
        });
    }

    //Curadoria Recurso////////////////////////////////////
    $scope.curadoria_recurso = {};
    $scope.dimensao = null;
    $scope.categoria = null;
    $scope.recursoCuradoria = [];
    $scope.totalRecursoCuradoria = 0;
    $scope.processandoRecursos = false;
    $scope.processandoInserircuradoria_recurso = false;
    $scope.processandoListagemRecursoCuradoria = false;

    $scope.listarRecursos = function(){
        $scope.processandoRecursos = true;
        $http({
            url: 'api/recurso',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.recursos = data.data;
            $scope.processandoRecursos = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoRecursos = false;
        });
    }

    $scope.getRecursos = function(id_recurso){
        let recurso = $scope.recursos.find(function(item){
            return item.id_recurso === id_recurso;
        });
        return recurso.nome;
    }

    $scope.getCuradoria = function(id_curadoria){
        let curadoria = $scope.curadorias.find(function(item){
            return item.id_curadoria === id_curadoria;
        });
        return curadoria.nome;
    }


    $scope.modalCuradoriaRecurso = function (id, titulo){
        $scope.curadoria_recurso.id_curadoria = id;
        $scope.titulocuradoria_recurso = titulo;
        $scope.listarRecursos();
        $scope.listarRecursoCuradoria();
    }

    $scope.inserircuradoria_recurso = function(){
        console.log($scope.curadoria_recurso);
        $scope.processandoInserircuradoria_recurso= true;
        $scope.mensagemInserircuradoria_recurso = "";
        $scope.curadoria_recurso.id_categoria = $scope.categoria.id_categoria;
        $http.post("api/curadoria_recurso", $scope.curadoria_recurso).success(function (data){
            $scope.listarRecursoCuradoria();
            $scope.mensagemInserircuradoria_recurso =  "Gravado com sucesso!";
            $scope.processandoInserircuradoria_recurso = false;
            //$scope.curadoria_recurso = {};
        }).error(function(data){
            $scope.mensagemInserircuradoria_recurso = "Ocorreu um erro!";
            $scope.processandoInserircuradoria_recurso = false;
        });
    }

    $scope.listarRecursoCuradoria = function(){
        $scope.processandoListagemRecursoCuradoria = true;
        $http({
            url: 'api/curadoria_recurso/'+$scope.curadoria_recurso.id_curadoria,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.recursoCuradoria = data.data;
            $scope.totalRecursoCuradoria = $scope.recursoCuradoria.length;
            $scope.processandoListagemRecursoCuradoria = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagemRecursoCuradoria = false;
        });
    }

    $scope.perguntaExcluircuradoria_recurso = function (idCategoria, idCuradoria, titulo){
        $scope.idExcluircuradoria_curadoriaRecurso = idCategoria;
        $scope.idExcluircuradoria_recursoCuradoria = idCuradoria;
        $scope.tituloExcluircuradoria_recurso = titulo;
        $scope.excluidocuradoria_recurso = false;
        $scope.mensagemExcluidocuradoria_recurso = "";
    }

    $scope.excluircuradoria_recurso = function(idCategoria, idCuradoria){
        $scope.processandoExcluircuradoria_recurso = true;
        $http({
            url: 'api/curadoria_recurso/'+idCategoria+'/'+idCuradoria,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluircuradoria_recurso = false;
                $scope.excluidocuradoria_recurso = true;
                $scope.mensagemExcluidocuradoria_recurso = data.message;
                $scope.listarRecursoCuradoria();
                return;
            }
            $scope.processandoExcluircuradoria_recurso = false;
            $scope.excluidocuradoria_recurso = false;
            $scope.mensagemExcluidocuradoria_recurso = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluircuradoria_recurso = false;
            $scope.mensagemExcluidocuradoria_recurso = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////




}]);
