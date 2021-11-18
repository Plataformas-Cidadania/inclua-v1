<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class FormatoRecurso
 *
 * @property int $id_formato
 * @property string|null $nome
 *
 * @property Collection|Recurso[] $recursos
 *
 * @package App\Models
 */
class FormatoRecurso extends Model
{
	protected $table = 'avaliacao.formato_recurso';
	protected $primaryKey = 'id_formato';
	public $timestamps = false;

	protected $casts = [
		'id_formato' => 'int',
		'nome' => 'string'
	];

	protected $fillable = [
		'nome'
	];

	public function recursos()
	{
		return $this->hasMany(Recurso::class, 'id_formato');
	}
}
