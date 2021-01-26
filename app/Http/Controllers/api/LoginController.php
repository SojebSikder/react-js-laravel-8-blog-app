<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
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
        // create our user data for the authentication
        $userdata = array(
            'email'     => $request->username,
            'password'  => $request->email
        );

        // attempt to do the login
        if (Auth::attempt($userdata)) {

            // validation successful!
            // redirect them to the secure section or whatever
            // return Redirect::to('secure');
            // for now we'll just echo success (even though echoing in a controller is bad)
            echo true;

        } else {        

            // validation not successful, send back to form 
            return false;

        }
    }

    public function logout()
    {
        Auth::logout();
        return true;
    }
}
