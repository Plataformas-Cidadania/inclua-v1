<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Resposta
 * 
 * @property int $id_resposta
 * @property int $pontuacao
 * @property int $pergunta_id_pergunta
 * @property int $pergunta_indicador_id_indicador
 * 
 * @property Perguntum $perguntum
 *
 * @package App\Models
 */
class Resposta extends Model
{
	protected $table = 'respostas';
	protected $primaryKey = 'id_resposta';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_resposta' => 'int',
		'pontuacao' => 'int',
		'pergunta_id_pergunta' => 'int',
		'pergunta_indicador_id_indicador' => 'int'
	];

	protected $fillable = [
		'pontuacao',
		'pergunta_id_pergunta',
		'pergunta_indicador_id_indicador'
	];

	public function perguntum()
	{
		return $this->belongsTo(Perguntum::class, 'pergunta_id_pergunta')
					->where('pergunta.id_pergunta', '=', 'respostas.pergunta_id_pergunta')
					->where('pergunta.indicador_id_indicador', '=', 'respostas.pergunta_id_pergunta')
					->where('pergunta.id_pergunta', '=', 'respostas.pergunta_indicador_id_indicador')
					->where('pergunta.indicador_id_indicador', '=', 'respostas.pergunta_indicador_id_indicador');
	}
}
