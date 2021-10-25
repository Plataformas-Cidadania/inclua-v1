<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Autorium
 * 
 * @property int $id_autor
 * @property int $id_recurso
 * @property int $id_tipo_recurso
 * @property int $id_formato
 * 
 * @property Autor $autor
 * @property Recurso $recurso
 *
 * @package App\Models
 */
class Autoria extends Model
{
	protected $table = 'avaliacao.autoria';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_autor' => 'int',
		'id_recurso' => 'int'
	];

	protected $fillable = [
		'id_autor',
		'id_recurso'
	];

	public function autor()
	{
		return $this->belongsTo(Autor::class, 'id_autor');
	}

	public function recurso()
	{
		return $this->belongsTo(Recurso::class, 'id_recurso');
	}
}
