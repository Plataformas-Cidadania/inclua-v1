<?php $rota = Route::getCurrentRoute()->uri();?>

<div class="container">
    <div class="row">
        <div class="col-md-6 col-7">
            <ul class="group-btn">
                @if($rota!="contribua")
                <li class="btn btn-light">
                    <a href="contribua">
                        <i class="fas fa-home"></i>
                    </a>
                </li>

                {{--<li class="btn btn-light">
                    <a href="interaja">
                        <i class="far fa-hand-point-up"></i> <span class="float-end d-none d-sm-block ms-2"> Depoimento</span>
                    </a>
                </li>--}}
                <li class="btn btn-light">
                    <a href="compartilhe">
                        <i class="fas fa-share-alt"></i> <span class="float-end d-none d-sm-block ms-2"> Compartilhe</span>
                    </a>
                </li>
                <li class="btn btn-light">
                    <a href="relate">
                        <i class="fas fa-bullhorn"></i> <span class="float-end d-none d-sm-block ms-2"> Relate</span>
                    </a>
                </li>
                <li class="btn btn-light">
                    <a href="depoimento">
                        <i class="far fa-comment"></i> <span class="float-end d-none d-sm-block ms-2"> Depoimento</span>
                    </a>
                </li>
                @endif


            </ul>
            <br>
        </div>

        <div class="col-md-6 col-5">
            <!-- Authentication -->
            <form method="POST" action="{{ route('logout') }}"  style="float: right; margin-bottom: 20px;">
                @csrf
                Olá, <strong>{{auth()->user()->name}}!</strong>


                <x-responsive-nav-link :href="route('logout')"
                                       onclick="event.preventDefault();
                                        this.closest('form').submit();">
                    <strong class="float-end d-none d-sm-block ms-2">   {{ __('Sair') }} <i class="fas fa-sign-out-alt"></i></strong>
                </x-responsive-nav-link>
            </form>

        </div>
    </div>
</div>

{{--
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <!-- Authentication -->
            <form method="POST" action="{{ route('logout') }}" class="text-right">
                @csrf
                Olá, {{auth()->user()->name}}!
                <x-responsive-nav-link :href="route('logout')"
                                       onclick="event.preventDefault();
                                    this.closest('form').submit();">
                    <strong> {{ __('Sair') }}</strong>
                </x-responsive-nav-link>
            </form>
            <br>
        </div>
    </div>
</div>--}}
