cmsApp.controller('alterarDimensaoCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.processandoSalvar = false;
    $scope.processandoDetalhar = false;

    //ALTERAR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;

    $scope.mostrarForm = false;

    $scope.removerImagem = false;

    $scope.detalhar = function(id){
        $scope.processandoDetalhar = true;
        $http({
            url: 'api/dimensao/'+id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.dimensao = data.data;
            $scope.processandoDetalhar = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoDetalhar = false;
        });
    };

    $scope.alterar = function (file){

        if(file==null){

            $scope.processandoSalvar = true;
            let formData = new FormData();
            formData.append('numero', $scope.dimensao.numero);
            formData.append('titulo', $scope.dimensao.titulo);
            formData.append('descricao', $scope.dimensao.descricao);
            formData.append('vl_baixo', $scope.dimensao.vl_baixo);
            formData.append('vl_alto', $scope.dimensao.vl_alto);
            $http.put("api/dimensao/"+$scope.id, formData, {
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (data){
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
                url: 'api/dimensao/'+$scope.id,
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
            $scope.imagemBD = 'imagens/texts/xs-'+img;
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
