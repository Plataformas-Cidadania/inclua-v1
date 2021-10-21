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
	public $incrementing = true; // Marcar TRUE sempre que tiver um autoincrement na tabela
	public $timestamps = false;

	protected $fillable = [
		'nome',
		'descricao',
		'dimensao_id_dimensao'
	];

	protected $with = ['dimensao'];

	public function dimensao()
	{
		return $this->hasOne('App\Models\Dimensao', 'id_dimensao','dimensao_id_dimensao');
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
