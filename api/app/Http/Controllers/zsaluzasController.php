<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\zsaluzas;
use App\Imports\zsaluzasImport;
use Maatwebsite\Excel\Facades\Excel;

class zsaluzasController extends Controller
{
    public function zsaluzas()
    {
        $zsaluzas = zsaluzas::get();

        return response()->json($zsaluzas);
    }

    public function import_zsaluzas(Request $request){
        $request->validate([
            'excel_file' => 'required|mimes:xls,xlsx'
        ]);

        Excel::import(new zsaluzasImport, $request->file('excel_file'));
        return redirect()-> back()->with('success', 'Excel Data Imported successfully.');
    }
}
