<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(){
        // List all users and their wallets
        return response()->json(
            User::with('wallet')->get()
        );
    }

    public function login(Request $request)
    {
        $request = $request->all();
        $validator = Validator::make($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()])->setStatusCode(400);
        }

        $user = User::where('email', $request['email'])->first();

        if(!$user || !Hash::check($request['password'], $user->password)){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid credentials'
            ])->setStatusCode(401);
        }

        return response()->json([
            'status' => 'ok',
            'message' => 'Login successful',
            'data' => $user
        ]);
    }

    public function show($id){
        return response()->json(
            User::find($id)
        );
    }

    public function store(Request $request){
        $data = $request->all();
        $validator = Validator::make($data, [
            'name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()])->setStatusCode(400);
        }

        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);

        $walletData = [
            'user_id' => $user->id,
            'balance' => 5000
        ];

        Wallet::create($walletData);

        return response()->json([
            'status' => 'ok',
            'message' => 'User created successfully',
            'data' => $data
        ])->setStatusCode(201);
    }

    public function createAdmin(Request $request){
        try {
            if(auth()->user()->role_id !== 2){
                return response()->json(['message' => 'Unauthorized'], 401);
            }

            $data = $request->all();
            $validator = Validator::make($data, [
                'name' => 'required',
                'last_name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required'
            ]);

            if($validator->fails()){
                return response()->json(['error' => $validator->errors()])->setStatusCode(400);
            }

            $data['password'] = Hash::make($data['password']);
            $data['role_id'] = 2;

            $user = User::create($data);

            $walletData = [
                'user_id' => $user->id,
                'balance' => 5000
            ];

            Wallet::create($walletData);

            return response()->json([
                'status' => 'ok',
                'message' => 'Admin created successfully',
                'data' => $data
            ])->setStatusCode(201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => $th->getMessage()
            ])->setStatusCode(500);
        }
    }
}
