<?php

namespace App\Interfaces;

interface Sheet1RepositoryInterface 
{
    public function getAllSheet1s();
    public function getSheet1ById($sheet1Id);
    public function deleteSheet1($sheet1Id);
    public function createSheet1(array $sheet1Details);
    public function updateSheet1($sheet1Id, array $newDetails);
}