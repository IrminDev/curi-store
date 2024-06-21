<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use Illuminate\Validation\Validator;


class CartController extends Controller{
    // Function that show user cart by user id, needs to be authenticated
    public function show($id){
        // Authenticate user
        if(auth()->user()->id != $id){
            return response()->json(['message' => 'Unauthorized'], 401);
        };

        return response()->json(
            Cart::where('user_id', $id)->with('product')->get()
        );
    }

    // Function that add product to user cart by user id, needs to be authenticated
    public function store(Request $request, $id){
        // Authenticate user
        if(auth()->user()->id != $id){
            return response()->json(['message' => 'Unauthorized'], 401);
        };

        $data = $request->validate([
            'product_id' => 'required|integer',
            'quantity' => 'required|integer'
        ]);

        $data['user_id'] = $id;

        // Check if product already in cart
        $cart = Cart::where('user_id', $id)->where('product_id', $data['product_id'])->first();

        if($cart){
            $cart->quantity += $data['quantity'];
            $cart->save();
            return response()->json($cart);
        }

        $cart = Cart::create($data);

        return response()->json($cart);
    }

    // Function that remove product from user cart by user id, needs to be authenticated
    public function destroy(Request $request, $id){
        // Authenticate user
        if(auth()->user()->id != $id){
            return response()->json(['message' => 'Unauthorized',
            "user_id" => auth()->user()->id,
            "id" => $id
            ], 401);
        };

        $product_id = $request->product_id;

        $cart = Cart::where('user_id', $id)->where('product_id', $product_id)->first();

        if($cart){
            $cart->delete();
            return response()->json(['message' => 'Product removed from cart']);
        } else {
            return response()->json(['message' => 'Product not found in cart']);
        }
    }

    // Function that update product quantity in user cart by user id, needs to be authenticated
    public function update(Request $request, $id){
        // Authenticate user
        if(auth()->user()->id != $id){
            return response()->json(['message' => 'Unauthorized'], 401);
        };

        $product_id = $request->product_id;
        $quantity = $request->quantity;

        $cart = Cart::where('user_id', $id)->where('product_id', $product_id)->first();
    
        if($cart){
            $cart->quantity = $quantity;
            $cart->save();
            return response()->json($cart);
        } else {
            return response()->json(['message' => 'Product not found in cart']);
        }
    }

    // Function that delete all products from user cart by user id, needs to be authenticated
    public function destroyAll($id){
        // Authenticate user
        if(auth()->user()->id != $id){
            return response()->json(['message' => 'Unauthorized'], 401);
        };

        $cart = Cart::where('user_id', $id)->get();

        foreach($cart as $item){
            $item->delete();
        }

        return response()->json(['message' => 'Cart cleared']);
    }
}
