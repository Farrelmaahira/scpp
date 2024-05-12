<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository {

    public static function findByName($name)
    {
        $user = User::where('username', $name)->first();

        if($user == null) {
            return null;
        }

        return $user;
    }
}