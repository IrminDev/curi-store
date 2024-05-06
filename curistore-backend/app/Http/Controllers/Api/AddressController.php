<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'Address index'
        ]);
    }

    public function store(Request $request)
    {
        return response()->json([
            'message' => 'Address store'
        ]);
    }

    public function show($id)
    {
        return response()->json([
            'message' => 'Address show'
        ]);
    }

    public function update(Request $request, $id)
    {
        return response()->json([
            'message' => 'Address update'
        ]);
    }

    public function destroy($id)
    {
        return response()->json([
            'message' => 'Address destroy'
        ]);
    }
}
