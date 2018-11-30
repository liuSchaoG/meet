<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */


    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected   $redirectTo = '/';

    public      $user;
    private     $username = '';
    private     $password = '';


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function logout(Request $request)
    {
        $request->session()->flush();
        return redirect($this->redirectTo);
    }

    //登录页
    public function loginForm()
    {
        return view('auth/login');
    }

    //登录逻辑
    public function login(Request $request)
    {
        $validate = $this->validator($request->all());

        if (!$validate->passes()) {
            return back()->withInput()->withErrors($validate);
        }
        if ($this->user) {
            session([
                'id' => $this->user->id,
                'username' => $this->user->username,
                'phone' => $this->user->phone,
                'sex' => $this->user->sex,
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
        $this->username = trim($data['username']);
        $this->password = trim($data['password']);
        $validator = Validator::make($data,
            [
                'username' => 'required|string|max:50',
                'password' => 'required|string|min:6',
            ],
            [
                'username.required' => '用户名必须填写',
                'username.max' => '用户名太长',
                'password.required' => '密码不能为空',
                'password.min' => '密码最少为6位字符',
            ]);


        $validator->after(function ($validator) {
            if (!$this->vilidateUser()) {
                $validator->errors()->add('username', '用户不存在');
            }
            if (!$this->validatePass()) {
                $validator->errors()->add('password', '密码错误');
            }
        });

        return $validator;
    }

    /**
     * 验证用户名
     * @return bool
     */
    private function vilidateUser()
    {
        $user = User::findByUsename($this->username);
        if ($user) {
            $this->user = $user;
            return true;
        }
        $user = User::findByPhone($this->username);
        if ($user) {
            $this->user = $user;
            return true;
        }
        return false;
    }

    /**
     * 验证密码
     * @return bool
     */
    private function validatePass()
    {
        if ($this->user && $this->user->password == md5($this->password)) {
            return true;
        }
        return false;
    }

}
