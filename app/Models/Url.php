<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Url
 * 
 * @property int $id
 * @property character varying $imagem
 * @property character varying|null $titulo
 * @property string|null $descricao
 * @property character varying|null $url
 * @property int $status
 * @property int $posicao
 * @property int $cmsuser_id
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 * 
 * @property CmsUser $cms_user
 *
 * @package App\Models
 */
class Url extends Model
{
	protected $table = 'urls';

	protected $casts = [
		'imagem' => 'character varying',
		'titulo' => 'character varying',
		'url' => 'character varying',
		'status' => 'int',
		'posicao' => 'int',
		'cmsuser_id' => 'int',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'url',
		'status',
		'posicao',
		'cmsuser_id'
	];

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}
}
