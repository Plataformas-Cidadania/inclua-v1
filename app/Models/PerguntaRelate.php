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
 *
 * @property string|null $descricao
 *
 * @property Collection|Resposta[] $respostas
 *
 * @package App\Models
 */
class PerguntaRelate extends Model
{
	protected $table = 'avaliacao.pergunta_relate';
	protected $primaryKey = 'id_pergunta';
	public $timestamps = false;

	protected $casts = [
		'id_pergunta' => 'int',
		'descricao' => 'string'
	];

	protected $fillable = [
		'descricao'
	];
	protected $with = ['respostas_relate'];

	public function respostas_relate()
	{
		return $this->hasMany(RespostaRelate::class, 'id_pergunta');
	}
}
