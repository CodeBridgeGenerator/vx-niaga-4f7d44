<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'string|max:250',
'email' => 'string|max:250',
'taxNo' => 'string|max:250',
'otherInfo' => 'string|max:250',
'rememberToken' => 'string|max:250',
'createdAt' => 'string|max:250',
'updatedAt' => 'string|max:250'
            // 'name' => 'required|string|max:250',
            // 'email' => 'required|email|max:250|unique:users',
            // 'password' => 'required|min:3|confirmed'
        ];
    }
}
