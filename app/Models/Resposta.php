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
 * @property int $pontuacao
 * @property int $id_pergunta

 *
 * @property Pergunta $perguntum
 *
 * @package App\Models
 */
class Resposta extends Model
{
    use Uuids;
	protected $table = 'avaliacao.resposta';
	protected $primaryKey = 'id_resposta';

	public $timestamps = false;

	protected $casts = [
		'id_resposta' => 'string',
		'pontuacao' => 'int',
		'id_pergunta' => 'int',
		'id_diagnostico' => 'string'
	];

	protected $fillable = [
		'pontuacao',
		'id_pergunta',
        'id_diagnostico'
	];

	protected $with = ['pergunta'];
	public function pergunta()
	{
		return $this->belongsTo(Pergunta::class, 'id_pergunta');
	}
}
