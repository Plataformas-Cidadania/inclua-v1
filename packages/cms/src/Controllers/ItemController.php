<?php

namespace Cms\Controllers;

use Cms\Models\ImagemCms;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;

class ItemController extends Controller
{



    public function __construct()
    {
        $this->item = new \App\Models\Item;
        $this->campos = [
            'imagem', 'titulo', 'descricao', 'arquivo', 'modulo_id', 'posicao', 'video', 'url', 'cmsuser_id',
        ];
        $this->pathImagem = public_path().'/imagens/items';
        $this->sizesImagem = [
            'xs' => ['width' => 140, 'height' => 79],
            'sm' => ['width' => 480, 'height' => 270],
            'md' => ['width' => 580, 'height' => 326],
            'lg' => ['width' => 1170, 'height' => 658]
        ];
        $this->widthOriginal = true;

        $this->pathArquivo = public_path().'/arquivos/items';
    }

    function index($modulo_id)
    {

        $items = \App\Models\Item::all();
        //$idiomas = \App\Idioma::lists('titulo', 'id')->all();

        return view('cms::item.listar', ['items' => $items, 'modulo_id' => $modulo_id]);
        //return view('cms::item.listar', ['items' => $items, 'modulo_id' => $modulo_id, 'idiomas' => $idiomas]);
    }

    public function listar(Request $request)
    {

        //Log::info('CAMPOS: '.$request->campos);
        //Log::info('modulo_id: '.$request->modulo_id);

        //Auth::loginUsingId(2);

        $campos = explode(", ", $request->campos);

        $items = DB::table('cms.items')
            ->select($campos)
            ->where([
                [$request->campoPesquisa, 'ilike', "%$request->dadoPesquisa%"],
                ['modulo_id', $request->modulo_id],
            ])
            ->orderBy($request->ordem, $request->sentido)
            ->paginate($request->itensPorPagina);
        return $items;
    }


    public function inserir(Request $request)
    {

        $data = $request->all();

        $data['item'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                $data['item'] += [$campo => ''];
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
                $data['item']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['item']['arquivo'] = $filenameArquivo;
            }
        }


        if($successFile && $successArquivo){
            return $this->item->create($data['item']);
        }else{
            return "erro";
        }


        return $this->item->create($data['item']);

    }

    public function detalhar($id)
    {
        $item = $this->item->where([
            ['id', '=', $id],
        ])->firstOrFail();
        //$idiomas = \App\Idioma::lists('titulo', 'id')->all();

        $modulo_id = $item->modulo_id;

        return view('cms::item.detalhar', ['item' => $item, 'modulo_id' => $modulo_id]);
        //return view('cms::item.detalhar', ['item' => $item, 'modulo_id' => $modulo_id, 'idiomas' => $idiomas]);
    }

    /*public function alterar(Request $request, $id)
    {
        $data = $request->all();
        $data['item'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem'){
                    $data['item'] += [$campo => ''];
                }
            }
        }
        $item = $this->item->where([
            ['id', '=', $id],
        ])->firstOrFail();

        $file = $request->file('file');

        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $success = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $item);
            if($success){
                $data['item']['imagem'] = $filename;
                $item->update($data['item']);
                return $item->imagem;
            }else{
                return "erro";
            }
        }

        //remover imagem
        if($data['removerImagem']){
            $data['item']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$item->imagem)) {
                unlink($this->pathImagem . "/" . $item->imagem);
            }
        }

        $item->update($data['item']);
        return "Gravado com sucesso";
    }*/

    public function alterar(Request $request, $id)
    {
        $data = $request->all();

        //return $data;

        $data['item'] += ['cmsuser_id' => auth()->guard('cms')->user()->id];//adiciona id do usuario

        //verifica se o index do campo existe no array e caso não exista inserir o campo com valor vazio.
        foreach($this->campos as $campo){
            if(!array_key_exists($campo, $data)){
                if($campo!='imagem' && $campo!='arquivo'){
                    $data['item'] += [$campo => ''];
                }
            }
        }
        $item = $this->item->where([
            ['id', '=', $id],
        ])->firstOrFail();


        $file = $request->file('file');
        $arquivo = $request->file('arquivo');

        //remover imagem
        if($data['removerImagem']){
            $data['item']['imagem'] = '';
            if(file_exists($this->pathImagem."/".$item->imagem)) {
                unlink($this->pathImagem . "/" . $item->imagem);
            }
        }


        if($data['removerArquivo']){
            $data['item']['arquivo'] = '';
            if(file_exists($this->pathArquivo."/".$item->arquivo)) {
                unlink($this->pathArquivo . "/" . $item->arquivo);
            }
        }


        $successFile = true;
        if($file!=null){
            $filename = rand(1000,9999)."-".clean($file->getClientOriginalName());
            $imagemCms = new ImagemCms();
            $successFile = $imagemCms->alterar($file, $this->pathImagem, $filename, $this->sizesImagem, $this->widthOriginal, $item);
            if($successFile){
                $data['item']['imagem'] = $filename;
            }
        }

        $successArquivo = true;
        if($arquivo!=null){
            $filenameArquivo = rand(1000,9999)."-".clean($arquivo->getClientOriginalName());
            $successArquivo = $arquivo->move($this->pathArquivo, $filenameArquivo);
            if($successArquivo){
                $data['item']['arquivo'] = $filenameArquivo;
            }
        }

        if($successFile && $successArquivo){

            $item->update($data['item']);
            return $item->imagem;
        }else{
            return "erro";
        }

        //$item->update($data['item']);
        //return "Gravado com sucesso";
    }

    public function excluir($id)
    {
        //Auth::loginUsingId(2);

        $item = $this->item->where([
            ['id', '=', $id],
        ])->firstOrFail();

        //remover imagens
        if(!empty($item->imagem)){
            //remover imagens
            $imagemCms = new ImagemCms();
            $imagemCms->excluir($this->pathImagem, $this->sizesImagem, $item);
        }


        if(!empty($item->arquivo)) {
            if (file_exists($this->pathArquivo . "/" . $item->arquivo)) {
                unlink($this->pathArquivo . "/" . $item->arquivo);
            }
        }

        $item->delete();

    }

    public function status($id)
    {
        $tipo_atual = DB::table('cms.items')->where('id', $id)->first();
        $status = $tipo_atual->status == 0 ? 1 : 0;
        DB::table('cms.items')->where('id', $id)->update(['status' => $status]);

    }

    public function positionUp($id)
    {
        $posicao_atual = DB::table('items')->where('id', $id)->first();
        $upPosicao = $posicao_atual->posicao-1;
        $posicao = $posicao_atual->posicao;

        //Coloca com a posicao do anterior
        DB::table('cms.items')->where('posicao', $upPosicao)->update(['posicao' => $posicao]);

        //atualiza a posicao para o anterior
        DB::table('cms.items')->where('id', $id)->update(['posicao' => $upPosicao]);


    }

    public function positionDown($id)
    {
        $posicao_atual = DB::table('cms.items')->where('id', $id)->first();
        $upPosicao = $posicao_atual->posicao+1;
        $posicao = $posicao_atual->posicao;

        //Coloca com a posicao do anterior
        DB::table('cms.items')->where('posicao', $upPosicao)->update(['posicao' => $posicao]);

        //atualiza a posicao para o anterior
        DB::table('cms.items')->where('id', $id)->update(['posicao' => $upPosicao]);

    }


}
