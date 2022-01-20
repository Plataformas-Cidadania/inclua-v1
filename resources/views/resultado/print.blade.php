<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Imprimir diagnóstico</title>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>

    <div id="print"></div>
</body>
</html>

<style>

    @media print {
        .no-print {
            visibility: hidden;
        }
    }
</style>



@if(env('APP_ENV')==='local')
    <script src="js/react/react.development.js" crossorigin></script>
    <script src="js/react/react-dom.development.js" crossorigin></script>
@else
    <script src="js/react17/react.production.min.js" crossorigin></script>
    <script src="js/react17/react-dom.production.min.js" crossorigin></script>
@endif

<script src="js/axios.min.js"></script>

<script src="js/components/print/page.js"></script>
<script src="js/components/print/index.js"></script>








