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
	protected $table = 'avaliacao.link';
	public $timestamps = false;

	protected $casts = [
		'id_link' => 'int',
		'id_recurso' => 'int',
		'idioma' => 'character varying'
	];

	protected $fillable = [
		'uri',
		'idioma'
	];
	protected $with = ['recurso'];

	public function recurso()
	{
		return $this->belongsTo(Recurso::class, 'id_recurso');
	}
}
