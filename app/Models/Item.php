<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Item
 * 
 * @property int $id
 * @property character varying $imagem
 * @property character varying $titulo
 * @property string $descricao
 * @property string $arquivo
 * @property int $posicao
 * @property int $status
 * @property int $modulo_id
 * @property int $cmsuser_id
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 * 
 * @property Modulo $modulo
 * @property CmsUser $cms_user
 *
 * @package App\Models
 */
class Item extends Model
{
	protected $table = 'items';

	protected $casts = [
		'imagem' => 'character varying',
		'titulo' => 'character varying',
		'posicao' => 'int',
		'status' => 'int',
		'modulo_id' => 'int',
		'cmsuser_id' => 'int',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'arquivo',
		'posicao',
		'status',
		'modulo_id',
		'cmsuser_id'
	];

	public function modulo()
	{
		return $this->belongsTo(Modulo::class);
	}

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}
}
