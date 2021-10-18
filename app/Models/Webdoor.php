<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Webdoor
 * 
 * @property int $id
 * @property character varying $imagem
 * @property character varying|null $titulo
 * @property string|null $descricao
 * @property string|null $link
 * @property character varying|null $legenda
 * @property int $posicao
 * @property int $status
 * @property int $cmsuser_id
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 * 
 * @property CmsUser $cms_user
 *
 * @package App\Models
 */
class Webdoor extends Model
{
	protected $table = 'webdoors';

	protected $casts = [
		'imagem' => 'character varying',
		'titulo' => 'character varying',
		'legenda' => 'character varying',
		'posicao' => 'int',
		'status' => 'int',
		'cmsuser_id' => 'int',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'link',
		'legenda',
		'posicao',
		'status',
		'cmsuser_id'
	];

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}
}
