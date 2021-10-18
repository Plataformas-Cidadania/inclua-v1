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
 * @property character varying|null $nome
 * 
 * @property Collection|Autorium[] $autoria
 *
 * @package App\Models
 */
class Autor extends Model
{
	protected $table = 'autor';
	protected $primaryKey = 'id_autor';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_autor' => 'int',
		'nome' => 'character varying'
	];

	protected $fillable = [
		'nome'
	];

	public function autoria()
	{
		return $this->hasMany(Autorium::class, 'autor_id_autor');
	}
}
