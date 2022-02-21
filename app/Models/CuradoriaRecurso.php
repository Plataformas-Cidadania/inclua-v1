<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Autorium
 *
 * @property int $id_curadoria
 * @property int $id_recurso
 *
 * @property Curadoria $curadoria
 * @property Recurso $recurso
 *
 * @package App\Models
 */
class CuradoriaRecurso extends Model
{
	protected $table = 'avaliacao.curadoria_recurso';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_curadoria' => 'int',
		'id_recurso' => 'int'
	];

	protected $fillable = [
		'id_curadoria',
		'id_recurso'
	];

//	protected $with = ['autor','recurso'];
	protected $with = ['recurso'];

	public function curadoria()
	{
		return $this->belongsTo(Autor::class, 'id_curadoria');
	}

	public function recurso()
	{
		return $this->belongsTo(Recurso::class, 'id_recurso');
	}
}
