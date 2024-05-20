<?php

namespace App\Services;

use App\Exceptions\ErrorException;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthService {

    public static function signIn($payload) 
    {
        $vld = Validator::make($payload, [
            'username' => 'required',
            'password' => 'required|min:8'
        ]);

        if($vld->fails()) {
            throw new ErrorException('assoc', $vld->messages(), 422);
        }

        $user = UserRepository::findByName($payload['username']);

        if($user == null) {
            throw new ErrorException('string', 'Username does not exist', 401);
        }

        if(!Hash::check($payload['password'], $user->password)) {
            throw new ErrorException('string', 'Password not match', 401);
        }

        $token = $user->createToken(env('TOKEN', 'scpp-token'))->plainTextToken;

        return $token;
    }
}