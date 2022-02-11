{{--{{$text_concede_direitos = \App\Models\Text::where('slug', 'concede_direitos')->first()}}
{{$text_termo = \App\Models\Text::where('slug', 'termo')->first()}}--}}
<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo"></x-slot>

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('register') }}">
            @csrf

            <!-- Name -->
            <div>
                <x-label for="name" :value="__('Nome')" />
                <br>

                <x-input id="name" class="block mt-1 w-full input100" type="text" name="name" :value="old('name')" required autofocus placeholder="Ex.: seunome@gmail.com" />
            </div>

            <!-- Email Address -->
            <div class="mt-4">
                <x-label for="email" :value="__('E-mail')" />
                <br>

                <x-input id="email" class="block mt-1 w-full input100" type="email" name="email" :value="old('email')" required />
            </div>

            <!-- Password -->
            <div class="mt-4">
                <x-label for="password" :value="__('Senha mínimo 8 caracteres')" />
                <br>

                <x-input id="password" class="block mt-1 w-full input100"
                                type="password"
                                name="password"
                                required autocomplete="new-password" />
            </div>

            <!-- Confirm Password -->
            <div class="mt-4">
                <x-label for="password_confirmation" :value="__('Confirmar senha')" />

                <x-input id="password_confirmation" class="block mt-1 w-full input100"
                                type="password"
                                name="password_confirmation" required />
            </div>


            <div class="mt-4">
                <x-label for="telefone" :value="__('Telefone')" />
                <br>

                <x-input id="telefone" class="block mt-1 w-full input100" type="text" name="telefone" :value="old('telefone')" required />
            </div>


            <div class="mt-4">
                <x-label for="cidade" :value="__('Cidade')" />
                <br>

                <x-input id="cidade" class="block mt-1 w-full input100" type="text" name="cidade" :value="old('cidade')" required />
            </div>

            <div class="mt-4">
                <x-label for="estado" :value="__('Estado')" />
                <br>

                <x-input id="estado" class="block mt-1 w-full input100" type="text" name="estado" :value="old('estado')" required />
            </div>

            <div class="mt-4">
                <x-label for="pais" :value="__('País')" />
                <br>

                <x-input id="pais" class="block mt-1 w-full input100" type="text" name="pais" :value="old('pais')" required />
            </div>


            <div class="mt-4">
                <x-input type="checkbox" id="concede_direitos"   name="concede_direitos" :value="old('Aceito o termo')"  required style="width: 25px; height: 25px;"/>
                {{--<x-label for="concede_direitos" :value="__('Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito neste ')"
                         style="float: left;" />--}}
                <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="cursor" >
                    {!! $text_concede_direitos->descricao !!}
                    <strong>Termo de Uso</strong>
                </div>



                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{{$text_termo->titulo}}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>{!! $text_termo->descricao !!}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div class="flex items-center justify-end mt-4">
                {{--<a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                    {{ __('Already registered?') }}
                </a>--}}

                <div class="dorder-container">
                    <x-button class="btn btn-theme bg-pri">
                        {{ __('Register') }}
                    </x-button>
                </div>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
