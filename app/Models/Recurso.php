<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Recurso
 *
 * @property int $id_recurso
 * @property character varying|null $nome
 * @property timestamp without time zone|null $ultimo_acesso
 * @property character varying|null $esfera
 * @property int $id_tipo_recurso
 * @property int $id_formato
 *
 * @property TipoRecurso $tipo_recurso
 * @property FormatoRecurso $formato_recurso
 * @property Collection|Link[] $links
 * @property Collection|Autoria[] $autoria
 * @property Collection|Categorizacao[] $categorizacao
 * @property Collection|IndicacaoRec[] $indicacao
 *
 * @package App\Models
 */
class Recurso extends Model
{
	protected $table = 'avaliacao.recurso';
	public $timestamps = false;

	protected $casts = [
		'id_recurso' => 'int',
		'nome' => 'character varying',
		'ultimo_acesso' => 'timestamp without time zone',
		'esfera' => 'character varying'
	];

	protected $fillable = [
		'nome',
		'ultimo_acesso',
		'esfera'
	];

	protected $with = ['tipo_recurso', 'formato_recurso'];

	public function tipo_recurso()
	{
		return $this->belongsTo(TipoRecurso::class, 'id_tipo_recurso');
	}

	public function formato_recurso()
	{
		return $this->belongsTo(FormatoRecurso::class, 'id_formato');
	}

	public function links()
	{
		return $this->hasMany(Link::class, 'id_recurso');
	}

	public function autoria()
	{
		return $this->hasMany(Autoria::class, 'id_recurso');
	}

	public function categorizacao()
	{
		return $this->hasMany(Categorizacao::class, 'id_recurso');
	}

	public function indicacao()
	{
		return $this->hasMany(Indicacao::class, 'id_recurso');
	}
}