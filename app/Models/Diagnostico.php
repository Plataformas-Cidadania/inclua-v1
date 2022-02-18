<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;
/**
 * Class Dimensao
 *
 * @property int $id_diagnostico
 *
 * @property Collection|Diagnostico[] $Diagnostico
 *
 * @package App\Models
 */
class Diagnostico extends Model
{
    use Uuids;
	protected $table = 'avaliacao.diagnostico';
	protected $primaryKey = 'id_diagnostico';
    protected $with = ['resposta'];

    protected $casts = [
        'oferta_publica' => 'string',
        'grupo_focal' => 'string',
        'tipo_diagnostico' => 'int'
    ];

    protected $fillable = [
        'oferta_publica',
        'grupo_focal',
        'tipo_diagnostico'
    ];
	public function resposta()
	{
		return $this->hasMany(Resposta::class, 'id_diagnostico');
	}
}
