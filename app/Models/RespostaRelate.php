<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Resposta
 *
 * @property int $id_resposta
 * @property string|null $descricao
 * @property int $status
 * @property int $id_pergunta
 * @property int $id_user
 *
 * @package App\Models
 */
class RespostaRelate extends Model
{
	protected $table = 'avaliacao.resposta_relate';
	protected $primaryKey = 'id_resposta';

	public $timestamps = false;

	protected $casts = [
		'id_resposta' => 'int',
		'descricao' => 'string',
		'status' => 'int',
		'id_pergunta' => 'int',
		'id_user' => 'int'
	];

	protected $fillable = [
		'descricao',
		'status',
		'id_pergunta',
        'id_user'
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
