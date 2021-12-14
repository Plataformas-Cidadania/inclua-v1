<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class PasswordReset
 *
 * @property string $email
 * @property string $token
 * @property timestamp $created_at
 *
 * @package App\Models
 */
class PasswordReset extends Model
{
	protected $table = 'avaliacao.password_resets';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'email' => 'string',
		'token' => 'string',
		'created_at' => 'timestamp without time zone'
	];

	protected $hidden = [
		'token'
	];

	protected $fillable = [
		'email',
		'token'
	];
}
