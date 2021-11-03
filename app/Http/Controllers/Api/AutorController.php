<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Controller;
use App\Models\Autor;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\RelationNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;
use App\Repository\AutorRepository;

class AutorController extends Controller
{
    private AutorRepository $autorRepository;

    public function __construct(AutorRepository $autorRepository)
    {
        $this->autorRepository = $autorRepository;
    }

    /**
     * Mostrar todos os indicatores.
     *
     * @param null
     *
     * @return JsonResponse
     */

    public function getAll(): JsonResponse
    {
        $autores = $this->autorRepository->all();
        return $this->successResponse(
            'Autores retornados com sucesso',
            $autores
        );
    }

    /**
     * Adicionar um novo autor
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
            $autor = $this->autorRepository->create($data);
            return $this->successResponse(
			    'Autor '.$autor->id_autor.' foi adicionado',
			    $this->transform($autor)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Obter um autor especificado pelo id
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function get($id): JsonResponse
    {
        try {
            $autor = $this->autorRepository->findById($id);
            return $this->successResponse(
                'Autor retornado com sucesso',
                $autor
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
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

            $autor = $this->autorRepository->update($id,$data);

            return $this->successResponse(
			    'Autor foi atualizado com sucesso.',
			    $this->transform($autor)
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
    public function destroy($id): JsonResponse
    {
        try {
            $autor = $this->autorRepository->deleteById($id);

            return $this->successResponse(
			    'Autor '.$id.' deletado com sucesso',
			    $this->transform($autor)
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
        $rules = [
            'id_autor' => 'string|min:1',
            'nome' => 'string|min:1|nullable',
        ];

        return Validator::make($request->all(), $rules);
    }


    /**
     * Pegar e validar os dados da requisição
     *
     * @param Request $request
     * @return array
     */
    protected function getData(Request $request): array
    {
        $rules = [
            'id_autor' => 'string|min:1|nullable',
            'nome' => 'string|min:1|nullable',
        ];

        return $request->validate($rules);
    }

    /**
     * Transformar o autor em um array
     *
     * @param Autor $autor
     *
     * @return array
     */
    protected function transform(Autor $autor): array
    {
        return [
            'id_autor' => $autor->id_autor,
            'nome' => $autor->nome,
        ];
    }


}
