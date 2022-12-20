<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class zsaluzas extends Model
{
    use HasFactory;

    

    protected $fillable = [
        'tablanev',
        'szint',
        'munkanem',
        'tetel',
        'mennyiseg',
        'mertekegyseg',
        'anyagegysegar',
        'dijegysegar',
        'anyagosszesen',
        'dijosszesen',
        'kiadottosszesen',
       
    ];  
    

}
