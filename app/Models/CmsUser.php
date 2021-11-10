<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class CmsUser
 * 
 * @property int $id
 * @property character varying $name
 * @property character varying $email
 * @property character varying $password
 * @property character varying|null $remember_token
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 * 
 * @property Collection|Url[] $urls
 * @property Collection|Text[] $texts
 * @property Collection|Webdoor[] $webdoors
 * @property Collection|Item[] $items
 * @property Collection|Tipo[] $tipos
 * @property Collection|Modulo[] $modulos
 *
 * @package App\Models
 */
class CmsUser extends Model
{
	protected $table = 'cms.cms_users';

	protected $casts = [
		'name' => 'character varying',
		'email' => 'character varying',
		'password' => 'character varying',
		'remember_token' => 'character varying',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'name',
		'email',
		'password',
		'remember_token'
	];

	public function urls()
	{
		return $this->hasMany(Url::class, 'cmsuser_id');
	}

	public function texts()
	{
		return $this->hasMany(Text::class, 'cmsuser_id');
	}

	public function webdoors()
	{
		return $this->hasMany(Webdoor::class, 'cmsuser_id');
	}

	public function items()
	{
		return $this->hasMany(Item::class, 'cmsuser_id');
	}

	public function tipos()
	{
		return $this->hasMany(Tipo::class, 'cmsuser_id');
	}

	public function modulos()
	{
		return $this->hasMany(Modulo::class, 'cmsuser_id');
	}
}
