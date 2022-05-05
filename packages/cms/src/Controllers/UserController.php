<?php

namespace Cms\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function __construct()
    {
        $this->user = new \App\Models\User;
        $this->campos = [
            'name', 'email', 'password', 'alterar_senha'
        ];

    }


    function index()
    {

        $users = \App\Models\User::all();

        return view('cms::user.listar', ['users' => $users]);
    }

    public function listar(Request $request)
    {

        $campos = explode(", ", $request->campos);

        $users = DB::table('users')
            ->select($campos)
            ->where([
                [$request->campoPesquisa, 'ilike', "%$request->dadoPesquisa%"],
            ])
            ->orderBy($request->ordem, $request->sentido)
            ->paginate($request->itensPorPagina);
        return $users;
    }

    public function inserir(Request $request)
    {

        $data = $request->all();

        $data['user']['password'] = bcrypt($data['user']['password']);

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                $data['user'] += [$campo => ''];
            }
        }

        return $this->user->create($data['user']);

    }

    public function detalhar($id)
    {
        $user = $this->user->where([
            ['id', '=', $id],
        ])->firstOrFail();
        return view('cms::user.detalhar', ['user' => $user]);
    }       

    public function alterar(Request $request, $id)
    {

        $data = $request->all();
        //return $data;
        //$data['user'] += ['user_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario


        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem' && $campo!='password'){
                    $data['user'] += [$campo => ''];
                }
            }
        }
        $user = $this->user->where([
            ['id', '=', $id],
        ])->firstOrFail();

        //para que a senha não seja apagada.
        if($data['user']['alterar_senha']){
            $data['user']['password'] = bcrypt($data['user']['password']);
        }else{
            unset($data['user']['password']);
        }

        $user->update($data['user']);
        return "Gravado com sucesso";
    }

    public function excluir($id)
    {
        //Auth::loginUsingId(2);

        $user = $this->user->where([
            ['id', '=', $id],
        ])->firstOrFail();

        if(!empty($user->imagem)){
            //remover imagens
            $imagemCms = new ImagemCms();
            $imagemCms->excluir($this->pathImagem, $this->sizesImagem, $user);
        }

        $user->delete();


    }
}
