<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(
            User::all()
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

        User::create($data);

        return response()->json([
            'status' => 'ok',
            'message' => 'User created successfully',
            'data' => $data
        ])->setStatusCode(201);
    }
}
