var cmsApp = angular.module('cmsApp', ['ui.bootstrap', 'ui.tinymce', 'ngFileUpload'] ,['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
}]);

cmsApp.filter('trustAsHtml',['$sce', function($sce) {
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
