<?php

namespace App\Http\Controllers\Api;

use App\Models\Recurso;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

use Exception;
use App\Repository\RecursoRepository;

class RecursoController extends Controller
{
    private RecursoRepository $repo;
    private $rules = [
    'id_recurso' => 'int|min:1|',
        'nome' => 'string',
        'ultimo_acesso' => 'date|nullable|date_format:Y-m-d H:i:s',
        'esfera' => 'string|min:1|nullable',
        'status'=> 'int',
        'id_tipo_recurso' => 'int',
        'id_formato' => 'int',
    ];
    public function __construct(RecursoRepository $repo)
    {
        $this->repo = $repo;
    }

    /**
     * Mostrar todos os Recursoes.
     *
     * @param null
     *
     * @return JsonResponse
     */

    public function getAll(): JsonResponse
    {
        $res = $this->repo->all();
        return $this->successResponse(
            'Recurso retornados com sucesso',
            $res
        );
    }

    /**
     * Obter uma lista de recurso por nome do tipo
     *
     * @param int $nome do tipo
     *
     */
    public function getAllRecursoPorNomeTipoRecurso($nome_tipo_recurso)
    {
        try {
            $res = $this->repo->getAllRecursoPorNomeTipoRecurso($nome_tipo_recurso);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Obter uma lista de recurso por id de tipo
     *Obter uma lista de recurso que tenha a palavra_chave em titulo, esfera ou autor
     * @param int $palavra_chave
     *
     */
    public function getAllRecursoPorPalavraChave($palavra_chave)
    {
        try {
            $res = $this->repo->getAllRecursoPorPalavraChave($palavra_chave);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }





    /**
     * Mostrar todos os Recursoes com Paginação.
     *
     * @param null
     *
     * @return JsonResponse
     */

    public function getAllPaginado($nr_itens)
    {
        try {
            return response()->json($this->repo->getAllPaginado($nr_itens), Response::HTTP_OK);
        }
        catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function getByIdIndicadorPaginado($id_indicador, $nr_itens)
    {
        try {
            return response()->json($this->repo->getByIdIndicadorPaginado($id_indicador, $nr_itens), Response::HTTP_OK);
        }
        catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * Obter uma lista de recursos especificados por um nome de categoria
     *
     * @param string $nome_categoria
     *
     * @return JsonResponse
     */
    public function getAllRecursosPorNomeCategoria($nome_categoria): JsonResponse
    {
        try {
            $res = $this->repo->getAllRecursosPorNomeCategoria($nome_categoria);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }


    /**
     * Obter uma lista de recursos especificados por um nome de indicador
     *
     * @param string $nome_categoria
     *
     * @return JsonResponse
     */
    public function getAllRecursosPorNomeIndicador($nome_indicador): JsonResponse
    {
        try {
            $res = $this->repo->getAllRecursosPorNomeIndicador($nome_indicador);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }
    /**
     * Obter uma lista de autores especificados por um id de recurso
     *
     * @param int $id_recurso
     *
     * @return JsonResponse
     */
    public function getAllAutoresPorIdRecurso($id_recurso): JsonResponse
    {
        try {
            $res = $this->repo->getAllAutoresPorIdRecurso($id_recurso);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }


    /**
     * Obter uma lista de links especificados por um id de recurso
     *
     * @param int $id_recurso
     *
     * @return JsonResponse
     */
    public function getAllLinksPorIdRecurso($id_recurso): JsonResponse
    {
        try {
            $res = $this->repo->getAllLinksPorIdRecurso($id_recurso);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Adicionar um novo
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
			    ''.$res->id_recurso.' foi adicionado',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Obter especificado pelo id
     *
     * @param int $id
     *
     */
    public function get($id)
    {
        try {
            $res = $this->repo->findById($id);
            return $this->successResponse(
                'Retornado com sucesso',
                $res
            );
        }catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception);
        }
    }

    /**
     * Atualizar especificado pelo id
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

            $res = $this->repo->update($id,$data);

            return $this->successResponse(
			    'Atualizado com sucesso.',
			    $this->transform($res)
			);
        } catch (Exception $exception) {
            if ($exception instanceof ModelNotFoundException)
                return $this->errorResponse('Not found');
            return $this->errorResponse('Erro inesperado.'.$exception->getMessage());
        }
    }

    /**
     * Remover da base de dados especificado pelo id
     *
     * @param int $id
     *
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        try {
            $res = $this->repo->deleteById($id);

            return $this->successResponse(
			    ''.$id.' deletado com sucesso',
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
     * @param Recurso $res
     *
     * @return array
     */
    protected function transform(Recurso $res): array
    {
        return [
            'id_recurso' => $res->id_recurso,
            'nome' =>$res->nome,
            'ultimo_acesso' => $res->ultimo_acesso,
            'esfera' => $res->esfera,
            'status'=> $res->status,
            'id_tipo_recurso' => $res->id_tipo_recurso,
            'id_formato' => $res->id_formato,
        ];
    }
}
