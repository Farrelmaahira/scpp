<?php

namespace App\Http\Controllers;

use App\Exceptions\ErrorException;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $user = AuthService::signIn($request->all());
            return response()->json([
                'token' => $user
            ]);
        } catch (ErrorException $e) {

            if ($e->type == 'assoc') {
                return response()->json([
                    'message' => json_decode($e->getMessage())
                ], $e->getCode());
            }

            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());

        }
    }
}
