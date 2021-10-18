<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Categorium
 * 
 * @property int $id_categoria
 * @property character varying|null $nome
 * 
 * @property Collection|RecursoCategorium[] $recurso_categoria
 *
 * @package App\Models
 */
class Categorium extends Model
{
	protected $table = 'categoria';
	protected $primaryKey = 'id_categoria';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_categoria' => 'int',
		'nome' => 'character varying'
	];

	protected $fillable = [
		'nome'
	];

	public function recurso_categoria()
	{
		return $this->hasMany(RecursoCategorium::class, 'categoria_id_categoria');
	}
}
