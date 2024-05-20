<?php

namespace Database\Seeders;

use App\Models\Mitra;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MitraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'nama_kios' => 'KIOS 1',
                'nomor_rekening' => '1234567890',
                'alamat' => 'Jalan Merdeka Barat',
                'npwp' => '1234567890'
            ],
            [
                'nama_kios' => 'KIOS 1',
                'nomor_rekening' => '1234567890',
                'alamat' => 'Jalan Merdeka Barat',
                'npwp' => '1234567890'
            ],
            [
                'nama_kios' => 'KIOS 1',
                'nomor_rekening' => '1234567890',
                'alamat' => 'Jalan Merdeka Barat',
                'npwp' => '1234567890'
            ],
            [
                'nama_kios' => 'KIOS 1',
                'nomor_rekening' => '1234567890',
                'alamat' => 'Jalan Merdeka Barat',
                'npwp' => '1234567890'
            ],
            [
                'nama_kios' => 'KIOS 1',
                'nomor_rekening' => '1234567890',
                'alamat' => 'Jalan Merdeka Barat',
                'npwp' => '1234567890'
            ],
            [
                'nama_kios' => 'KIOS 1',
                'nomor_rekening' => '1234567890',
                'alamat' => 'Jalan Merdeka Barat',
                'npwp' => '1234567890'
            ],
        ];
        Mitra::insert($data);
    }
}
