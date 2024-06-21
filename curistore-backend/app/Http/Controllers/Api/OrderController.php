<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;


class OrderController extends Controller{
    public function getOrdersByPurchaseId(Request $request){
        $purchase_id = $request->purchase_id;
        $orders = Order::where('purchase_id', $purchase_id)->get();
        return response()->json($orders);
    }
}
