@extends('layout')
@section('title', 'Seja bem-vind@')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')








    <div class="space">&nbsp;</div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div id="nextOsc"></div>
            </div>
        </div>
    </div>

    <div style="background-color: #F9F9F9;">
        <br><br><br>

    </div>



    <div class="space">&nbsp;</div>


<script>

    $(document).ready(function() {
        var owl = $('.customMn');
        owl.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay:true,
            dots: true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            autoplayTimeout:15000,
            responsive: {
                0: {
                    items: 5
                },
                600: {
                    items: 8
                },
                1000: {
                    items: 4
                }
            }
        });
    })

</script>

@endsection
