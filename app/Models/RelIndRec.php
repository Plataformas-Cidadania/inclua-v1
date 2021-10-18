<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RelIndRec
 * 
 * @property int $indicador_id_indicador
 * @property int $recurso_id_recurso
 * @property int $recurso_id_tipo_recurso
 * @property int $recurso_id_formato
 * 
 * @property Indicador $indicador
 * @property Recurso $recurso
 *
 * @package App\Models
 */
class RelIndRec extends Model
{
	protected $table = 'rel_ind_rec';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'indicador_id_indicador' => 'int',
		'recurso_id_recurso' => 'int',
		'recurso_id_tipo_recurso' => 'int',
		'recurso_id_formato' => 'int'
	];

	public function indicador()
	{
		return $this->belongsTo(Indicador::class, 'indicador_id_indicador');
	}

	public function recurso()
	{
		return $this->belongsTo(Recurso::class, 'recurso_id_recurso', 'formato_recurso_id_formato')
					->where('recurso.formato_recurso_id_formato', '=', 'rel_ind_rec.recurso_id_recurso')
					->where('recurso.id_recurso', '=', 'rel_ind_rec.recurso_id_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'rel_ind_rec.recurso_id_recurso')
					->where('recurso.formato_recurso_id_formato', '=', 'rel_ind_rec.recurso_id_tipo_recurso')
					->where('recurso.id_recurso', '=', 'rel_ind_rec.recurso_id_tipo_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'rel_ind_rec.recurso_id_tipo_recurso')
					->where('recurso.tipo_recurso_id_tipo_recurso', '=', 'rel_ind_rec.recurso_id_formato')
					->where('recurso.id_recurso', '=', 'rel_ind_rec.recurso_id_formato')
					->where('recurso.formato_recurso_id_formato', '=', 'rel_ind_rec.recurso_id_formato');
	}
}
