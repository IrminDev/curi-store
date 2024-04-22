<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(
            Product::all()
        );
    }

    public function show($id){
        return response()->json(
            Product::find($id)
        );
    }

    public function store(Request $request){
        $data = $request->all();
        $validator = Validator::make($data, [
            'title' => 'required',
            'brand_id' => 'required',
            'description' => 'required',
            'category_id' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'thumbnail' => 'required',
            'rating' => 'required',
            'discount' => 'required'
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()])->setStatusCode(400);
        }

        $product = Product::create($data);

        return response()->json([
            'status' => 'ok',
            'message' => 'Product created',
            'data' => $product
        ]);
    }

    public function multipleStore(Request $request){
        $data = $request->all();
        $validator = Validator::make($data, [
            '*.title' => 'required',
            '*.brand_id' => 'required|numeric',
            '*.description' => 'required',
            '*.category_id' => 'required|numeric',
            '*.price' => 'required|numeric',
            '*.thumbnail' => 'required',
            '*.rating' => 'required|numeric',
            '*.discount' => 'required|numeric',
            '*.stock' => 'required'
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()])->setStatusCode(400);
        }

        $products = [];

        foreach($data as $product){
            $products[] = Product::create($product);
        }

        return response()->json([
            'status' => 'ok',
            'message' => 'Products created',
            'data' => $products
        ]);
    }
}
