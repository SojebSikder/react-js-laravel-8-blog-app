<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
//use Auth;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Mail;
use App\Mail\PasswordReset;
use Validator;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class UserController extends Controller
{
// JWT Token: VsvuDxEa7UUzVc7rOY2rRZwFGwjiRFU9a9A4WWfxD7kQnAITnkis5EcQN8gwkfsL

    use AuthenticatesUsers;

    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }


    public function register(Request $request){
        $plainPassword=$request->password;
        $password=bcrypt($request->password);
        $username = $request->username;
        $email = $request->email;

        $request->request->add(['name' => $username]);
        $request->request->add(['email' => $email]);
        $request->request->add(['password' => $password]);
        
        // create the user account 
        $created=User::create($request->all());
        $request->request->add(['password' => $plainPassword]);
        // login now..
        return $this->login($request);
    }


    public function login(Request $request)
    {
        
        $input = $request->only('name', 'password');
        $jwt_token = null;
        if (!$jwt_token =  $this->guard()->attempt($input)){//JWTAuth::attempt($input)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
            ], 401);
        }
        // get the user 
        $user = Auth::user();
       
        return response()->json([
            'success' => true,
            'token' => $jwt_token,
            'user' => $user
        ]);
    }


    public function logout(Request $request){
        if(!User::checkToken($request)){
            return response()->json([
             'message' => 'Token is required',
             'success' => false,
            ],422);
        }
        
        try {
            JWTAuth::invalidate(JWTAuth::parseToken($request->token));
            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], 500);
        }
    }


    public function getCurrentUser(Request $request){
       if(!User::checkToken($request)){
           return response()->json([
            'message' => 'Token is required'
           ],422);
       }
        
        $user = JWTAuth::parseToken()->authenticate();
       // add isProfileUpdated....
       $isProfileUpdated=false;
        if($user->isPicUpdated==1 && $user->isEmailUpdated){
            $isProfileUpdated=true;
            
        }
        $user->isProfileUpdated=$isProfileUpdated;

        return $user;
    }

   
    public function update(Request $request){
        $user=$this->getCurrentUser($request);
        if(!$user){
            return response()->json([
                'success' => false,
                'message' => 'User is not found'
            ]);
        }
    
        unset($data['token']);

        $updatedUser = User::where('id', $user->id)->update($data);
        $user =  User::find($user->id);

        return response()->json([
            'success' => true, 
            'message' => 'Information has been updated successfully!',
            'user' =>$user
        ]);
    }
}
