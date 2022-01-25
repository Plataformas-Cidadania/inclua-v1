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
 * @property int $id_depoimentoresposta
 * @property string|null $descricao
 * @property int $status
 * @property int $icone
 * @property int $id_user
 *
 * @package App\Models
 */
class RespostaReDepoimento extends Model
{
    use Uuids;
	protected $table = 'avaliacao.depoimento';
	protected $primaryKey = 'id_depoimento';

	public $timestamps = false;

	protected $casts = [
		'id_resposta' => 'int',
		'descricao' => 'string',
		'status' => 'int',
		'icone' => 'int',
		'id_user' => 'int'
	];

	protected $fillable = [
		'descricao',
		'status',
		'icone',
        'id_user'
	];

	protected $with = ['id_user'];

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}
}
