<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Alternativa
 *
 * @property int $id_alternativa
 * @property string|null $descricao
 * @property int $status
 * @property int $id_pergunta
 * @property int $id_user
 *
 * @package App\Models
 */
class AlternativaRelate extends Model
{
	protected $table = 'avaliacao.alternativa_relate';
	protected $primaryKey = 'id_alternativa';

	public $timestamps = false;

	protected $casts = [
		'id_alternativa' => 'int',
		'descricao' => 'string',
		'outros' => 'int',
		'id_pergunta' => 'int'
	];

	protected $fillable = [
		'descricao',
		'outros',
		'id_pergunta'
	];

	protected $with = ['pergunta'];
	public function pergunta()
	{
		return $this->belongsTo(PerguntaRelate::class, 'id_pergunta');
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}
}
