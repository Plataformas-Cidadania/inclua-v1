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
 * @property string|null $nome
 *
 * @property Collection|Recurso[] $recursos
 *
 * @package App\Models
 */
class TipoRecurso extends Model
{
	protected $table = 'avaliacao.tipo_recurso';
	protected $primaryKey = 'id_tipo_recurso';

	public $timestamps = false;

	protected $casts = [
		'id_tipo_recurso' => 'int',
		'nome' => 'string'
	];

	protected $fillable = [
		'nome'
	];

	public function recursos()
	{
		return $this->hasMany(Recurso::class, 'id_tipo_recurso');
	}
}
