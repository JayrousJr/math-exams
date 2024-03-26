<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class Authcontroller extends Controller
{

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => "Provided credentials are incorrect",
                'status' => 'Failed',
            ], 403);
        }
        /** @var \App\Models\User $user */
        $user = User::where('email', $credentials['email'])->first();
        $token = $user->createToken('auth_token')->plainTextToken;
        $cookie = cookie('cookie', $token, 60 * 24);
        return response()->json([
            'user' => $user,
            'token' => $token
        ])->withCookie($cookie);
    }

    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);
        /** @var \App\Models\User $user */

        $token = $user->createToken('auth_token')->plainTextToken;
        $cookie = cookie('token', $token, 60 * 24);

        return response()->json([
            'user' => $user,
            'token' => $token
        ])->withCookie($cookie);
    }

    public function logout(Request $request)
    {

        /** @var \App\Models\User $user */

        $user = $request->user();
        $user->currentAccessToken()->delete();
        $cookie = cookie()->forget('token');
        return response()->json([
            'message' => 'Logged Out successiful'
        ])->withCookie($cookie);
    }
}