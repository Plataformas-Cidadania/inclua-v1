<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Modulo
 * 
 * @property int $id
 * @property character varying|null $imagem
 * @property character varying|null $titulo
 * @property string|null $descricao
 * @property string|null $arquivo
 * @property string|null $slug
 * @property int $status
 * @property int $show
 * @property int $tipo_id
 * @property int $cmsuser_id
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 * 
 * @property CmsUser $cms_user
 * @property Collection|Item[] $items
 *
 * @package App\Models
 */
class Modulo extends Model
{
	protected $table = 'modulos';

	protected $casts = [
		'imagem' => 'character varying',
		'titulo' => 'character varying',
		'status' => 'int',
		'show' => 'int',
		'tipo_id' => 'int',
		'cmsuser_id' => 'int',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'arquivo',
		'slug',
		'status',
		'show',
		'tipo_id',
		'cmsuser_id'
	];

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}

	public function items()
	{
		return $this->hasMany(Item::class);
	}
}
