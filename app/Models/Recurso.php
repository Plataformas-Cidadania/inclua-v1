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
 * @property int $tipo_recurso_id_tipo_recurso
 * @property int $formato_recurso_id_formato
 * 
 * @property TipoRecurso $tipo_recurso
 * @property FormatoRecurso $formato_recurso
 * @property Collection|Link[] $links
 * @property Collection|Autorium[] $autoria
 * @property Collection|RecursoCategorium[] $recurso_categoria
 * @property Collection|RelIndRec[] $rel_ind_recs
 *
 * @package App\Models
 */
class Recurso extends Model
{
	protected $table = 'recurso';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_recurso' => 'int',
		'nome' => 'character varying',
		'ultimo_acesso' => 'timestamp without time zone',
		'esfera' => 'character varying',
		'tipo_recurso_id_tipo_recurso' => 'int',
		'formato_recurso_id_formato' => 'int'
	];

	protected $fillable = [
		'nome',
		'ultimo_acesso',
		'esfera'
	];

	public function tipo_recurso()
	{
		return $this->belongsTo(TipoRecurso::class, 'tipo_recurso_id_tipo_recurso');
	}

	public function formato_recurso()
	{
		return $this->belongsTo(FormatoRecurso::class, 'formato_recurso_id_formato');
	}

	public function links()
	{
		return $this->hasMany(Link::class, 'recurso_id_recurso', 'formato_recurso_id_formato');
	}

	public function autoria()
	{
		return $this->hasMany(Autorium::class, 'recurso_id_recurso', 'formato_recurso_id_formato');
	}

	public function recurso_categoria()
	{
		return $this->hasMany(RecursoCategorium::class, 'recurso_id_recurso', 'formato_recurso_id_formato');
	}

	public function rel_ind_recs()
	{
		return $this->hasMany(RelIndRec::class, 'recurso_id_recurso', 'formato_recurso_id_formato');
	}
}
