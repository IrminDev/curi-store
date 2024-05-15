<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Thumbnail;
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
        try{
            // Check if the user is an admin (role_id = 2)
            if(auth()->user()->role_id !== 2){
                return response()->json(['message' => 'Unauthorized'], 401);
            }

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
        } catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ])->setStatusCode(500);
        }
    }

    public function multipleStore(Request $request){
        try{
            // Check if the user is an admin (role_id = 2)
            if(auth()->user()->role_id !== 2){
                return response()->json(['message' => 'Unauthorized'], 401);
            }

            $data = $request->all();
            $validator = Validator::make($data, [
                '*.title' => 'required',
                '*.brand' => 'required',
                '*.description' => 'required',
                '*.category' => 'required',
                '*.price' => 'required|numeric',
                '*.thumbnail' => 'required',
                '*.rating' => 'required|numeric',
                '*.discountPercentage' => 'required|numeric',
                '*.stock' => 'required'
            ]);

            if($validator->fails()){
                return response()->json(['error' => $validator->errors()])->setStatusCode(400);
            }

            $products = [];

            foreach($data as $product){
                $brand_name = $product['brand'];
                $category_name = $product['category'];

                // Search if the brand or category exists by its name
                $brand_id = Brand::where('name', $brand_name)->first();
                $category_id = Category::where('name', $category_name)->first();

                if(!$brand_id){
                    // If the brand does not exist, create it
                    $brand = Brand::create([
                        'name' => $product['brand']
                    ]);

                    $brand_id = $brand->id;
                } else {
                    $brand_id = $brand_id->id;
                }

                if(!$category_id){
                    // If the category does not exist, create it
                    $category = Category::create([
                        'name' => $product['category']
                    ]);

                    $category_id = $category->id;
                } else {
                    $category_id = $category_id->id;
                }

                $newProduct = Product::create([
                    'title' => $product['title'],
                    'description' => $product['description'],
                    'price' => $product['price'],
                    'stock' => $product['stock'],
                    'thumbnail' => $product['thumbnail'],
                    'rating' => $product['rating'],
                    'discount' => $product['discountPercentage'],
                    'category_id' => $category_id,
                    'brand_id' => $brand_id
                ]);

                // Now add the images to the product
                foreach($product['images'] as $image){
                    Thumbnail::create([
                        'product_id' => $newProduct->id,
                        'url' => $image
                    ]);
                }

                array_push($products, $newProduct);
            }

            return response()->json([
                'status' => 'ok',
                'message' => 'Products created',
                'data' => $products
            ])->setStatusCode(201);
        } catch(\Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ])->setStatusCode(500);
        }
    }
}
