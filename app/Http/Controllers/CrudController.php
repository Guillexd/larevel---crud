<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\Crud;
use Illuminate\Http\Request;

class CrudController extends Controller
{
    public function index(){
        $dataCrud = Crud::all();
        return response()->json($dataCrud);
    }

    public function store(Request $request){
        $data = Crud::create($request->post());
        return response()->json([
            'data'=>$data
        ]);
    }

    public function show(Crud $blog){
        // return response()->json($crud);
        Log::info($blog);
        return response()->json([
            'element'=>$blog,
            'message'=>'Yes'
        ]);
    }

    public function update(Request $request, Crud $blog){
        Log::info($blog);
        $blog->fill(
            $request->post()
        )->save();
        return response()->json([
            'data'=>$blog
        ]);
    }

    public function destroy(Crud $blog){
        $blog->delete();
        // Log::info($blog);
        return response()->json([
            'data'=>'Deleted :D' 
        ]);
    }
}
