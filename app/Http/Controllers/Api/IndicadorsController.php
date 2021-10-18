<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Indicador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;

class IndicadorsController extends Controller
{

    public function getAll(){
        $res = Indicador::all();
        if (!$res) {
            return response()->json(['Resposta' => 'Não existe nenhum indicador na Base de Dados!'], Response::HTTP_OK);
        }
        return $res;
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
			    'Indicador was successfully added.',
			    $this->transform($indicador)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Unexpected error occurred while trying to process your request.');
        }
    }

    /**
     * Display the specified indicador.
     *
     * @param int $id
     *
     * @return Illuminate\Http\Response
     */
    public function show($id)
    {
        $indicador = Indicador::findOrFail($id);
        if (!$indicador) {
            return response()->json(['Resposta' => 'Não existe este indicador na Base de Dados!'], Response::HTTP_OK);
        }
        return $indicador;
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
            
            $indicador = Indicador::findOrFail($id);
            $indicador->update($data);

            return $this->successResponse(
			    'Indicador was successfully updated.',
			    $this->transform($indicador)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Unexpected error occurred while trying to process your request.');
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
			    'Indicador was successfully deleted.',
			    $this->transform($indicador)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Unexpected error occurred while trying to process your request.');
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
            'id_indicador' => 'string|min:1|nullable',
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
