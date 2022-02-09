<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class TipoRecurso
 *
 * @property int $id_tipo
 * @property string|null $descricao
 *
 * @property Collection|PerguntaRelate[] $perguntas_relate
 *
 * @package App\Models
 */
class TipoRecurso extends Model
{
	protected $table = 'avaliacao.tipo_pergunta_relate';
	protected $primaryKey = 'id_tipo';

	public $timestamps = false;

	protected $casts = [
		'id_tipo' => 'int',
		'descricao' => 'string'
	];

	protected $fillable = [
		'descricao'
	];

	public function perguntas()
	{
		return $this->hasMany(PerguntaRelate::class, 'id_tipo');
	}
}
