cmsApp.controller('recursoCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){


    $scope.recurso = {
    };
    $scope.recursos = [];
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
            if($scope.dadoPesquisa.length > 2 || $scope.dadoPesquisa.length === 0){
                listarRecursos();
            }
        }
    });
    $scope.$watch('user_id', function(){
        console.log('watch user_id', $scope.user_id);
        if($scope.user_id > 0){            
            listarRecursos();           
        }
    });




    var listarTipos = function(){
        //$scope.processandoListagem = true;
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
        //$scope.processandoListagem = true;
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
        let pesquisa = false;
        let url = 'api/recurso/paginado/'+$scope.itensPerPage+'?page='+$scope.currentPage;
        if($scope.dadoPesquisa){
            pesquisa = true;
            url = 'api/busca_recursos/palavra_chave/'+$scope.dadoPesquisa;
        }
        console.log('user_id', $scope.user_id);


        if($scope.user_id > 0){
            url = 'api/busca_recursos/usuario/'+$scope.user_id;
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
            $scope.recursos = data.data;
            if($scope.user_id > 0){                
                $scope.lastPage = 1;
                $scope.totalItens = data.data.length;
                $scope.primeiroDaPagina = 1
                $scope.ultimoDaPagina = 1;
                $listar = true;
                console.log($scope.recursos);
                $scope.processandoListagem = false;
                return;
            }
            $scope.lastPage = pesquisa ? 1 : data.last_page;
            $scope.totalItens = pesquisa ? data.data.length : data.total;
            $scope.primeiroDaPagina = pesquisa ? 1 : data.from;
            $scope.ultimoDaPagina = pesquisa ? 1 : data.to;
            $listar = true;
            console.log($scope.recursos);
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

    $scope.status = function(id_recurso, statusAtual){
        let recursoStatus = {
            status: statusAtual === 0 ? 1 : 0
        }
        $http.put("api/recurso/"+id_recurso, recursoStatus).success(function (data){
            //console.log(data);
            listarRecursos();
        }).error(function(data){
            console.log(data);
        });
    }

    //INDICAÇÃO////////////////////////////////////
    $scope.indicacao = {};
    $scope.dimensao = null;
    $scope.indicador = null;
    $scope.indicacoes = [];
    $scope.totalIndicacoes = 0;
    $scope.processandoDimensoes = false;
    $scope.processandoIndicadores = false;
    $scope.processandoInserirIndicacao = false;
    $scope.processandoListagemIndicacoes = false;
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

    $scope.modalIndicacao = function (id, titulo){
        $scope.indicacao.id_recurso = id;
        $scope.tituloIndicacao = titulo;
        $scope.listarDimensoes();
        $scope.listarIndicacoes();
    }

    $scope.inserirIndicacao = function(){
        console.log($scope.indicacao);
        $scope.processandoInserirIndicacao= true;
        $scope.mensagemInserirIndicacao = "";
        $scope.indicacao.id_indicador = $scope.indicador.id_indicador;
        $http.post("api/indicacao", $scope.indicacao).success(function (data){
            $scope.listarIndicacoes();
            $scope.mensagemInserirIndicacao =  "Gravado com sucesso!";
            $scope.processandoInserirIndicacao = false;
            //$scope.indicacao = {};
        }).error(function(data){
            $scope.mensagemInserirIndicacao = "Ocorreu um erro!";
            $scope.processandoInserirIndicacao = false;
        });
    }

    $scope.listarIndicacoes = function(){
        $scope.processandoListagemIndicacoes = true;
        $http({
            url: 'api/indicacao/'+$scope.indicacao.id_recurso,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.indicacoes = data.data;
            $scope.totalIndicacoes = $scope.indicacoes.length;
            $scope.processandoListagemIndicacoes = false;
        }).error(function(data){
            $scope.indicacoes = [];
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagemIndicacoes = false;
        });
    }

    $scope.perguntaExcluirIndicacao = function (idIndicador, idRecurso, titulo){
        $scope.idExcluirIndicacaoIndicador = idIndicador;
        $scope.idExcluirIndicacaoRecurso = idRecurso;
        $scope.tituloExcluirIndicacao = titulo;
        $scope.excluidoIndicacao = false;
        $scope.mensagemExcluidoIndicacao = "";
    }

    $scope.excluirIndicacao = function(idIndicador, idRecurso){
        $scope.processandoExcluirIndicacao = true;
        $http({
            url: 'api/indicacao/'+idIndicador+'/'+idRecurso,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluirIndicacao = false;
                $scope.excluidoIndicacao = true;
                $scope.mensagemExcluidoIndicacao = data.message;
                $scope.listarIndicacoes();
                return;
            }
            $scope.processandoExcluirIndicacao = false;
            $scope.excluidoIndicacao = false;
            $scope.mensagemExcluidoIndicacao = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluirIndicacao = false;
            $scope.mensagemExcluidoIndicacao = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////

    //CATEGORIZAÇÃO////////////////////////////////////
    $scope.categorizacao = {};
    $scope.dimensao = null;
    $scope.categoria = null;
    $scope.categorizacoes = [];
    $scope.totalCategorizacoes = 0;
    $scope.processandoDimensoes = false;
    $scope.processandoCategorias = false;
    $scope.processandoInserirCategorizacao = false;
    $scope.processandoListagemCategorizacoes = false;

    $scope.listarCategorias = function(){
        $scope.processandoCategorias = true;
        $http({
            url: 'api/categoria',
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

    $scope.getRecurso = function(id_recurso){
        let recurso = $scope.recursos.find(function(item){
            return item.id_recurso === id_recurso;
        });
        return recurso.nome;
    }

    $scope.modalCategorizacao = function (id, titulo){
        $scope.categorizacao.id_recurso = id;
        $scope.tituloCategorizacao = titulo;
        $scope.listarCategorias();
        $scope.listarCategorizacoes();
    }

    $scope.inserirCategorizacao = function(){
        console.log($scope.categorizacao);
        $scope.processandoInserirCategorizacao= true;
        $scope.mensagemInserirCategorizacao = "";
        $scope.categorizacao.id_categoria = $scope.categoria.id_categoria;
        $http.post("api/categorizacao", $scope.categorizacao).success(function (data){
            $scope.listarCategorizacoes();
            $scope.mensagemInserirCategorizacao =  "Gravado com sucesso!";
            $scope.processandoInserirCategorizacao = false;
            //$scope.categorizacao = {};
        }).error(function(data){
            $scope.mensagemInserirCategorizacao = "Ocorreu um erro!";
            $scope.processandoInserirCategorizacao = false;
        });
    }

    $scope.listarCategorizacoes = function(){
        $scope.processandoListagemCategorizacoes = true;
        $http({
            url: 'api/categorizacao/'+$scope.categorizacao.id_recurso,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.categorizacoes = data.data;
            $scope.totalCategorizacoes = $scope.categorizacoes.length;
            $scope.processandoListagemCategorizacoes = false;
        }).error(function(data){
            $scope.categorizacoes = [];
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagemCategorizacoes = false;
        });
    }

    $scope.perguntaExcluirCategorizacao = function (idCategoria, idRecurso, titulo){
        $scope.idExcluirCategorizacaoCategoria = idCategoria;
        $scope.idExcluirCategorizacaoRecurso = idRecurso;
        $scope.tituloExcluirCategorizacao = titulo;
        $scope.excluidoCategorizacao = false;
        $scope.mensagemExcluidoCategorizacao = "";
    }

    $scope.excluirCategorizacao = function(idCategoria, idRecurso){
        $scope.processandoExcluirCategorizacao = true;
        $http({
            url: 'api/categorizacao/'+idCategoria+'/'+idRecurso,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluirCategorizacao = false;
                $scope.excluidoCategorizacao = true;
                $scope.mensagemExcluidoCategorizacao = data.message;
                $scope.listarCategorizacoes();
                return;
            }
            $scope.processandoExcluirCategorizacao = false;
            $scope.excluidoCategorizacao = false;
            $scope.mensagemExcluidoCategorizacao = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluirCategorizacao = false;
            $scope.mensagemExcluidoCategorizacao = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////


    //AUTORIA////////////////////////////////////
    $scope.autoria = {};
    $scope.dimensao = null;
    $scope.autor = null;
    $scope.autorias = [];
    $scope.totalAutorias = 0;
    $scope.processandoAutores = false;
    $scope.processandoInserirAutoria = false;
    $scope.processandoListagemAutorias = false;

    $scope.listarAutores = function(){
        $scope.processandoAutores = true;
        $http({
            url: 'api/autores',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.autores = data.data;
            $scope.processandoAutores = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoAutores = false;
        });
    }

    $scope.getAutor = function(id_autor){
        let autor = $scope.autores.find(function(item){
            return item.id_autor === id_autor;
        });
        return autor.nome;
    }

    $scope.getRecurso = function(id_recurso){
        let recurso = $scope.recursos.find(function(item){
            return item.id_recurso === id_recurso;
        });
        return recurso.nome;
    }

    $scope.modalAutoria = function (id, titulo){
        $scope.autoria.id_recurso = id;
        $scope.tituloAutoria = titulo;
        $scope.listarAutores();
        $scope.listarAutorias();
    }

    $scope.inserirAutoria = function(){
        console.log($scope.autoria);
        $scope.processandoInserirAutoria= true;
        $scope.mensagemInserirAutoria = "";
        $scope.autoria.id_autor = $scope.autor.id_autor;
        $http.post("api/autoria", $scope.autoria).success(function (data){
            $scope.listarAutorias();
            $scope.mensagemInserirAutoria =  "Gravado com sucesso!";
            $scope.processandoInserirAutoria = false;
            //$scope.autoria = {};
        }).error(function(data){
            $scope.mensagemInserirAutoria = "Ocorreu um erro!";
            $scope.processandoInserirAutoria = false;
        });
    }



    $scope.listarAutorias = function(){
        $scope.processandoListagemAutorias = true;
        $http({
            url: 'api/recurso/autores/'+$scope.autoria.id_recurso,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.autorias = data.data;
            $scope.totalAutorias = $scope.autorias.length;
            $scope.processandoListagemAutorias = false;
        }).error(function(data){
            $scope.autorias = [];
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagemAutorias = false;
        });
    }

    $scope.perguntaExcluirAutoria = function (idAutor, idRecurso, titulo){
        $scope.idExcluirAutoriaAutor = idAutor;
        $scope.idExcluirAutoriaRecurso = idRecurso;
        $scope.tituloExcluirAutoria = titulo;
        $scope.excluidoAutoria = false;
        $scope.mensagemExcluidoAutoria = "";
    }

    $scope.excluirAutoria = function(idAutor, idRecurso){
        $scope.processandoExcluirAutoria = true;
        $http({
            url: 'api/autoria/'+idAutor+'/'+idRecurso,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluirAutoria = false;
                $scope.excluidoAutoria = true;
                $scope.mensagemExcluidoAutoria = data.message;
                $scope.listarAutorias();
                return;
            }
            $scope.processandoExcluirAutoria = false;
            $scope.excluidoAutoria = false;
            $scope.mensagemExcluidoAutoria = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluirAutoria = false;
            $scope.mensagemExcluidoAutoria = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////

}]);
