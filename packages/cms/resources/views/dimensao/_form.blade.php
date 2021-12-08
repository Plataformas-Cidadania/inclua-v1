{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(dimensao.titulo) %>", 'ng-model'=>'dimensao.titulo', 'ng-required'=>'true', 'init-model'=>'dimensao.titulo', 'placeholder' => '']) !!}<br>
