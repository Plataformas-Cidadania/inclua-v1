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
                <x-label for="password" :value="__('Senha')" />
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
