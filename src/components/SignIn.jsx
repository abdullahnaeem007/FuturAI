import React, { useEffect, useMemo, useState } from 'react'
import supabase from '../supabaseClient.js'
import GoogleLogo from '../assets/googlelogo.png'
import DiscodLogo from '../assets/discordlogo.png'

function SignIn() {

    const [dbEmail, setdbEmail] = useState([])

    const [InputEmail, setInputEmail] = useState()

    function updateEmail(e) {
        setInputEmail(e.target.value)
    }

    const [InputPassword, setInputPassword] = useState()

    function updatePassword(e) {
        setInputPassword(e.target.value)
    }

    const SignInWithGoogle = async () => {
        const { user, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                //redirectTo: 'https://localhost:5173/google-signin',
            }
        })
    }

    const checkDatabase = async () => {
        const { data, err } = await supabase.from('users').select('*')
        .eq('email', InputEmail).eq('password', InputPassword)
        if (data.length > 0) {
            sessionStorage.setItem('loggedIn', 'true')
            window.location.href = '/tools'
        }
        else
        {
            console.log('wrong email or password')
            alert('wrong email or password')
        }

        if (err) {
            console.log('error loading data')
        }
    }


    return (
        <div class='w-full h-[100vh] flex justify-center items-center bg-color1'>
            <div class='w-[60%] h-[90%]  flex flex-col justify-between'>
                <div class='w-full h-[32%]  flex justify-center'>
                    <div class='h-full w-fit flex flex-col items-center justify-between'>
                        <div class='w-[10vh] h-[10vh] rounded-full bg-white'></div>
                        <text class='text-white font-heading1 font-extrabold text-3xl'>Sign in to FutureAi</text>
                        <div class='w-[25vh] flex flex-row justify-around'>
                            <button class='w-[9vh] h-[9vh] bg-white rounded-md flex justify-center items-center' onClick={SignInWithGoogle}>
                                <img src={GoogleLogo} class='w-[6vh]' />
                            </button>
                            <button class='w-[9vh] h-[9vh] bg-white rounded-md flex justify-center items-center'>
                                <img src={DiscodLogo} class='w-[5vh]' />
                            </button>
                        </div>
                    </div>
                </div>

                <div class='w-full flex items-center justify-between'>
                    <div class='w-[40%] h-[0.1vh] bg-gray-500' ></div>
                    <text class='text-gray-500'>or via email</text>
                    <div class='w-[40%] h-[0.1vh] bg-gray-500' ></div>
                </div>

                <div class='w-full h-[60%]  text-white flex flex-col'>
                    <div class='w-full h-1/2 flex flex-col justify-evenly'>
                        <text class='text-xl font-mono'>E-mail</text>
                        <input class='w-full h-[45%] rounded-lg text-black px-5' type='email' placeholder='@mail.com' onChange={updateEmail}></input>
                    </div>
                    <div class='w-full h-1/2 flex flex-col justify-evenly '>
                        <text class='text-xl font-mono'>Password</text>
                        <div class='w-full h-[45%]'>
                            <input class='w-full h-full rounded-lg text-black px-5' type='password' placeholder='password' onChange={updatePassword}></input>
                            <text class='text-gray-500'>Must be 8 characters at least</text>
                        </div>
                    </div>
                    <div class='w-full h-4/5 flex items-end '>
                        <div class='w-full h-[80%] flex flex-col justify-between '>
                            <a href='/signup' class='w-full h-fit flex justify-between font-mono'>
                                <text class='underline'>Don't have an account? Sign up</text>
                                <text class='text-blue-600'>Forget Password?</text>
                            </a>
                            <button class='w-full h-[40%] bg-color2 rounded-lg text-xl font-mono' onClick={checkDatabase}>Sign in</button>
                            <div class='w-full h-fit flex justify-center'>
                                <text class='text-sm' >@ All Rights Reserved</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn