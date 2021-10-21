<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Indicador;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use function MongoDB\BSON\toJSON;
use function Webmozart\Assert\Tests\StaticAnalysis\string;

class IndicadoresController extends Controller
{

    public function getAll(){
        {
            $indicadores = Indicador::all();

            $data = $indicadores->transform(function ($indicador) {
                return $this->transform($indicador);
            });

            return $this->successResponse(
                'Indicadores retornados com sucesso',
                $data
            );
        }

    }

    /**
     * Store a new indicador in the storage.
     *
     * @param Illuminate\Http\Request $request
     *
     * @return Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }

            $data = $this->getData($request);
            $indicador = Indicador::create($data);
            return $this->successResponse(
			    'Indicador '.$indicador->id_indicador.' foi adicionado',
			    $this->transform($indicador)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Display the specified indicador.
     *
     * @param int $id
     *
     * @return Illuminate\Http\Response
     */
    public function get($id)
    {
        try {
            $indicador = Indicador::findOrFail($id);
            return $this->successResponse(
                'Indicador retornado com sucesso',
                $this->transform($indicador)
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }


    }

    /**
     * Update the specified indicador in the storage.
     *
     * @param int $id
     * @param Illuminate\Http\Request $request
     *
     * @return Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {

        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }

            $data = $this->getData($request);

            $indicador = Indicador::find($id);

            $indicador->update($data);

            return $this->successResponse(
			    'Indicador was successfully updated.',
			    $this->transform($indicador)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Unexpected error occurred while trying to process your request.'.$exception);
        }
    }

    /**
     * Remove the specified indicador from the storage.
     *
     * @param int $id
     *
     * @return Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $indicador = Indicador::findOrFail($id);
            $indicador->delete();

            return $this->successResponse(
			    'Indicador deletado com sucesso',
			    $this->transform($indicador)
			);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado'.$exception);
        }
    }

    /**
     * Gets a new validator instance with the defined rules.
     *
     * @param Illuminate\Http\Request $request
     *
     * @return Illuminate\Support\Facades\Validator
     */
    protected function getValidator(Request $request)
    {
        $rules = [
            'id_indicador' => 'string|min:1',
            'nome' => 'string|min:1|nullable',
            'descricao' => 'string|min:1|nullable',
            'dimensao_id_dimensao' => 'string|min:1|nullable',
        ];

        return Validator::make($request->all(), $rules);
    }


    /**
     * Get the request's data from the request.
     *
     * @param Illuminate\Http\Request\Request $request
     * @return array
     */
    protected function getData(Request $request)
    {
        $rules = [
                'id_indicador' => 'string|min:1|nullable',
            'nome' => 'string|min:1|nullable',
            'descricao' => 'string|min:1|nullable',
            'dimensao_id_dimensao' => 'string|min:1|nullable',
        ];

        $data = $request->validate($rules);


        return $data;
    }

    /**
     * Transform the giving indicador to public friendly array
     *
     * @param App\Models\Indicador $indicador
     *
     * @return array
     */
    protected function transform(Indicador $indicador)
    {
        return [
            'id_indicador' => $indicador->id_indicador,
            'nome' => $indicador->nome,
            'descricao' => $indicador->descricao,
            'dimensao_id_dimensao' => $indicador->dimensao_id_dimensao,
        ];
    }


}
