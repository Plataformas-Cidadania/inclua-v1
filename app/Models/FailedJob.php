<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class FailedJob
 * 
 * @property int $id
 * @property string $uuid
 * @property string $connection
 * @property string $queue
 * @property string $payload
 * @property string $exception
 * @property timestamp without time zone $failed_at
 *
 * @package App\Models
 */
class FailedJob extends Model
{
	protected $table = 'cms.failed_jobs';
	public $timestamps = false;

	protected $casts = [
		'uuid' => 'string',
		'failed_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'uuid',
		'connection',
		'queue',
		'payload',
		'exception',
		'failed_at'
	];
}
