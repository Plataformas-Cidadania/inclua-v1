<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class TipoRecurso
 * 
 * @property int $id_tipo_recurso
 * @property character varying|null $nome
 * 
 * @property Collection|Recurso[] $recursos
 *
 * @package App\Models
 */
class TipoRecurso extends Model
{
	protected $table = 'tipo_recurso';
	protected $primaryKey = 'id_tipo_recurso';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_tipo_recurso' => 'int',
		'nome' => 'character varying'
	];

	protected $fillable = [
		'nome'
	];

	public function recursos()
	{
		return $this->hasMany(Recurso::class, 'tipo_recurso_id_tipo_recurso');
	}
}
