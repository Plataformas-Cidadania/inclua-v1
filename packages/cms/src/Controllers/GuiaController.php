<?php

namespace Cms\Controllers;

use Cms\Models\ImagemCms;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;

class GuiaController extends Controller
{



    public function __construct()
    {
        $this->guia = new \App\Models\Guia;
        $this->campos = [
            'imagem', 'titulo', 'descricao', 'arquivo', 'cmsuser_id',
        ];
        $this->pathImagem = public_path().'/imagens/guias';
        $this->sizesImagem = [
            'xs' => ['width' => 140, 'height' => 79],
            'sm' => ['width' => 480, 'height' => 270],
            'md' => ['width' => 580, 'height' => 326],
            'lg' => ['width' => 1170, 'height' => 658]
        ];
        $this->widthOriginal = true;

        $this->pathArquivo = public_path().'/arquivos/guias';
    }

    function index()
    {

        $tipos = \App\Models\Tipo::pluck('titulo', 'id')->all();
        $guias = \App\Models\Guia::all();
        //$idiomas = \App\Idioma::lists('titulo', 'id')->all();


        return view('cms::guia.listar', ['guias' => $guias, 'tipos' => $tipos/*, 'idiomas' => $idiomas*/]);
    }

    public function listar(Request $request)
    {

        //Log::info('CAMPOS: '.$request->campos);

        //Auth::loginUsingId(2);

        $campos = explode(", ", $request->campos);

        $guias = DB::table('cms.guias')
            ->select($campos)
            ->where([
                [$request->campoPesquisa, 'ilike', "%$request->dadoPesquisa%"],
            ])
            ->orderBy($request->ordem, $request->sentido)
            ->paginate($request->itensPorPagina);
        return $guias;
    }


    public function inserir(Request $request)
    {

        $data = $request->all();

        $data['guia'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario


        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                $data['guia'] += [$campo => ''];
            }
        }

        if(empty($data['guia']['tipo_id'])){
            $data['guia']['tipo_id'] = 0;
        }

        $file = $request->file('file');
        $arquivo = $request->file('arquivo');


        $successFile = true;
        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $successFile = $imagemCms->inserir($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal);
            if($successFile){
                $data['guia']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['guia']['arquivo'] = $filenameArquivo;
            }
        }


        if($successFile && $successArquivo){
            return $this->guia->create($data['guia']);
        }else{
            return "erro";
        }


        return $this->guia->create($data['guia']);

    }

    public function detalhar($id)
    {
        $tipos = \App\Models\Tipo::pluck('titulo', 'id')->all();
        $guia = $this->guia->where([
            ['id', '=', $id],
        ])->firstOrFail();
        //$idiomas = \App\Idioma::lists('titulo', 'id')->all();

        return view('cms::guia.detalhar', ['guia' => $guia, 'tipos' => $tipos/*, 'idiomas' => $idiomas*/]);
    }

    /*public function alterar(Request $request, $id)
    {
        $data = $request->all();
        $data['guia'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem'){
                    $data['guia'] += [$campo => ''];
                }
            }
        }
        $guia = $this->guia->where([
            ['id', '=', $id],
        ])->firstOrFail();

        $file = $request->file('file');

        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $success = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $guia);
            if($success){
                $data['guia']['imagem'] = $filename;
                $guia->update($data['guia']);
                return $guia->imagem;
            }else{
                return "erro";
            }
        }

        //remover imagem
        if($data['removerImagem']){
            $data['guia']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$guia->imagem)) {
                unlink($this->pathImagem . "/" . $guia->imagem);
            }
        }

        $guia->update($data['guia']);
        return "Gravado com sucesso";
    }*/

    public function alterar(Request $request, $id)
    {
        $data = $request->all();

        //return $data;

        $data['guia'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem' && $campo!='arquivo'){
                    $data['guia'] += [$campo => ''];
                }
            }
        }
        $guia = $this->guia->where([
            ['id', '=', $id],
        ])->firstOrFail();

        if(empty($data['guia']['tipo_id'])){
            $data['guia']['tipo_id'] = 0;
        }

        $file = $request->file('file');
        $arquivo = $request->file('arquivo');

        //remover imagem
        if($data['removerImagem']){
            $data['guia']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$guia->imagem)) {
                unlink($this->pathImagem . "/" . $guia->imagem);
            }
        }


        if($data['removerArquivo']){
            $data['guia']['arquivo'] = '';
            if(file_exists($this->pathArquivo."/".$guia->arquivo)) {
                unlink($this->pathArquivo . "/" . $guia->arquivo);
            }
        }

        $successFile = true;
        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $successFile = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $guia);
            if($successFile){
                $data['guia']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['guia']['arquivo'] = $filenameArquivo;
            }
        }

        if($successFile && $successArquivo){

            $guia->update($data['guia']);
            return $guia->imagem;
        }else{
            return "erro";
        }

        //$guia->update($data['guia']);
        //return "Gravado com sucesso";
    }

    public function excluir($id)
    {
        //Auth::loginUsingId(2);

        $guia = $this->guia->where([
            ['id', '=', $id],
        ])->firstOrFail();

        //remover imagens
        if(!empty($guia->imagem)){
            //remover imagens
            $imagemCms = new ImagemCms();
            $imagemCms->excluir($this->pathImagem, $this->sizesImagem, $guia);
        }


        if(!empty($guia->arquivo)) {
            if (file_exists($this->pathArquivo . "/" . $guia->arquivo)) {
                unlink($this->pathArquivo . "/" . $guia->arquivo);
            }
        }

        $guia->delete();

    }

    public function status($id)
    {
        $tipo_atual = DB::table('cms.guias')->where('id', $id)->first();
        $status = $tipo_atual->status == 0 ? 1 : 0;
        DB::table('cms.guias')->where('id', $id)->update(['status' => $status]);

    }


}
