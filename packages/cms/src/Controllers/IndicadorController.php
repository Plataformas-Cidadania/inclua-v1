<?php

namespace Cms\Controllers;

use Cms\Models\ImagemCms;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;

class IndicadorController extends Controller
{



    public function __construct()
    {
        $this->indicador = new \App\Models\Indicador;
        $this->campos = [
            'imagem', 'titulo', 'arquivo', 'cmsuser_id',
        ];
        $this->pathImagem = public_path().'/imagens/indicadores';
        $this->sizesImagem = [
            'xs' => ['width' => 140, 'height' => 79],
            'sm' => ['width' => 480, 'height' => 270],
            'md' => ['width' => 580, 'height' => 326],
            'lg' => ['width' => 1170, 'height' => 658]
        ];
        $this->widthOriginal = true;

        $this->pathArquivo = public_path().'/arquivos/indicadores';
    }

    function index()
    {

        $indicadores = \App\Models\Indicador::all();
        //$idiomas = \App\Idioma::lists('titulo', 'id')->all();


        return view('cms::indicador.listar', ['indicadores' => $indicadores/*, 'idiomas' => $idiomas*/]);
    }

    public function listar(Request $request)
    {

        //Log::info('CAMPOS: '.$request->campos);

        //Auth::loginUsingId(2);

        $campos = explode(", ", $request->campos);

        $indicadores = DB::table('cms.indicadores')
            ->select($campos)
            ->where([
                [$request->campoPesquisa, 'ilike', "%$request->dadoPesquisa%"],
            ])
            ->orderBy($request->ordem, $request->sentido)
            ->paginate($request->itensPorPagina);
        return $indicadores;
    }


    public function inserir(Request $request)
    {

        $data = $request->all();

        $data['indicador'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                $data['indicador'] += [$campo => ''];
            }
        }

        $file = $request->file('file');
        $arquivo = $request->file('arquivo');


        $successFile = true;
        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $successFile = $imagemCms->inserir($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal);
            if($successFile){
                $data['indicador']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['indicador']['arquivo'] = $filenameArquivo;
            }
        }


        if($successFile && $successArquivo){
            return $this->indicador->create($data['indicador']);
        }else{
            return "erro";
        }


        return $this->indicador->create($data['indicador']);

    }

    public function detalhar($id)
    {
        $indicador = $this->indicador->where([
            ['id', '=', $id],
        ])->firstOrFail();
        //$idiomas = \App\Idioma::lists('titulo', 'id')->all();

        return view('cms::indicador.detalhar', ['indicador' => $indicador/*, 'idiomas' => $idiomas*/]);
    }

    /*public function alterar(Request $request, $id)
    {
        $data = $request->all();
        $data['indicador'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem'){
                    $data['indicador'] += [$campo => ''];
                }
            }
        }
        $indicador = $this->indicador->where([
            ['id', '=', $id],
        ])->firstOrFail();

        $file = $request->file('file');

        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $success = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $indicador);
            if($success){
                $data['indicador']['imagem'] = $filename;
                $indicador->update($data['indicador']);
                return $indicador->imagem;
            }else{
                return "erro";
            }
        }

        //remover imagem
        if($data['removerImagem']){
            $data['indicador']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$indicador->imagem)) {
                unlink($this->pathImagem . "/" . $indicador->imagem);
            }
        }

        $indicador->update($data['indicador']);
        return "Gravado com sucesso";
    }*/

    public function alterar(Request $request, $id)
    {
        $data = $request->all();

        //return $data;

        $data['indicador'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem' && $campo!='arquivo'){
                    $data['indicador'] += [$campo => ''];
                }
            }
        }
        $indicador = $this->indicador->where([
            ['id', '=', $id],
        ])->firstOrFail();


        $file = $request->file('file');
        $arquivo = $request->file('arquivo');

        //remover imagem
        if($data['removerImagem']){
            $data['indicador']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$indicador->imagem)) {
                unlink($this->pathImagem . "/" . $indicador->imagem);
            }
        }


        if($data['removerArquivo']){
            $data['indicador']['arquivo'] = '';
            if(file_exists($this->pathArquivo."/".$indicador->arquivo)) {
                unlink($this->pathArquivo . "/" . $indicador->arquivo);
            }
        }


        $successFile = true;
        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $successFile = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $indicador);
            if($successFile){
                $data['indicador']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['indicador']['arquivo'] = $filenameArquivo;
            }
        }

        if($successFile && $successArquivo){

            $indicador->update($data['indicador']);
            return $indicador->imagem;
        }else{
            return "erro";
        }

        //$indicador->update($data['indicador']);
        //return "Gravado com sucesso";
    }

    public function excluir($id)
    {
        //Auth::loginUsingId(2);

        $indicador = $this->indicador->where([
            ['id', '=', $id],
        ])->firstOrFail();

        //remover imagens
        if(!empty($indicador->imagem)){
            //remover imagens
            $imagemCms = new ImagemCms();
            $imagemCms->excluir($this->pathImagem, $this->sizesImagem, $indicador);
        }


        if(!empty($indicador->arquivo)) {
            if (file_exists($this->pathArquivo . "/" . $indicador->arquivo)) {
                unlink($this->pathArquivo . "/" . $indicador->arquivo);
            }
        }

        $indicador->delete();

    }
    public function status($id)
    {
        $indicador_atual = DB::table('indicadores')->where('id', $id)->first();
        $status = $indicador_atual->status == 0 ? 1 : 0;
        DB::table('indicadores')->where('id', $id)->update(['status' => $status]);

    }


}
