cmsApp.controller('curadoriaCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){


    $scope.curadoria = {
    };
    $scope.curadorias = [];
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
    $scope.campos = "id_curadoria, nome";
    $scope.campoPesquisa = "titulo";
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

    var listarTipos = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/tipo_curadoria',
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
            url: 'api/formatocuradoria',
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

    var listarCuradorias = function(){
        $scope.processandoListagem = true;
        let pesquisa = false;
        let url = 'api/curadoria/paginado/'+$scope.itensPerPage+'?page='+$scope.currentPage;
        if($scope.dadoPesquisa){
            pesquisa = true;
            url = 'api/busca_curadorias/palavra_chave/'+$scope.dadoPesquisa;
        }
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
            $scope.curadorias = data.data;
            $scope.lastPage = pesquisa ? 1 : data.last_page;
            $scope.totalItens = pesquisa ? data.data.length : data.total;
            $scope.primeiroDaPagina = pesquisa ? 1 : data.from;
            $scope.ultimoDaPagina = pesquisa ? 1 : data.to;
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
    listarTipos();
    listarFormatos();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";

        let date = new Date();
        $scope.curadoria.ultimo_acesso = date.getFullYear()+"-"+
            ((date.getMonth()+1).toString().padStart(2, "0"))+"-"+
            (date.getDate().toString().padStart(2, "0"))+" "+
            (date.getHours().toString().padStart(2, "0"))+":"+
            (date.getMinutes().toString().padStart(2, "0"))+":"+
            (date.getSeconds().toString().padStart(2, "0"));

        $scope.curadoria.id_tipo_curadoria = $scope.tipo.id_tipo_curadoria;
        $scope.curadoria.id_formato = $scope.formato.id_formato;

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

    //CATEGORIZAÇÃO////////////////////////////////////
    $scope.recurso_categoria = {};
    $scope.dimensao = null;
    $scope.categoria = null;
    $scope.recursoCuradoria = [];
    $scope.totalRecursoCuradoria = 0;
    $scope.processandoDimensoes = false;
    $scope.processandoCategorias = false;
    $scope.processandoInserirRecurso_categoria = false;
    $scope.processandoListagemRecursoCuradoria = false;

    $scope.listarRecursos = function(){
        $scope.processandoCategorias = true;
        $http({
            url: 'api/recurso',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.categorias = data.data;
            $scope.processandoCategorias = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoCategorias = false;
        });
    }

    $scope.getCategoria = function(id_categoria){
        let categoria = $scope.categorias.find(function(item){
            return item.id_categoria === id_categoria;
        });
        return categoria.nome;
    }

    $scope.getCuradoria = function(id_curadoria){
        let curadoria = $scope.curadorias.find(function(item){
            return item.id_curadoria === id_curadoria;
        });
        return curadoria.nome;
    }

    $scope.modalRecurso_categoria = function (id, titulo){
        $scope.recurso_categoria.id_curadoria = id;
        $scope.tituloRecurso_categoria = titulo;
        $scope.listarCategorias();
        $scope.listarRecursoCuradoria();
    }

    $scope.inserirRecurso_categoria = function(){
        console.log($scope.recurso_categoria);
        $scope.processandoInserirRecurso_categoria= true;
        $scope.mensagemInserirRecurso_categoria = "";
        $scope.recurso_categoria.id_categoria = $scope.categoria.id_categoria;
        $http.post("api/recurso_categoria", $scope.recurso_categoria).success(function (data){
            $scope.listarRecursoCuradoria();
            $scope.mensagemInserirRecurso_categoria =  "Gravado com sucesso!";
            $scope.processandoInserirRecurso_categoria = false;
            //$scope.recurso_categoria = {};
        }).error(function(data){
            $scope.mensagemInserirRecurso_categoria = "Ocorreu um erro!";
            $scope.processandoInserirRecurso_categoria = false;
        });
    }

    $scope.listarRecursoCuradoria = function(){
        $scope.processandoListagemRecursoCuradoria = true;
        $http({
            url: 'api/recurso_categoria/'+$scope.recurso_categoria.id_curadoria,
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

    $scope.perguntaExcluirRecurso_categoria = function (idCategoria, idCuradoria, titulo){
        $scope.idExcluirRecurso_categoriaCategoria = idCategoria;
        $scope.idExcluirRecurso_categoriaCuradoria = idCuradoria;
        $scope.tituloExcluirRecurso_categoria = titulo;
        $scope.excluidoRecurso_categoria = false;
        $scope.mensagemExcluidoRecurso_categoria = "";
    }

    $scope.excluirRecurso_categoria = function(idCategoria, idCuradoria){
        $scope.processandoExcluirRecurso_categoria = true;
        $http({
            url: 'api/recurso_categoria/'+idCategoria+'/'+idCuradoria,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluirRecurso_categoria = false;
                $scope.excluidoRecurso_categoria = true;
                $scope.mensagemExcluidoRecurso_categoria = data.message;
                $scope.listarRecursoCuradoria();
                return;
            }
            $scope.processandoExcluirRecurso_categoria = false;
            $scope.excluidoRecurso_categoria = false;
            $scope.mensagemExcluidoRecurso_categoria = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluirRecurso_categoria = false;
            $scope.mensagemExcluidoRecurso_categoria = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////




}]);
