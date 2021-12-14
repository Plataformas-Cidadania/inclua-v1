<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Dimensao
 *
 * @property int $id_diagnostico
 *
 * @property Collection|Resposta[] $respostas
 *
 * @package App\Models
 */
class Diagnostico extends Model
{
	protected $table = 'avaliacao.diagnostico';
	protected $primaryKey = '$id_diagnostico';

    protected $with = ['respostas'];
	public function indicadores()
	{
		return $this->hasMany(Resposta::class, '$id_diagnostico');
	}
}
