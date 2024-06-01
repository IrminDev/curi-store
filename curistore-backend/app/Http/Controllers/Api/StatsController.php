<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class StatsController extends Controller
{
    public function index(){
        if(auth()->user()->role_id !== 2){
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $stats = DB::table('stats_view')->get();
        return response()->json($stats);
    }

    public function show(){
        if(auth()->user()->role_id !== 2){
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $earnings = DB::table('stats_view')->select(DB::raw('SUM(earnings) as total_earnings'))->get();
        $users = DB::table('users')->count();
        $products = DB::table('products')->count();
        $purchases = DB::table('purchases')->count();

        return response()->json([
            'earnings' => $earnings->first()->total_earnings,
            'users' => $users,
            'products' => $products,
            'purchases' => $purchases
        ]);
    }

    public function statsByBrand(){
        if(auth()->user()->role_id !== 2){
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $stats = DB::table('stats_view')->select('brand', DB::raw('SUM(earnings) as total_earnings'))->groupBy('brand')->orderBy('total_earnings', 'desc')->get();
        return response()->json($stats);
    }

    public function statsByCategory(){
        if(auth()->user()->role_id !== 2){
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $stats = DB::table('stats_view')->select('category', DB::raw('SUM(earnings) as total_earnings'))->groupBy('category')->orderBy('total_earnings', 'desc')->get();
        return response()->json($stats);
    }

    public function statsByProduct(){
        if(auth()->user()->role_id !== 2){
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $stats = DB::table('stats_view')->select('title', DB::raw('SUM(earnings) as total_earnings'))->groupBy('title')->orderBy('total_earnings', 'desc')->get();
        return response()->json($stats);
    }
}
