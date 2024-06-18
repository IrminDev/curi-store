<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Purchase;
use App\Models\Order;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PurchaseController extends Controller{
    public function getPurchasesByUserId(Request $request){
        $user_id = $request->user_id;
        
        if($user_id != auth()->user()->id){
            return response()->json(['error' => 'Unauthorized'])->setStatusCode(401);
        }

        $purchases = Purchase::where('user_id', $user_id)->with('order')->get();
        return response()->json($purchases);
    }

    public function storeMultipleOrders(Request $request){
        $data = $request->all();
        $validator = Validator::make($data, [
            'user_id' => 'required',
            'address_id' => 'required'
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()])->setStatusCode(400);
        }

        if($data['user_id'] != auth()->user()->id){
            return response()->json(['error' => 'Unauthorized'])->setStatusCode(401);
        }

        $purchase = Purchase::create($data);

        $orders = [];

        foreach($data['orders'] as $order){
            $orderValidator = Validator::make($order, [
                'product_id' => 'required',
                'quantity' => 'required'
            ]);

            if($orderValidator->fails()){
                return response()->json(['error' => $orderValidator->errors()])->setStatusCode(400);
            }

            $order['purchase_id'] = $purchase->id;
            $order = Order::create($order);

            array_push($orders, $order);
        }

        return response()->json([
            'status' => 'ok',
            'message' => 'Purchase created',
            'data' => [
                'purchase' => $purchase,
                'orders' => $orders
            ]
        ]);
    }

    public function show($id){
        $purchase = Purchase::find($id).with('order');
        return response()->json($purchase);
    }

}