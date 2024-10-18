<?php

namespace App\Repositories;

use App\Interfaces\Sheet1RepositoryInterface;
use App\Models\Sheet1;
use App\Http\Resources\Sheet1Resource;

class Sheet1Repository implements Sheet1RepositoryInterface 
{
    public function getAllSheet1s() 
    {
        $sheet1 = Sheet1::all();
        return Sheet1Resource::collection($sheet1);
    }

    public function getSheet1ById($Sheet1Id) 
    {
        $sheet1 = Sheet1::findOrFail($Sheet1Id);
        return Sheet1Resource::collection($sheet1);
    }

    public function deleteSheet1($Sheet1Id) 
    {
        Sheet1::destroy($Sheet1Id);
    }

    public function createSheet1(array $Sheet1Details) 
    {
        return Sheet1::create($Sheet1Details);
    }

    public function updateSheet1($Sheet1Id, array $newDetails) 
    {
        $users = Sheet1::whereId($Sheet1Id)->update($newDetails);
        return Sheet1Resource::collection($sheet1);
    }

}