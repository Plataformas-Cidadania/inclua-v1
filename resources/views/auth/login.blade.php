<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo"></x-slot>

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <!-- Email Address -->
            <div>
                <x-label for="email" :value="__('E-mail')" />
                <br>

                <x-input id="email" class="block mt-1 w-full input100" type="email" name="email" :value="old('email')" required autofocus  placeholder="Ex.: seunome@gmail.com"/>
            </div>

            <!-- Password -->
            <div class="mt-4">
                <x-label for="password" :value="__('Password')" />
                <br>

                <x-input id="password" class="block mt-1 w-full input100"
                                type="password"
                                name="password"
                                required autocomplete="current-password" />
            </div>

            <!-- Remember Me -->
            <div class="block mt-4">
                <label for="remember_me" class="inline-flex items-center">
                    <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                    <span class="ml-2 text-sm text-gray-600">{{ __('lembrar minha senha') }}</span><br><br>
                </label>
                <br>

                <div class="dorder-container">
                    <x-button class="btn btn-theme bg-pri">
                        {{ __('Login') }}
                    </x-button>
                </div>

            </div>

            <div class="flex items-center justify-end mt-4 text-center">
                @if (Route::has('password.request'))
                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                        {{ __('Esqueceu sua senha?') }}
                    </a>
                @endif


            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
