<?php

namespace App\Http\Controllers;

use App\Models\Mitra;
use Illuminate\Http\Request;

class MitraController extends Controller
{
    public function getData()
    {
        $mitra = Mitra::all();
        return response()->json($mitra);
    }
}
