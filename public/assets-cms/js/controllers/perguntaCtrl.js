cmsApp.controller('perguntaCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.letras = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'aa','ab','ac','ad','ae','af','ag','ah','ai','aj','ak','al','am','an','ao','ap','aq','ar','as','at','au','av','aw','ax','ay','az',
        'ba','bb','bc','bd','be','bf','bg','bh','bi','bj','bk','bl','bm','bn','bo','bp','bq','br','bs','bt','bu','bv','bw','bx','by','bz',
        'ca','cb','cc','cd','ce','cf','cg','ch','ci','cj','ck','cl','cm','cn','co','cp','cq','cr','cs','ct','cu','cv','cw','cx','cy','cz',
        'da','db','dc','dd','de','df','dg','dh','di','dj','dk','dl','dm','dn','do','dp','dq','dr','ds','dt','du','dv','dw','dx','dy','dz',
        'ea','eb','ec','ed','ee','ef','eg','eh','ei','ej','ek','el','em','en','eo','ep','eq','er','es','et','eu','ev','ew','ex','ey','ez',
    ];

    $scope.pergunta = {
        numero: null,
        titulo: null,
        descricao: null,
    };
    $scope.id_indicador = 0;
    $scope.perguntaPai = null;
    $scope.perguntas = [];
    $scope.dimensoes = [];
    $scope.dimensao = null;
    $scope.currentPage = 1;
    $scope.lastPage = 0;
    $scope.totalItens = 0;
    $scope.maxSize = 5;
    $scope.itensPerPage = 100;
    $scope.dadoPesquisa = '';
    $scope.campos = "id_pergunta, letra, descricao";
    $scope.campoPesquisa = "titulo";
    $scope.processandoListagem = false;
    $scope.processandoExcluir = false;
    $scope.ordem = "numero";
    $scope.sentidoOrdem = "asc";
    var $listar = false;//para impedir de carregar o conteúdo dos watchs no carregamento da página.

    $scope.$watch('currentPage', function(){
        if($listar){
            $scope.listarPerguntas($scope.id_indicador);
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            $scope.listarPerguntas($scope.id_indicador);
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            $scope.listarPerguntas($scope.id_indicador);
        }
    });



    /*var listarDimensoes = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/dimensao',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            console.log(data.data);
            $scope.dimensoes = data.data;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }*/


    $scope.listarPerguntas = function(id_indicador){
        $scope.processandoListagem = true;
        $http({
            url: 'api/pergunta/indicador/'+id_indicador,
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
            //let letraMaxima = Math.max.apply(Math, $scope.perguntas.map(function(item) { return item.letra; }));
            let letras = $scope.perguntas.map(function(item) { return item.letra; });
            console.log(letras);
            letras = letras.filter((item) => {
                return item !== "zz" && isNaN(item);
            });
            let letraMaxima = letras.sort().pop();
            console.log(letras);
            console.log(letraMaxima);
            let indice = $scope.letras.indexOf(letraMaxima);
            console.log(indice);
            $scope.pergunta.letra = $scope.letras[indice+1];
            console.log($scope.pergunta.letra);
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

        $scope.listarPerguntas($scope.id_indicador);
    };

    $scope.validar = function(){

    };


    //listarPerguntas();
    //listarDimensoes();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        console.log($scope.pergunta);
        $scope.mensagemInserir = "";

        console.log($scope.perguntaPai);
        if($scope.perguntaPai){
            $scope.pergunta.id_perguntaPai = $scope.perguntaPai.id_pergunta;
        }

        //no caso de ser uma subpergunta o campo letra será um número com o próximo número das subperguntas da perguntaPai.
        console.log($scope.pergunta.id_perguntaPai);
        if($scope.pergunta.id_perguntaPai > 0){
            $scope.pergunta.vl_subPergunta = null;
            const subperguntas = $scope.perguntas.filter(function(item){
                return item.id_perguntaPai === $scope.pergunta.id_perguntaPai;
            })
            const numeros = subperguntas.map(function(item) { return parseInt(item.letra); });
            const numeroMaximo = numeros.sort().pop();
            $scope.pergunta.letra = (numeroMaximo+1).toString();
        }

        if($scope.pergunta.tipo == 3){
            $scope.pergunta.letra = "zz";
        }

        if(!$scope.pergunta.letra){
            $scope.pergunta.letra = "a";
        }

        console.log($scope.pergunta);

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            //$scope.pergunta.id_indicador = $scope.dimensao.id_indicador;
            $scope.pergunta.id_indicador = $scope.id_indicador;
            //console.log($scope.pergunta);
            $http.post("api/pergunta", $scope.pergunta).success(function (data){
                $scope.listarPerguntas($scope.id_indicador);
                 //delete $scope.pergunta;//limpa o form
                $scope.pergunta = {};//limpa o form
                $scope.perguntaPai = null;//limpa a seleção do select de perguntaPai
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
                url: 'api/pergunta',
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
                $scope.listarPerguntas($scope.id_indicador);
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
            url: 'api/pergunta/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluir = false;
                $scope.excluido = true;
                $scope.mensagemExcluido = data.message;
                $scope.listarPerguntas($scope.id_indicador);
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
