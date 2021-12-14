<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Risco
 *
 * @property int $id_risco
 * @property int|null $vl_alto
 * @property int|null $vl_baixo
 * @property int $id_indicador
 *
 * @property Indicador $indicador
 *
 * @package App\Models
 */
class Risco extends Model
{
	protected $table = 'avaliacao.risco';
	protected $primaryKey = 'id_risco';
	public $timestamps = false;

	protected $casts = [
		'id_risco' => 'int',
		'vl_alto' => 'int',
		'vl_baixo' => 'int',
		'id_indicador' => 'int'
	];

	protected $fillable = [
		'vl_alto',
		'vl_baixo',
		'id_indicador'
	];

	protected $with = ['indicador'];
}
