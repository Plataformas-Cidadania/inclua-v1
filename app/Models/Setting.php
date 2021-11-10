<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Setting
 *
 * @property int $id
 * @property character varying $imagem
 * @property character varying $email
 * @property character varying $titulo
 * @property character varying $rodape
 * @property character varying $cep
 * @property character varying|null $endereco_titulo
 * @property character varying $endereco
 * @property character varying $numero
 * @property character varying|null $complemento
 * @property character varying $bairro
 * @property character varying $cidade
 * @property character varying $estado
 * @property character varying $titulo_contato
 * @property character varying $descricao_contato
 * @property character varying|null $endereco_titulo2
 * @property character varying|null $endereco2
 * @property character varying|null $numero2
 * @property character varying|null $complemento2
 * @property character varying|null $bairro2
 * @property character varying|null $cidade2
 * @property character varying|null $estado2
 * @property character varying|null $cep2
 * @property character varying $telefone
 * @property character varying|null $telefone2
 * @property character varying|null $telefone3
 * @property character varying $facebook
 * @property character varying $youtube
 * @property character varying $pinterest
 * @property character varying $twitter
 * @property character varying $instagram
 * @property character varying $blog
 * @property int $cmsuser_id
 * @property timestamp without time zone|null $created_at
 * @property timestamp without time zone|null $updated_at
 *
 * @package App\Models
 */
class Setting extends Model
{
	protected $table = 'cms.settings';

	protected $casts = [
		'imagem' => 'character varying',
		'email' => 'character varying',
		'titulo' => 'character varying',
		'rodape' => 'character varying',
		'cep' => 'character varying',
		'endereco_titulo' => 'character varying',
		'endereco' => 'character varying',
		'numero' => 'character varying',
		'complemento' => 'character varying',
		'bairro' => 'character varying',
		'cidade' => 'character varying',
		'estado' => 'character varying',
		'titulo_contato' => 'character varying',
		'descricao_contato' => 'character varying',
		'endereco_titulo2' => 'character varying',
		'endereco2' => 'character varying',
		'numero2' => 'character varying',
		'complemento2' => 'character varying',
		'bairro2' => 'character varying',
		'cidade2' => 'character varying',
		'estado2' => 'character varying',
		'cep2' => 'character varying',
		'telefone' => 'character varying',
		'telefone2' => 'character varying',
		'telefone3' => 'character varying',
		'facebook' => 'character varying',
		'youtube' => 'character varying',
		'pinterest' => 'character varying',
		'twitter' => 'character varying',
		'instagram' => 'character varying',
		'blog' => 'character varying',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $fillable = [
		'imagem',
		'email',
		'titulo',
		'rodape',
		'cep',
		'endereco_titulo',
		'endereco',
		'numero',
		'complemento',
		'bairro',
		'cidade',
		'estado',
		'titulo_contato',
		'descricao_contato',
		'endereco_titulo2',
		'endereco2',
		'numero2',
		'complemento2',
		'bairro2',
		'cidade2',
		'estado2',
		'cep2',
		'telefone',
		'telefone2',
		'telefone3',
		'facebook',
		'youtube',
		'pinterest',
		'twitter',
		'instagram',
		'blog'
	];
}
