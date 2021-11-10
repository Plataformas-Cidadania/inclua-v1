<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Parceiro
 * 
 * @property int $id
 * @property character varying $imagem
 * @property character varying|null $titulo
 * @property string|null $descricao
 * @property character varying|null $url
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 *
 * @package App\Models
 */
class Parceiro extends Model
{
	protected $table = 'cms.parceiros';

	protected $casts = [
		'imagem' => 'character varying',
		'titulo' => 'character varying',
		'url' => 'character varying',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'url'
	];
}
