<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Parceiro extends Model
{
    protected $fillable = [
        'imagem', 'titulo', 'descricao', 'url', 'posicao', 'cmsuser_id',
    ];
}
