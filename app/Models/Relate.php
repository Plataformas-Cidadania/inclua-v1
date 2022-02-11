<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
/**
 * Class Dimensao
 *
 * @property int $id_relate
 *
 * @property Collection|Relate[] $Relate
 *
 * @package App\Models
 */
class Relate extends Model
{
    use Uuids;
	protected $table = 'avaliacao.relate';
	protected $primaryKey = 'id_relate';
    protected $with = ['resposta'];
	public function resposta()
	{
		return $this->hasMany(RespostaRelate::class, 'id_relate');
	}
}
