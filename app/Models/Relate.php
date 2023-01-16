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
	protected $table = 'avaliacao.relate';
	protected $primaryKey = 'id_relate';
    protected $fillable = ['id_user'];

    //protected $with = ['resposta_relate'];
	public function resposta_relate()
	{
		return $this->hasMany(RespostaRelate::class, 'id_relate');
	}
}
