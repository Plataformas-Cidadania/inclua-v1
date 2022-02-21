<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Curadoria
 *
 * @property int $id_curador
 * @property string|null $tema_recorte
 * @property string|null $texto
 * @property string|null $mes
 * @property string|null $link_video
 *
 * @property Curadoria $curadoria
 *
 * @package App\Models
 */
class Curadoria extends Model
{
	protected $table = 'avaliacao.curadoria';
	protected $primaryKey = 'id_curadoria';
	public $incrementing = true;
	public $timestamps = false;

	protected $casts = [
		'id_curador' => 'int',
		'tema_recorte' => 'string',
		'texto' => 'string',
		'mes' => 'string',
		'link_video' => 'string'
	];

	protected $fillable = [
		'id_curador',
		'tema_recorte',
		'texto',
		'mes',
		'link_video'
	];

	protected $with = ['curador','curadoria_recurso'];

    public function curadoria_recurso()
    {
        return $this->hasMany(CuradoriaRecurso::class, 'id_curadoria');
    }
	public function curador()
	{
		return $this->belongsTo(Curador::class, 'id_curador');
	}
}
