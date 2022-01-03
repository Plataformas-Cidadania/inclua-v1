<?php

namespace Cms\Controllers;

use Cms\Models\ImagemCms;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;

class DimensaoController extends Controller
{

    public function __construct()
    {
        $this->dimensao = new \App\Models\Dimensao;
        $this->campos = [
            'imagem', 'titulo', 'descricao', 'slug', 'cmsuser_id',
        ];
        $this->pathImagem = public_path().'/imagens/dimensoes';
        $this->sizesImagem = [
            'xs' => ['width' => 360, 'height' => 130],
            'sm' => ['width' => 400, 'height' => 144],
            'md' => ['width' => 600, 'height' => 220]
        ];
        $this->widthOriginal = true;
    }

    function index()
    {

        $dimensoes = \App\Models\Dimensao::all();

        return view('cms::dimensao.listar', ['dimensoes' => $dimensoes]);
    }

    /*public function listar(Request $request)
    {

        //Log::info('CAMPOS: '.$request->campos);

        //Auth::loginUsingId(2);

        $campos = explode(", ", $request->campos);

        $dimensoes = DB::table('cms.dimensoes')
            ->select($campos)
            ->where([
                [$request->campoPesquisa, 'like', "%$request->dadoPesquisa%"],
            ])
            ->orderBy($request->ordem, $request->sentido)
            ->paginate($request->itensPorPagina);
        return $dimensoes;
    }*/

    /*public function inserir(Request $request)
    {

        $data = $request->all();

        $data['dimensao'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                $data['dimensao'] += [$campo => ''];
            }
        }

        $file = $request->file('file');

        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $success = $imagemCms->inserir($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal);

            if($success){
                $data['dimensao']['imagem'] = $filename;
                return $this->dimensao->create($data['dimensao']);
            }else{
                return "erro";
            }
        }

        return $this->dimensao->create($data['dimensao']);

    }*/

    public function detalhar($id)
    {
        /*$dimensao = $this->dimensao->where([
            ['id', '=', $id],
        ])->firstOrFail();
        return view('cms::dimensao.detalhar', ['dimensao' => $dimensao]);*/

        $dimensao = new \stdClass();
        $dimensao->id_dimensao = $id;
        $dimensao->imagem = "";
        $dimensao->arquivo = "";
        return view('cms::dimensao.detalhar', ['dimensao' => $dimensao]);

    }

    /*public function alterar(Request $request, $id)
    {
        $data = $request->all();
        $data['dimensao'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem'){
                    $data['dimensao'] += [$campo => ''];
                }
            }
        }
        $dimensao = $this->dimensao->where([
            ['id', '=', $id],
        ])->firstOrFail();

        $file = $request->file('file');

        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $success = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $dimensao);
            if($success){
                $data['dimensao']['imagem'] = $filename;
                $dimensao->update($data['dimensao']);
                return $dimensao->imagem;
            }else{
                return "erro";
            }
        }

        //remover imagem
        if($data['removerImagem']){
            $data['dimensao']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$dimensao->imagem)) {
                unlink($this->pathImagem . "/" . $dimensao->imagem);
            }
        }

        $dimensao->update($data['dimensao']);
        return "Gravado com sucesso";
    }*/

    /*public function excluir($id)
    {
        //Auth::loginUsingId(2);

        $dimensao = $this->dimensao->where([
            ['id', '=', $id],
        ])->firstOrFail();

        //remover imagens
        if(!empty($dimensao->imagem)){
            //remover imagens
            $imagemCms = new ImagemCms();
            $imagemCms->excluir($this->pathImagem, $this->sizesImagem, $dimensao);
        }


        $dimensao->delete();

    }*/





}
