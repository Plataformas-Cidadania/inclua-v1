<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Link
 * 
 * @property int $id_link
 * @property string|null $uri
 * @property int $recurso_id_recurso
 * @property int $recurso_tipo_recurso_id_tipo_recurso
 * @property int $recurso_formato_recurso_id_formato
 * @property character varying|null $idioma
 * 
 * @property Recurso $recurso
 *
 * @package App\Models
 */
class Link extends Model
{
	protected $table = 'link';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_link' => 'int',
		'recurso_id_recurso' => 'int',
		'recurso_tipo_recurso_id_tipo_recurso' => 'int',
		'recurso_formato_recurso_id_formato' => 'int',
		'idioma' => 'character varying'
	];

	protected $fillable = [
		'uri',
		'idioma'
	];

	public function recurso()
	{
		return $this->belongsTo(Recurso::class, 'recurso_id_recurso', 'formato_recurso_id_formato')
					->where('recurso.formato_recurso_id_formato', '=', 'link.recurso_id_recurso')
					->where('recurso.id_recurso', '=', 'link.recurso_id_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'link.recurso_id_recurso')
					->where('recurso.formato_recurso_id_formato', '=', 'link.recurso_tipo_recurso_id_tipo_recurso')
					->where('recurso.id_recurso', '=', 'link.recurso_tipo_recurso_id_tipo_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'link.recurso_tipo_recurso_id_tipo_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'link.recurso_formato_recurso_id_formato')
					->where('recurso.id_recurso', '=', 'link.recurso_formato_recurso_id_formato')
					->where('recurso.formato_recurso_id_formato', '=', 'link.recurso_formato_recurso_id_formato');
	}
}
