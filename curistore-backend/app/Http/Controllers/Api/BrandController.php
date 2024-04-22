<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brand;
use Illuminate\Support\Facades\Validator;

class BrandController extends Controller
{
    public function index()
    {
        return response()->json(
            Brand::all()
        );
    }

    public function show($id){
        return response()->json(
            Brand::find($id)
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

        $brand = Brand::create($data);

        return response()->json([
            'status' => 'ok',
            'message' => 'Brand created',
            'data' => $brand
        ]);
    }

    
}
