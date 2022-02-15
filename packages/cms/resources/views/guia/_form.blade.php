
{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(guia.titulo) %>", 'ng-model'=>'guia.titulo', 'ng-required'=>'true', 'init-model'=>'guia.titulo', 'placeholder' => '']) !!}<br>

{!! Form::label('descricao', 'Descrição *') !!}<br>
{!! Form::textarea('descricao', null, ['class'=>"form-control width-grande <% validar(guia.descricao) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'guia.descricao', 'init-model'=>'guia.descricao']) !!}<br>
