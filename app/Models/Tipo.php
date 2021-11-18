<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Tipo
 *
 * @property int $id
 * @property string $imagem
 * @property string $titulo
 * @property string $arquivo
 * @property int $status
 * @property int $cmsuser_id
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 *
 * @property CmsUser $cms_user
 *
 * @package App\Models
 */
class Tipo extends Model
{
	protected $table = 'cms.tipos';

	protected $casts = [
		'imagem' => 'string',
		'titulo' => 'string',
		'status' => 'int',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'arquivo',
		'status'
	];

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}
}
