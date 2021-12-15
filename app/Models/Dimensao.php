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
 * @property string|null $nome
 *
 * @property Collection|Indicador[] $indicadors
 *
 * @package App\Models
 */
class Dimensao extends Model
{
	protected $table = 'avaliacao.dimensao';
	protected $primaryKey = 'id_dimensao';
	public $timestamps = false;

	protected $fillable = [
		'numero',
		'titulo',
		'descricao',
		'vl_baixo',
		'vl_alto'
	];
    protected $with = ['indicadores'];
	
	public function indicadores()
	{
        return $this->hasMany(Indicador::class, 'id_dimensao')->orderBy('numero');
	}
}
