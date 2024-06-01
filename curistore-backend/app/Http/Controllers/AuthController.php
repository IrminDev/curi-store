<?php
  
namespace App\Http\Controllers;
  
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Support\Facades\Validator;
  
  
class AuthController extends Controller
{
 
    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register() {
        try {
            $validator = Validator::make(request()->all(), [
                'name' => 'required',
                'last_name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:8',
            ]);
      
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
      
            $user = new User;
            $user->name = request()->name;
            $user->last_name = request()->last_name;
            $user->email = request()->email;
            $user->password = bcrypt(request()->password);
            $user->save();

            $wallet = new Wallet;
            $wallet->user_id = $user->id;
            $wallet->balance = 5000;
            $wallet->save();
            
            $token = auth()->guard('api')->login($user);

            return $this->respondWithToken($token);
            
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Error creating user'], 500);
        }
    }
  
  
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->guard('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }
  
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }
  
    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
  
        return response()->json(['message' => 'Successfully logged out']);
    }
  
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->guard('api')->refresh());
    }
  
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->guard('api')->factory()->getTTL() * 60
        ]);
    }

    public function createAdmin() {
        try {
            $validator = Validator::make(request()->all(), [
                'name' => 'required',
                'last_name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:8',
            ]);
      
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
      
            $user = new User;
            $user->name = request()->name;
            $user->last_name = request()->last_name;
            $user->email = request()->email;
            $user->password = bcrypt(request()->password);
            $user->role_id = 2;
            $user->save();

            $wallet = new Wallet;
            $wallet->user_id = $user->id;
            $wallet->balance = 0;

            $wallet->save();

            return response()->json(['message' => 'Admin created successfully'], 200);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}