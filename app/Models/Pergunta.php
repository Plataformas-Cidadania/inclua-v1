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
 * @property string|null $nome
 * @property string|null $descricao
 * @property int $id_indicador
 * @property int|null $vl_minimo
 * @property int|null $vl_medio
 * @property int|null $vl_maximo
 *
 * @property Indicador $indicador
 * @property Collection|Resposta[] $respostas
 *
 * @package App\Models
 */
class Pergunta extends Model
{
	protected $table = 'avaliacao.pergunta';
	protected $primaryKey = 'id_pergunta';
	public $timestamps = false;

	protected $casts = [
		'id_pergunta' => 'int',
		'letra' => 'string',
		'descricao' => 'string',
        'legenda' => 'string',
		'vl_minimo' => 'int',
		'vl_maximo' => 'int',
        'tipo' => 'int',
        'nao_se_aplica' => 'boolean',
        'inverter' => 'boolean',
        'vl_subPergunta'=> 'int',
        'vl_perguntaPai'=> 'int',
        'id_perguntaPai' => 'int',
		'id_indicador' => 'int'
	];

	protected $fillable = [
		'letra',
		'descricao',
        'legenda',
		'vl_minimo',
		'vl_maximo',
		'tipo',
        'nao_se_aplica',
        'inverter',
        'vl_subPergunta',
        'vl_perguntaPai',
        'id_perguntaPai',
		'id_indicador'
	];
	protected $with = ['perguntas'];

	public function indicador()
	{
		return $this->belongsTo(Indicador::class, 'id_indicador');
	}
	public function perguntas()
	{
		return $this->hasMany(Pergunta::class, 'id_perguntaPai');
	}
	public function perguntaPai()
	{
		return $this->belongsTo(Pergunta::class, 'id_perguntaPai');
	}
	public function respostas()
	{
		return $this->hasMany(Resposta::class, 'id_pergunta');
	}
}
