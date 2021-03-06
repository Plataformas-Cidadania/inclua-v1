<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Autor
 *
 * @property int $id_autor
 * @property string|null $nome
 *
 * @package App\Models
 */
class Autor extends Model
{
	protected $table = 'avaliacao.autor';
	protected $primaryKey = 'id_autor';
    public $timestamps = false;
	protected $casts = [
		'id_autor' => 'int',
		'nome' => 'string'
	];

	protected $fillable = [
		'nome'
	];

	public function autoria()
	{
		return $this->hasMany(Autoria::class, 'id_autor');
	}
}
