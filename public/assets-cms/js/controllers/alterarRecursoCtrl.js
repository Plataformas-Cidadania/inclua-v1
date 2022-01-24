cmsApp.controller('alterarRecursoCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.processandoSalvar = false;
    $scope.processandoDetalhar = false;

    $scope.id_recurso = 0;
    $scope.tipos = [];
    $scope.formatos = [];
    $scope.tipo = null;
    $scope.formato = null;

    //ALTERAR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;

    $scope.mostrarForm = false;

    $scope.removerImagem = false;


    $scope.listarTipos = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/tipo_recurso',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.tipos = data.data;
            $scope.listarFormatos();
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }

    $scope.listarFormatos = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/formatorecurso',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.formatos = data.data;
            $scope.detalhar($scope.id_recurso);
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }

    $scope.listarTipos();

    $scope.detalhar = function(id){
        $scope.processandoDetalhar = true;
        $http({
            url: 'api/recurso/'+id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.recurso = data.data;
            //console.log($scope.recurso);
            delete $scope.recurso.ultimo_acesso;
            $scope.tipos.forEach(function (item){
                if(item.id_tipo_recurso === $scope.recurso.id_tipo_recurso){
                    $scope.tipo = item;
                }
            });
            $scope.formatos.forEach(function (item){
                if(item.id_formato === $scope.recurso.id_formato){
                    $scope.formato = item;
                }
            });
            $scope.processandoDetalhar = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoDetalhar = false;
        });
    };

    $scope.alterar = function (file){

        $scope.recurso.id_tipo_recurso = $scope.tipo.id_tipo_recurso;
        $scope.recurso.id_formato = $scope.formato.id_formato;

        if(file==null){

            $scope.processandoSalvar = true;
            $http.put("api/recurso/"+$scope.id, $scope.recurso).success(function (data){
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
                url: 'api/recurso/'+$scope.id,
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
            $scope.imagemBD = 'imagens/recursos/xs-'+img;
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
