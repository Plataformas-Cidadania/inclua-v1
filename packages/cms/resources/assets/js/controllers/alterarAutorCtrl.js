cmsApp.controller('alterarAutorCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.processandoSalvar = false;
    $scope.processandoDetalhar = false;


    //$scope.id_autor = 0;
    $scope.dimensoes = [];
    $scope.dimensao = null;

    //ALTERAR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;

    $scope.mostrarForm = false;

    $scope.removerImagem = false;


    $scope.detalhar = function(id){
        $scope.processandoDetalhar = true;
        $http({
            url: 'api/autores/'+id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.autor = data.data;
            console.log($scope.autor);
            $scope.dimensoes.forEach(function (item){
                if(item.id_dimensao === $scope.autor.id_dimensao){
                    $scope.dimensao = item;
                }
            });
            $scope.processandoDetalhar = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoDetalhar = false;
        });
    };

    $scope.alterar = function (file){

        if(file==null){

            $scope.processandoSalvar = true;
            $http.put("api/autores/"+$scope.id, $scope.autor).success(function (data){
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
                url: 'api/autores/'+$scope.id,
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
            $scope.imagemBD = 'imagens/autores/xs-'+img;
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
