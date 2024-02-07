<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User; // Asegúrate de importar la clase User
use Illuminate\Support\Facades\Hash; // Importa Hash para usar la función bcrypt
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password) // Utiliza Hash::make para encriptar la contraseña
        ]);

        $token = JWTAuth::fromUser($user);
        return response()->json(['user' => $user, 'token' => $token], 201);
    }
    public function login(LoginRequest $request){
        $credentials = $request->only('email','password');

        if(!$token = JWTAuth::attempt($credentials)){
            return response()->json(['error' => 'invalid_credentials'],401);
        }
        $user = User::where('email',$request->email)->first();
        return response()->json(compact('user','token'),200);
    }
}
