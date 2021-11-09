<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Perguntum
 * 
 * @property int $id_pergunta
 * @property character varying|null $nome
 * @property string|null $descricao
 * @property int $id_indicador
 * @property int|null $vl_minimo
 * @property int|null $vl_medio
 * @property int|null $vl_maximo
 * 
 * @property Indicador $indicador
 * @property Collection|Resposta[] $respostas
 *
 * @package App\Models
 */
class Pergunta extends Model
{
	protected $table = 'avaliacao.pergunta';
	public $timestamps = false;

	protected $casts = [
		'id_pergunta' => 'int',
		'nome' => 'character varying',
		'id_indicador' => 'int',
		'vl_minimo' => 'int',
		'vl_medio' => 'int',
		'vl_maximo' => 'int'
	];

	protected $fillable = [
		'nome',
		'descricao',
		'vl_minimo',
		'vl_medio',
		'vl_maximo'
	];
	
	protected $with = ['indicador'];

	public function indicador()
	{
		return $this->belongsTo(Indicador::class, 'id_indicador');
	}

	public function respostas()
	{
		return $this->hasMany(Resposta::class, 'id_pergunta');
	}
}
