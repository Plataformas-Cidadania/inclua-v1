<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Autorium
 * 
 * @property int $autor_id_autor
 * @property int $recurso_id_recurso
 * @property int $recurso_id_tipo_recurso
 * @property int $recurso_formato_recurso_id_formato
 * 
 * @property Autor $autor
 * @property Recurso $recurso
 *
 * @package App\Models
 */
class Autorium extends Model
{
	protected $table = 'autoria';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'autor_id_autor' => 'int',
		'recurso_id_recurso' => 'int',
		'recurso_id_tipo_recurso' => 'int',
		'recurso_formato_recurso_id_formato' => 'int'
	];

	public function autor()
	{
		return $this->belongsTo(Autor::class, 'autor_id_autor');
	}

	public function recurso()
	{
		return $this->belongsTo(Recurso::class, 'recurso_id_recurso', 'formato_recurso_id_formato')
					->where('recurso.formato_recurso_id_formato', '=', 'autoria.recurso_id_recurso')
					->where('recurso.id_recurso', '=', 'autoria.recurso_id_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'autoria.recurso_id_recurso')
					->where('recurso.formato_recurso_id_formato', '=', 'autoria.recurso_id_tipo_recurso')
					->where('recurso.id_recurso', '=', 'autoria.recurso_id_tipo_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'autoria.recurso_id_tipo_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'autoria.recurso_formato_recurso_id_formato')
					->where('recurso.id_recurso', '=', 'autoria.recurso_formato_recurso_id_formato')
					->where('recurso.formato_recurso_id_formato', '=', 'autoria.recurso_formato_recurso_id_formato');
	}
}
