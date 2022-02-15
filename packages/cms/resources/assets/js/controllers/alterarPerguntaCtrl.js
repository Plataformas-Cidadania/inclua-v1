cmsApp.controller('alterarPerguntaCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.processandoSalvar = false;
    $scope.processandoDetalhar = false;

    $scope.perguntas = [];
    $scope.perguntaPai = null;
    $scope.id_pergunta = 0;
    $scope.dimensoes = [];
    $scope.dimensao = null;

    //ALTERAR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;

    $scope.mostrarForm = false;

    $scope.removerImagem = false;


    $scope.detalhar = function(id){
        $scope.processandoDetalhar = true;
        $http({
            url: 'api/pergunta/'+id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.pergunta = data.data;
            console.log($scope.pergunta);
            $scope.dimensoes.forEach(function (item){
                if(item.id_indicador === $scope.pergunta.id_indicador){
                    $scope.dimensao = item;
                }
            });
            $scope.listarPerguntas($scope.pergunta.id_indicador);
            $scope.processandoDetalhar = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoDetalhar = false;
        });
    };

    $scope.listarPerguntas = function(id_indicador){
        $http({
            url: 'api/pergunta/indicador/'+id_indicador,
            method: 'GET',
            params: {}
        }).success(function(data, status, headers, config){
            console.log(data.data);
            $scope.perguntas = data.data;
            console.log($scope.perguntas);
            console.log($scope.pergunta.id_perguntaPai);
            $scope.perguntaPai = $scope.perguntas.find(function(item){
                return item.id_pergunta === $scope.pergunta.id_perguntaPai;
            });
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    };

    $scope.alterar = function (file){

        if(file==null){

            $scope.processandoSalvar = true;
            //$scope.pergunta.id_indicador = $scope.dimensao.id_indicador;
            $http.put("api/pergunta/"+$scope.id, $scope.pergunta).success(function (data){
                //console.log(data);
                $scope.processandoSalvar = false;
                $scope.mensagemSalvar = data.message;
                $scope.removerImagem = false;
            }).error(function(data){
                //console.log(data);
                $scope.mensagemSalvar = "Ocorreu um erro: "+data;
                $scope.processandoSalvar = false;
            });

        }else{

            file.upload = Upload.upload({
                url: 'api/perguntas/'+$scope.id,
                data: {text: $scope.text, file: file},
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
                $scope.picFile = null;//limpa o form
                $scope.mensagemSalvar =  "Gravado com sucesso!";
                $scope.removerImagem = false;
                $scope.imagemBD = 'imagens/texts/'+response.data;
                console.log($scope.imagemDB);
            }, function (response) {
                if (response.status > 0){
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                //console.log(evt);
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });

        }

    };

    $scope.limparImagem = function(){
        $scope.picFile = null;
        $scope.imagemBD = null;
        $scope.removerImagem = true;
    };

    $scope.carregaImagem  = function(img) {
        if(img!=''){
            $scope.imagemBD = 'imagens/perguntas/xs-'+img;
            //console.log($scope.imagemBD);
        }
    };

    $scope.validar = function(valor) {
        if(valor===undefined && $scope.form.$dirty){
            return "campo-obrigatorio";
        }
        return "";
    };
    /////////////////////////////////



}]);
