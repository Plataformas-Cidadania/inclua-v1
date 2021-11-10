<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Text
 *
 * @property int $id
 * @property character varying $imagem
 * @property character varying|null $titulo
 * @property string|null $descricao
 * @property character varying|null $slug
 * @property int $cmsuser_id
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 *
 * @property CmsUser $cms_user
 *
 * @package App\Models
 */
class Text extends Model
{
	protected $table = 'cms.texts';

	protected $casts = [
		'imagem' => 'character varying',
		'titulo' => 'character varying',
		'slug' => 'character varying',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'slug'
	];

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}
}
