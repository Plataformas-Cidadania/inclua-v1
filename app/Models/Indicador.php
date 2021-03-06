<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Indicador
 *
 * @property int $id_indicador
 * @property string|null $nome
 * @property string|null $descricao
 * @property int $dimensao_id_dimensao
 *
 * @property Dimensao $dimensao
 * @property Collection|Pergunta[] $pergunta
 * @property Collection|Indicacao[] $rel_ind_recs
 * @property Collection|Risco[] $riscos
 *
 * @package App\Models
 */
class Indicador extends Model
{
	protected $table = 'avaliacao.indicador';
	protected $primaryKey = 'id_indicador';
	public $timestamps = false;

	protected $fillable = [
		'numero',
		'titulo',
		'descricao',
		'consequencia',
		'vl_baixo',
		'vl_alto',
		'id_dimensao'
	];

	protected $with = ['perguntas'];

	public function dimensao()
	{
		return $this->belongsTo(Dimensao::class, 'id_dimensao');
	}

	public function perguntas()
	{
		return $this->hasMany(Pergunta::class, 'id_indicador')->orderBy('letra');
	}

	public function recursos()
	{
		return $this->belongsToMany(Recurso::class, 'avaliacao.indicacao', 'id_indicador', 'id_recurso');
	}
}
