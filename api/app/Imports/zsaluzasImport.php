<?php

namespace App\Imports;

use App\Models\zsaluzas;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class zsaluzasImport implements ToModel,WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new zsaluzas([
            'id' => $row["id"],
            'tablanev' => $row["tablanev"],
            'szint' => $row["szint"],
            'munkanem' => $row["munkanem"],
            'tetel' => $row["tetel"],
            'mennyiseg' => $row["mennyiseg"],
            'mertekegyseg' => $row["mertekegyseg"],
            'anyagegysegar' => $row["anyagegysegar"],
            'dijegysegar' => $row["dijegysegar"],
            'anyagosszesen' => $row["anyagosszesen"],
            'dijosszesen' => $row["dijosszesen"],
            'kiadottosszesen' => $row["kiadottosszesen"],

        ]);
    }
}
