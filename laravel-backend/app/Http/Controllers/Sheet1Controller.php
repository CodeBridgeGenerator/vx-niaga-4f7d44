<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Sheet1;
use App\Interfaces\Sheet1RepositoryInterface;
use App\Http\Requests\CreateSheet1Request;

class Sheet1Controller extends Controller
{
    private Sheet1RepositoryInterface $userRepository;

    public function __construct(Sheet1RepositoryInterface $userRepository) 
    {
        $this->Sheet1Repository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->Sheet1Repository->getAllSheet1s()
        ]);
    }

    public function store(CreateSheet1Request $request): JsonResponse 
    {
        $user = Sheet1::create($request->validated());
        return response()->json(['message' => 'Sheet1 created successfully']);
    }

}
