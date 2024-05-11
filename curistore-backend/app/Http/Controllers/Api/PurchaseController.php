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
        $purchases = Purchase::where('user_id', $user_id)->get();
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
        return response()->json(
            Purchase::find($id)
        );
    }
}