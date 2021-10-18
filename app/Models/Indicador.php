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
 * @property character varying|null $nome
 * @property string|null $descricao
 * @property int $dimensao_id_dimensao
 * 
 * @property Dimensao $dimensao
 * @property Collection|Perguntum[] $pergunta
 * @property Collection|RelIndRec[] $rel_ind_recs
 * @property Collection|Risco[] $riscos
 *
 * @package App\Models
 */
class Indicador extends Model
{
	protected $table = 'indicador';
	protected $primaryKey = 'id_indicador';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_indicador' => 'int',
		'nome' => 'character varying',
		'dimensao_id_dimensao' => 'int'
	];

	protected $fillable = [
		'nome',
		'descricao',
		'dimensao_id_dimensao'
	];

	public function dimensao()
	{
		return $this->belongsTo(Dimensao::class, 'dimensao_id_dimensao');
	}

	public function pergunta()
	{
		return $this->hasMany(Perguntum::class, 'indicador_id_indicador');
	}

	public function rel_ind_recs()
	{
		return $this->hasMany(RelIndRec::class, 'indicador_id_indicador');
	}

	public function riscos()
	{
		return $this->hasMany(Risco::class, 'indicador_id_indicador');
	}
}
