<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RecursoCategorium
 * 
 * @property int $categoria_id_categoria
 * @property int $recurso_id_recurso
 * @property int $recurso_id_tipo_recurso
 * @property int $recurso_id_formato
 * 
 * @property Categorium $categorium
 * @property Recurso $recurso
 *
 * @package App\Models
 */
class RecursoCategorium extends Model
{
	protected $table = 'recurso_categoria';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'categoria_id_categoria' => 'int',
		'recurso_id_recurso' => 'int',
		'recurso_id_tipo_recurso' => 'int',
		'recurso_id_formato' => 'int'
	];

	public function categorium()
	{
		return $this->belongsTo(Categorium::class, 'categoria_id_categoria');
	}

	public function recurso()
	{
		return $this->belongsTo(Recurso::class, 'recurso_id_recurso', 'formato_recurso_id_formato')
					->where('recurso.formato_recurso_id_formato', '=', 'recurso_categoria.recurso_id_recurso')
					->where('recurso.id_recurso', '=', 'recurso_categoria.recurso_id_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'recurso_categoria.recurso_id_recurso')
					->where('recurso.formato_recurso_id_formato', '=', 'recurso_categoria.recurso_id_tipo_recurso')
					->where('recurso.id_recurso', '=', 'recurso_categoria.recurso_id_tipo_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'recurso_categoria.recurso_id_tipo_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'recurso_categoria.recurso_id_formato')
					->where('recurso.id_recurso', '=', 'recurso_categoria.recurso_id_formato')
					->where('recurso.formato_recurso_id_formato', '=', 'recurso_categoria.recurso_id_formato');
	}
}
