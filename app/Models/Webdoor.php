<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Webdoor extends Model
{
    protected $fillable = [
        'imagem', 'titulo', 'descricao', 'link', 'legenda', 'posicao', 'cmsuser_id',
    ];
}
