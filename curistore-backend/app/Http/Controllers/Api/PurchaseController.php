<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Purchase;
use App\Models\Order;
use App\Models\Wallet;
use App\Models\Product;
use App\Models\Address;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PurchaseController extends Controller{
    public function getPurchasesByUserId(Request $request){
        $user_id = $request->user_id;
        
        if($user_id != auth()->user()->id){
            return response()->json(['error' => 'Unauthorized'])->setStatusCode(401);
        }

        $purchases = Purchase::where('user_id', $user_id)->with('order')->get();

        // Get the products for each order
        foreach($purchases as $purchase){
            foreach($purchase->order as $order){
                $order->product = Product::find($order->product_id);
            }
        }

        // Get the address for each purchase
        foreach($purchases as $purchase){
            $purchase->address = Address::find($purchase->address_id);
        }

        // Calculate the total for each purchase
        foreach($purchases as $purchase){
            $purchase->total = 0;
            foreach($purchase->order as $order){
                $purchase->total += $order->product->price * $order->quantity;
            }
        }

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

        // First check if the stock is available
        $orders = $data['products'];
        foreach($orders as $order){
            $product = Product::find($order['product_id']);
            if($product->stock < $order['quantity']){
                return response()->json(['error' => 'Stock not available'])->setStatusCode(400);
            }
        }

        // Check if the address belongs to the user
        $address = Address::find($data['address_id']);
        if($address->user_id != $data['user_id']){
            return response()->json(['error' => 'Unauthorized'])->setStatusCode(401);
        }

        // Check if the user has enough balance
        $total = 0;
        foreach($orders as $order){
            $product = Product::find($order['product_id']);
            $total += $product->price * $order['quantity'];
        }

        $wallet = Wallet::where('user_id', $data['user_id'])->first();
        if($wallet->balance < $total){
            return response()->json(['error' => 'Insufficient balance'])->setStatusCode(400);
        }

        // Create the purchase
        $purchase = Purchase::create([
            'user_id' => $data['user_id'],
            'address_id' => $data['address_id'],
            'total' => $total
        ]);

        // Create the orders
        foreach($orders as $order){
            Order::create([
                'purchase_id' => $purchase->id,
                'product_id' => $order['product_id'],
                'quantity' => $order['quantity']
            ]);

            // Update the stock
            $product = Product::find($order['product_id']);
            $product->stock -= $order['quantity'];
            $product->save();
        }

        // Update the wallet
        $wallet->balance -= $total;
        $wallet->save();

        return response()->json([
            'status' => 'ok',
            'message' => 'Purchase created',
            'data' => [
                'purchase' => $purchase,
                'orders' => $orders
            ]
        ]);
    }

    public function show(Request $request){
        $id = $request->id;
        $purchase = Purchase::with('order')->find($id);

        if(auth()->user()->id != $purchase->user_id){
            return response()->json(['error' => 'Unauthorized'])->setStatusCode(401);
        }

        // Get the products for each order
        foreach($purchase->order as $order){
            $order->product = Product::find($order->product_id);
        }

        // Get the address for each purchase
        $purchase->address = Address::find($purchase->address_id);

        // Calculate the total for each purchase
        $purchase->total = 0;
        foreach($purchase->order as $order){
            $purchase->total += $order->product->price * $order->quantity;
        }

        return response()->json($purchase);
    }
}