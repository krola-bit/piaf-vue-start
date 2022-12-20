<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Imports\UsersImport;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    public function list()
    {
        $users = User::get();
        return view('users',['users' => $users]);
    }


    public function zsaluzas()
    {
        $zsaluzas = zsaluzas::get();

        return view('zsaluzas',['zsaluzas' => $zsaluzas]);
    }




    public function import_user(Request $request){
        $request->validate([
            'excel_file' => 'required|mimes:xls,xlsx'
        ]);

        Excel::import(new UsersImport, $request->file('excel_file'));
        return redirect()-> back()->with('success', 'Excel Data Imported successfully.');
    }

    public function export_user(){
        return Excel::download(new UsersImport, 'users.xlsx');
    }

    
}
