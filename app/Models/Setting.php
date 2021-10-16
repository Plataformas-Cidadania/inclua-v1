<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'imagem', 'email', 'titulo', 'rodape', 'cep', 'endereco', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'descricao_contato', 'telefone', 'telefone2', 'telefone3', 'facebook', 'youtube', 'pinterest', 'twitter', 'blog', 'instagram',
        'endereco_titulo', 'endereco_titulo2', 'cep2', 'endereco2', 'numero2', 'complemento2', 'bairro2', 'cidade2', 'estado2',
    ];
}