<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller{
    public function index(){
        return response()->json(
            Category::all()
        );
    }

    public function show($id){
        return response()->json(
            Category::find($id)
        );
    }

    public function store(Request $request){
        $data = $request->all();
        $validator = Validator::make($data, [
            'name' => 'required',
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()])->setStatusCode(400);
        }

        $category = Category::create($data);

        return response()->json([
            'status' => 'ok',
            'message' => 'Category created',
            'data' => $category
        ]);
    }

    public function update(Request $request, $id){
        $data = $request->all();
        $validator = Validator::make($data, [
            'name' => 'required',
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()])->setStatusCode(400);
        }

        $category = Category::find($id);
        $category->update($data);

        return response()->json([
            'status' => 'ok',
            'message' => 'Category updated',
            'data' => $category
        ]);
    }

    public function destroy($id){
        $category = Category::find($id);
        $category->delete();

        return response()->json([
            'status' => 'ok',
            'message' => 'Category deleted'
        ]);
    }
}
