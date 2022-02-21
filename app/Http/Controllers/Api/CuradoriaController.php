<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Curadoria;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\CuradoriaRepository;

class CuradoriaController extends Controller
{
    private CuradoriaRepository $repo;
    private $rules = [
        'id_curadoria' => 'int|nullable',
        'id_curador' => 'int|nullable',
        'tema_recorte' => 'string|nullable',
        'texto' => 'string|nullable',
        'mes' => 'string|nullable',
        'link_video' => 'string|nullable'
    ];
    public function __construct(CuradoriaRepository $repo)
    {
        $this->repo = $repo;
    }


    /**
     * Adicionar uma nova curadoria
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validator = $this->getValidator($request);


            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }

            $data = $this->getData($request);

            $res = $this->repo->create($data);
            return $this->successResponse(
			    'Curadoria '.$res->id_curadoria.' foi adicionada',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

   /**
     * Obter uma curadoria especificada pelo id
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function get($id_curadoria): JsonResponse
    {
        try {
            $res = $this->repo->findById($id_curadoria);
            return $this->successResponse(
                'Curadoria retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }


        /**
     * Mostrar todos.
     *
     * @param null
     *
     * @return JsonResponse
     */

    public function getAll(): JsonResponse
    {
        $res = $this->repo->all();
        return $this->successResponse(
            'Curadorias retornadas com sucesso',
            $res
        );
    }

    /**
     * Atualizar um autor especificado pelo id
     *
     * @param int $id
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function update($id, Request $request): JsonResponse
    {

        try {
            $validator = $this->getValidator($request);

            if ($validator->fails()) {
                return $this->errorResponse($validator->errors()->all());
            }

            $data = $this->getData($request);

            $res = $this->repo->update($id_curadoria,$data);

            return $this->successResponse(
			    'Curadoria foi atualizada com sucesso.',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception->getMessage());
        }
    }

    /**
     * Remover um autor da base de dados especificado pelo id
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function destroy($id_curadoria): JsonResponse
    {
        try {
            $res = $this->repo->deleteById($id_curadoria);

            return $this->successResponse(
			    'Curadoria '.$id_curadoria.' deletada com sucesso',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado'.$exception);
        }
    }

    /**
     * Cria uma instancia de validador com as regras definidas
     *
     * @param Request $request
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function getValidator(Request $request): \Illuminate\Contracts\Validation\Validator
    {
        return Validator::make($request->all(), $this->rules);
    }


    /**
     * Pegar e validar os dados da requisição
     *
     * @param Request $request
     * @return array
     */
    protected function getData(Request $request): array
    {
        return $request->validate($this->rules);
    }

    /**
     * Transformar em um array
     *
     * @param Curadoria $res
     *
     * @return array
     */
    protected function transform(Curadoria $res): array
    {
        return [
            'id_curadoria' => $res->id_curadoria,
            'id_curador' => $res->id_curador,
            'tema_recorte' => $res->tema_recorte,
            'texto' => $res->texto,
            'mes' => $res->mes,
            'link_video' => $res->link_video
        ];
    }


}
