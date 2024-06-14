<?php

namespace Database\Seeders;

use App\Models\Mitra;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MitraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [];
        for ($i = 1; $i <= 5; $i++) {
            $uuid = Str::uuid();
            $trimUUID = explode('-', $uuid);
            array_push($data, [
                'id' => $trimUUID[0],
                'nama_kios' => 'KIOS ' . $i,
                'nomor_rekening' => '1234567890',
                'alamat' => 'Jalan Merdeka Barat',
                'npwp' => '1234567890'
            ]);
        }
        Mitra::insert($data);
    }
}
