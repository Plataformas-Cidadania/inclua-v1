<link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">

<div id="print"></div>

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








