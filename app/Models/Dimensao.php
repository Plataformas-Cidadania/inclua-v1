<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Dimensao
 * 
 * @property int $id_dimensao
 * @property character varying|null $nome
 * 
 * @property Collection|Indicador[] $indicadors
 *
 * @package App\Models
 */
class Dimensao extends Model
{
	protected $table = 'dimensao';
	protected $primaryKey = 'id_dimensao';
	public $incrementing = false;
	public $timestamps = false;


	protected $fillable = [
		'nome'
	];

	public function indicadors()
	{
		return $this->hasMany(Indicador::class, 'dimensao_id_dimensao');
	}
}
