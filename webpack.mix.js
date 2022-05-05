const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
/*mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
);*/

/*JS*/
mix.scripts([
    'node_modules/@fortawesome/fontawesome-free/js/all.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/jquery-animate-scroll/dist/jquery.animate-scroll.js',
    'node_modules/jquery-smoove/dist/jquery.smoove.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/lazysizes/lazysizes.js',
    'node_modules/pace-js/pace.min.js',
    'resources/js/utils.js',
], 'public/js/app.js');

mix.scripts([
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
], 'public/js/home.js');

mix.scripts([
    'node_modules/prop-types/prop-types.js',
    'node_modules/react-apexcharts/dist/react-apexcharts.js',
    'node_modules/react-apexcharts/dist/react-apexcharts.iife.min.js',
], 'public/js/chart.js');

mix.scripts([
    'node_modules/leaflet/dist/leaflet.js',
    'node_modules/leaflet.markercluster/dist/leaflet.markercluster.js',
    'node_modules/leaflet.fullscreen/Control.FullScreen.js',
    'node_modules/leaflet.heat/dist/leaflet-heat.js',
], 'public/js/leaflet.js');

/*CSS*/
mix.styles([
    'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
], 'public/css/home.css');

mix.styles([
    'node_modules/leaflet/dist/leaflet.css',
    'node_modules/leaflet.markercluster/dist/MarkerCluster.css',
    'node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css',
    'node_modules/leaflet.fullscreen/Control.FullScreen.css',
], 'public/css/leaflet.css')

    .sass('resources/sass/app.scss', 'public/css');


//CMS///////////////////////////////////////////////////////////////////
//css npm install less-loader less --save-dev --production=false
mix.less('packages/cms/resources/assets/less/cms.less', 'public/assets-cms/css/cms.css');
mix.styles('packages/cms/resources/assets/css/sb-admin.css', 'public/assets-cms/css/sb-admin.css');
mix.styles('packages/cms/resources/assets/css/circle.css', 'public/assets-cms/css/circle.css');

//App angular
mix.scripts('packages/cms/resources/assets/js/cms.js', 'public/assets-cms/js/cms.js');

mix.scripts('packages/cms/resources/assets/js/tiny.js', 'public/assets-cms/js/tiny.js');

mix.scripts('packages/cms/resources/assets/js/utils.js', 'public/assets-cms/js/utils.js');

//Directives
mix.scripts('packages/cms/resources/assets/js/directives/initModel.js', 'public/assets-cms/js/directives/initModel.js');

//Controllers

//Webdoor
mix.scripts('packages/cms/resources/assets/js/controllers/webdoorCtrl.js', 'public/assets-cms/js/controllers/webdoorCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarWebdoorCtrl.js', 'public/assets-cms/js/controllers/alterarWebdoorCtrl.js');

//Tipos
mix.scripts('packages/cms/resources/assets/js/controllers/tipoCtrl.js', 'public/assets-cms/js/controllers/tipoCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarTipoCtrl.js', 'public/assets-cms/js/controllers/alterarTipoCtrl.js');

//Modulos
mix.scripts('packages/cms/resources/assets/js/controllers/moduloCtrl.js', 'public/assets-cms/js/controllers/moduloCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarModuloCtrl.js', 'public/assets-cms/js/controllers/alterarModuloCtrl.js');

//Guias
mix.scripts('packages/cms/resources/assets/js/controllers/guiaCtrl.js', 'public/assets-cms/js/controllers/guiaCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarGuiaCtrl.js', 'public/assets-cms/js/controllers/alterarGuiaCtrl.js');

//Items Modulos
mix.scripts('packages/cms/resources/assets/js/controllers/itemCtrl.js', 'public/assets-cms/js/controllers/itemCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarItemCtrl.js', 'public/assets-cms/js/controllers/alterarItemCtrl.js');

//Apoios
//mix.scripts('packages/cms/resources/assets/js/controllers/apoioCtrl.js', 'public/assets-cms/js/controllers/apoioCtrl.js');
//mix.scripts('packages/cms/resources/assets/js/controllers/alterarApoioCtrl.js', 'public/assets-cms/js/controllers/alterarApoioCtrl.js');

//Items Modulos
mix.scripts('packages/cms/resources/assets/js/controllers/itemCtrl.js', 'public/assets-cms/js/controllers/itemCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarItemCtrl.js', 'public/assets-cms/js/controllers/alterarItemCtrl.js');

//CmsUsers
mix.scripts('packages/cms/resources/assets/js/controllers/cmsUserCtrl.js', 'public/assets-cms/js/controllers/cmsUserCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarCmsUserCtrl.js', 'public/assets-cms/js/controllers/alterarCmsUserCtrl.js');

//Users
mix.scripts('packages/cms/resources/assets/js/controllers/userCtrl.js', 'public/assets-cms/js/controllers/userCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarUserCtrl.js', 'public/assets-cms/js/controllers/alterarUserCtrl.js');

//Text
mix.scripts('packages/cms/resources/assets/js/controllers/textCtrl.js', 'public/assets-cms/js/controllers/textCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarTextCtrl.js', 'public/assets-cms/js/controllers/alterarTextCtrl.js');

//Link
mix.scripts('packages/cms/resources/assets/js/controllers/urlCtrl.js', 'public/assets-cms/js/controllers/urlCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarUrlCtrl.js', 'public/assets-cms/js/controllers/alterarUrlCtrl.js');

//Settings
mix.scripts('packages/cms/resources/assets/js/controllers/alterarSettingCtrl.js', 'public/assets-cms/js/controllers/alterarSettingCtrl.js');

//Parceiros
mix.scripts('packages/cms/resources/assets/js/controllers/parceiroCtrl.js', 'public/assets-cms/js/controllers/parceiroCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarParceiroCtrl.js', 'public/assets-cms/js/controllers/alterarParceiroCtrl.js');

//Dimensoes
mix.scripts('packages/cms/resources/assets/js/controllers/dimensaoCtrl.js', 'public/assets-cms/js/controllers/dimensaoCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarDimensaoCtrl.js', 'public/assets-cms/js/controllers/alterarDimensaoCtrl.js');

//Indicadores
mix.scripts('packages/cms/resources/assets/js/controllers/indicadorCtrl.js', 'public/assets-cms/js/controllers/indicadorCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarIndicadorCtrl.js', 'public/assets-cms/js/controllers/alterarIndicadorCtrl.js');

//Perguntas
mix.scripts('packages/cms/resources/assets/js/controllers/perguntaCtrl.js', 'public/assets-cms/js/controllers/perguntaCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarPerguntaCtrl.js', 'public/assets-cms/js/controllers/alterarPerguntaCtrl.js');

//Autores
mix.scripts('packages/cms/resources/assets/js/controllers/autorCtrl.js', 'public/assets-cms/js/controllers/autorCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarAutorCtrl.js', 'public/assets-cms/js/controllers/alterarAutorCtrl.js');

//Categorias
mix.scripts('packages/cms/resources/assets/js/controllers/categoriaCtrl.js', 'public/assets-cms/js/controllers/categoriaCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarCategoriaCtrl.js', 'public/assets-cms/js/controllers/alterarCategoriaCtrl.js');

//Formato Recurso
mix.scripts('packages/cms/resources/assets/js/controllers/formatoRecursoCtrl.js', 'public/assets-cms/js/controllers/formatoRecursoCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarFormatoRecursoCtrl.js', 'public/assets-cms/js/controllers/alterarFormatoRecursoCtrl.js');

//Tipo Recurso
mix.scripts('packages/cms/resources/assets/js/controllers/tipoRecursoCtrl.js', 'public/assets-cms/js/controllers/tipoRecursoCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarTipoRecursoCtrl.js', 'public/assets-cms/js/controllers/alterarTipoRecursoCtrl.js');

//Recursos
mix.scripts('packages/cms/resources/assets/js/controllers/recursoCtrl.js', 'public/assets-cms/js/controllers/recursoCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarRecursoCtrl.js', 'public/assets-cms/js/controllers/alterarRecursoCtrl.js');

//Links
mix.scripts('packages/cms/resources/assets/js/controllers/linkCtrl.js', 'public/assets-cms/js/controllers/linkCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarLinkCtrl.js', 'public/assets-cms/js/controllers/alterarLinkCtrl.js');

//Perguntas Relate
mix.scripts('packages/cms/resources/assets/js/controllers/perguntaRelateCtrl.js', 'public/assets-cms/js/controllers/perguntaRelateCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarPerguntaRelateCtrl.js', 'public/assets-cms/js/controllers/alterarPerguntaRelateCtrl.js');

//Respostas Relate
mix.scripts('packages/cms/resources/assets/js/controllers/respostaRelateCtrl.js', 'public/assets-cms/js/controllers/respostaRelateCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarRespostaRelateCtrl.js', 'public/assets-cms/js/controllers/alterarRespostaRelateCtrl.js');

//Depoimento
mix.scripts('packages/cms/resources/assets/js/controllers/depoimentoCtrl.js', 'public/assets-cms/js/controllers/depoimentoCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarDepoimentoCtrl.js', 'public/assets-cms/js/controllers/alterarDepoimentoCtrl.js');

//Curadoria
mix.scripts('packages/cms/resources/assets/js/controllers/curadoriaCtrl.js', 'public/assets-cms/js/controllers/curadoriaCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarCuradoriaCtrl.js', 'public/assets-cms/js/controllers/alterarCuradoriaCtrl.js');

//Curadores
mix.scripts('packages/cms/resources/assets/js/controllers/curadorCtrl.js', 'public/assets-cms/js/controllers/curadorCtrl.js');
mix.scripts('packages/cms/resources/assets/js/controllers/alterarCuradorCtrl.js', 'public/assets-cms/js/controllers/alterarCuradorCtrl.js');

//FIM CMS///////////////////////////////////////////////////////////////////
