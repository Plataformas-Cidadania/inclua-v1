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
 * @property Collection|RecursoCategoria[] $recurso_categoria
 *
 * @package App\Models
 */
class Categoria extends Model
{
	protected $table = 'avaliacao.categoria';
	protected $primaryKey = 'id_categoria';
	public $timestamps = false;

	protected $casts = [
		'id_categoria' => 'int',
		'nome' => 'string'
	];

	protected $fillable = [
		'nome'
	];

	public function recurso_categoria()
	{
		return $this->hasMany(RecursoCategoria::class, 'id_categoria');
	}
}
