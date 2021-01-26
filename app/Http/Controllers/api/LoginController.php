<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;
Use Redirect;
use Auth;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
     /*   $this->validate($request, [
            'name'   => 'required',
            'password'  => 'required'
           ]);  */

        // create our user data for the authentication
        $userdata = array(
            'name'     => $request->username,
            'password'  => $request->password
        );

        

        // attempt to do the login
        if (Auth::attempt($userdata)) {

            // validation successful!
            // redirect them to the secure section or whatever
            // return Redirect::to('secure');
            // for now we'll just echo success (even though echoing in a controller is bad)
            $status = [
                'status'=>1
            ];
            return json_encode($status);

        } else {        

            // validation not successful, send back to form 
            $status = [
                'status'=>0
            ];
            return json_encode($status);

        }
    }

    public function logout()
    {
        Auth::logout();
        return true;
    }
}
