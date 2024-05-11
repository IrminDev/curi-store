<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Address;

class AddressController extends Controller
{
    public function addressesByUserId(Request $request){
        $user_id = $request->user_id;
        $addresses = Address::where('user_id', $user_id)->get();
        return response()->json($addresses);
    }

    public function store(Request $request){
        $data = $request->all();
        $validator = Validator::make($data, [
            'user_id' => 'required',
            'name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'city' => 'required',
            'postal_code' => 'required',
            'primary' => 'required'
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()])->setStatusCode(400);
        }

        $address = Address::create($data);

        return response()->json([
            'status' => 'ok',
            'message' => 'Address created',
            'data' => $address
        ]);
    }

    public function showAddressesByUserId($user_id, $address_id){
        $addresses = Address::where('user_id', $user_id)->where('id', $address_id);
        return response()->json($addresses);
    }

    public function update(Request $request, $id){
        $data = $request->all();
        $validator = Validator::make($data, [
            'user_id' => 'required',
            'name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'city' => 'required',
            'postal_code' => 'required',
            'primary' => 'required'
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()])->setStatusCode(400);
        }

        $address = Address::find($id);
        $address->update($data);

        return response()->json([
            'status' => 'ok',
            'message' => 'Address updated',
            'data' => $address
        ]);
    }

    public function destroy($id){
        $address = Address::find($id);
        $address->delete();
        return response()->json([
            'status' => 'ok',
            'message' => 'Address deleted'
        ]);
    }
    
}
