<?php 
namespace App\Http\Requests\User;

use App\Http\Requests\Request;

class UserBaseRequest extends Request {

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
        
            'uid'=>'required',
        ];
    }

    public function messages(){
        return [
            'uid.required'=>'账户id不能为空',              
            // 'password.required'=>'密码不能为空',              
            // 'sid.required'=>'文章id不能为空',
            // 'mltCount.integer'=>'数量必须为整数'            
        ];
    }
}
