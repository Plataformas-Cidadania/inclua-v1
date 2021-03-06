
<footer id="iniciodorodape" role="contentinfo" class="cel-footer d-print-none" >

    {{--CEL--}}
    <div class="menu-cel-footer bg-lgt menu-cel-login-hide" style="display: none;">
        <div id="menu-usuario-mobile"></div>
    </div>
    {{--CEL--}}
    <div class="footer-cel d-block d-sm-none">
        <div class="container">
            <div class="row">
                <div class="col-2 col-md-2 text-center">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <p><a href="/">Home</a></p>
                </div>
                <div class="col-2 col-md-2 text-center">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <p><a href="pre-diagnostico">Diagnóstico</a></p>
                </div>
                <div class="col-2 col-md-2 text-center">
                    <i class="fas fa-book" aria-hidden="true"></i>
                    <p><a href="recursos">Biblioteca</a></p>
                </div>
                <div class="col-2 col-md-2 text-center">
                    <i class="fas fa-address-card"></i>
                    <p><a href="curadoria">Curadoria</a></p>
                </div>
                <div class="col-2 col-md-2 text-center">
                    <i class="fas fa-hands-helping"></i>
                    <p><a href="contribua">Interaja</a></p>
                </div>
                <div class="col-2 col-md-2 text-center">
                    <i class="fa fa-paper-plane"></i>
                    <p><a href="contato">Contato</a></p>
                </div>
            </div>
        </div>
    </div>
    {{--CEL--}}

    <style>
        .menu-cel-footer{
            width: 100%;
            bottom:50px;
            position: fixed;
            padding: 6px 0 2px 0;
            border-top: solid 1px #CCCCCC;
            background-color: #FFFFFF;
            z-index: 9999999999;
        }
    </style>

    <div class="bg-lgt" style="position: relative;">
        {{----}}
        <div class="rp-menu" >
            <div class="container">
                <br>
                <div class="row">
                    <div class="col-md-4">
                        <div>
                            <h3>Sobre</h3>
                            <ul>
                                @foreach($mnPortal as $mn)
                                    <li><a href="{{$mn->slug}}">{{$mn->titulo}}</a></li>
                                @endforeach
                                    <br><br>
                            </ul>
                        </div>
                    </div>
                    {{--<div class="col-md-3">
                        <div>
                            <h3>Diagnóstico</h3>
                            <ul>
                                <li role="presentation"><a href="diagnostico" accesskey="h" @if($rota=='/') class="corrente " @endif>Completo</a></li>
                                <li role="presentation"><a href="diagnostico" accesskey="h" @if($rota=='/') class="corrente " @endif>Parcial</a></li>
                                <br><br>
                            </ul>
                        </div>
                    </div>--}}

                    <div class="col-md-4">
                        <div>
                            <h3>Inclua</h3>
                            <ul>
                                <li role="presentation"><a href="pre-diagnostico" >Diagnóstico</a></li>
                                <li><a href="guias">Guias</a></li>
                                <li role="presentation"><a href="recursos" >Biblioteca de recursos</a></li>
                                <li role="presentation"><a href="curadoria" >Curadoria</a></li>
                                <li role="presentation"><a href="contribua" >Interaja</a></li>
                                <br><br>
                            </ul>
                        </div>
                    </div>

                    @if($setting->twitter!="" || $setting->youtube!="" || $setting->facebook!="" || $setting->pinterest!="")
                        <div class="col-md-4">
                            <div>
                                <h3>Ajuda</h3>
                                <ul>
                                    <li role="presentation"><a href="contato" accesskey="a" @if($rota=='quem') class="contato" @endif>Contato</a></li>
                                    <li role="presentation"><a href="manual" >Manual INCLUA</a></li>
                                    <li role="presentation"><a href="mapa-do-site" >Mapa do site</a></li>
                                    <li role="presentation"><a href="acessibilidade" >Acessibilidade</a></li>
                                    <br><br>
                                </ul>
                            </div>
                        </div>
                    @endif

                </div>
            </div>

        </div>
        <br>
        <br>
        <br>

        <div>
            <a href="#iniciodoconteudo" class="link-to-menu bg-pri btn-circle rounded-circle">
                <p>Topo</p>
                <i class="fas fa-angle-up"></i>
            </a>
        </div>
    </div>
    {{--<div class="bg-pri">
        @if(env('APP_URL')!="http://mapa-osc-laravel.local/")
        <script defer="defer" src="//barra.brasil.gov.br/barra.js" type="text/javascript"></script>
        @endif
        <div id="footer-brasil"></div>
        <style>
            div#wrapper-barra-brasil {
                position: relative;
                margin: 0 auto;
                width: 100%;
                max-width: 1100px;
                height: 100%;
            }
        </style>
    </div>--}}


</footer>


