<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ajanlat', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('tetel');
            $table->string('mennyiseg');
            $table->string('mertekegyseg');
            $table->string('anyagegysegar');
            $table->string('dijegysegar');
            $table->string('anyagosszesen');
            $table->string('dijosszesen');
            $table->string('kiadottosszesen');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ajanlat');
    }
};
