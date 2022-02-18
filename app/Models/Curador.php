<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Curador
 *
 * @property int $id_curador
 * @property string|null $nome
 * @property string|null $url_imagem
 * @property string|null $minicv
 * @property string|null $link_curriculo
 * @package App\Models
 */
class Curador extends Model
{
	protected $table = 'avaliacao.curador';
	protected $primaryKey = 'id_curador';
    public $timestamps = false;
	protected $casts = [
		'id_curador' => 'int',
		'nome' => 'string',
        'url_imagem' => 'string',
        'minicv' => 'string',
        'link_curriculo' => 'string'
	];

	protected $fillable = [
		'nome',
        'url_imagem',
        'minicv',
        'link_curriculo'
	];

	public function curadoria()
	{
		return $this->hasMany(Curadoria::class, 'id_curador');
	}
}
