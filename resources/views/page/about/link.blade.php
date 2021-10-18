<?php $links = DB::table('urls')->where('status', 1)->orderBy('id', 'desc')->paginate(23);?>

<div class="row">
    @foreach($links as $key => $link)
        <div class="col-md-12">
            <div class="items-link">
                <a href="{{$link->url}}" target="_blank">
                    <picture>
                        <source srcset="imagens/urls/sm-{{$link->imagem}}" media="(max-width: 468px)">
                        <source srcset="imagens/urls/md-{{$link->imagem}}" media="(max-width: 768px)">
                        <source srcset="imagens/urls/lg-{{$link->imagem}}" class="img-responsive">
                        <img src="img/pre-img.gif" data-src="imagens/urls/lg-{{$link->imagem}}" alt="Imagem sobre {{$link->titulo}}" title="Imagem sobre {{$link->titulo}}" class="img-responsive lazyload">
                    </picture>
                    <h2>{{$link->titulo}}</h2>
                    {!! $link->descricao !!}
                    <hr>
                </a>
            </div>
        </div>
    @endforeach
</div>
<div>{{ $links->links() }}</div>

<style>
    .items-link h2{
        font-size: 18px;
        margin: 0;
    }
    .items-link img{
        width: 80px;
        float: left;
        border-radius: 50%;
        border: solid 3px #CCCCCC;
        margin-right: 15px;
    }
</style>
