<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * 
 * @property int $id
 * @property string $name
 * @property string $email
 * @property timestamp without time zone|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'cms.users';

	protected $casts = [
		'name' => 'string',
		'email' => 'string',
		'email_verified_at' => 'timestamp without time zone',
		'password' => 'string',
		'remember_token' => 'string',
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
		'email_verified_at',
		'password',
		'remember_token'
	];
}
