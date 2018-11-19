<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Extensions\Validate;


class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */


    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    private $phone = '';
    private $sex = '';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }


    /**
     * 显示注册表单
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function RegistrationForm()
    {
        return view('auth/register');
    }


    public function register(Request $request)
    {
        $validate = $this->validator($request->all());
        if (!$validate->passes()) {
            return back()->withInput()->withErrors($validate);
        }
        $user = $this->save($request->all());
        if ($user->id) {
            session([
                'id' => $user->id,
                'username' => $user->username,
                'phone' => $this->user->phone,
                'sex' => $user->sex,
                'head_image' => $this->user->head_image,
                'status' => 1
            ]);
        }
        return redirect($this->redirectTo);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $this->phone = trim($data['phone']);
        $this->sex = trim($data['sex']);
        $validator = Validator::make($data,
            [
                'username' => 'required|string|max:50|unique:user',
                'phone' => 'required|string|max:11|unique:user',
                'password' => 'required|string|min:6|confirmed',
                'sex' => 'required'
            ],
            [
                'username.required' => '用户名必须填写',
                'username.max' => '用户名太长',
                'username.unique' => '用户名已存在',
                'phone.required' => '手机号必须填写',
                'phone.unique' => '手机号已存在',
                'password.required' => '密码不能为空',
                'password.min' => '密码最少为6位字符',
                'password.confirmed' => '重复密码不正确',
                'sex.required' => '请选择性别'
            ]);

        $validator->after(function ($validator) {
            if (!Validate::isMobile($this->phone)) {
                $validator->errors()->add('手机号格式错误', '用户不存在');
            }
            if ($this->sex != 1 && $this->sex != 2) {
                $validator->errors()->add('password', '密码错误');
            }
        });

        return $validator;

    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return \App\User
     */
    protected function save(array $data)
    {
        $user = new User();
        $user->username = trim($data['username']);
        $user->password = md5(trim($data['password']));
        $user->phone = trim($data['phone']);
        $user->sex = trim($data['sex']);
        $user->save();
        return $user;

    }


    public function receive(Request $request)
    {
        # 
    }


}
