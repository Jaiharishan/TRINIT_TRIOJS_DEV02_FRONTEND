import React, { useState, useEffect } from 'react';
import Link  from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import axios_auth from '../axios/auth';
const register = () => {
  const router = useRouter();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    const result = await axios_auth.post('register', {
        userName,
        email,
        password,
        confirmPassword

    })
    // const result = await axios.post('http://localhost:4000/auth/user/register', {
    //   userName,
    //   email,
    //   password,
    //   confirmPassword
    // });

    if(!result){
      router.push('/register')
    }

    router.push("/login")

    console.log(result);

    // success
  }


  return (
    <>
      <div className='flex items-center justify-between'>

          {/* img */}
          <div className='hidden md:flex items-center justify-center h-screen w-2/4 bg-yellow-300'>
          <img className='w-96 h-96' src="./registerImg.png" alt="" />
          </div>

          {/* login cred */}
          <div className='h-screen w-full md:w-1/2 flex items-center justify-center'>
            
            <div className='flex flex-col items-center sm:w-4/6 w-96 px-3 py-1 rounded-lg'>


                {/* <div className='flex text-5xl mb-7 font-semibold lg:text-7xl'> <p className='text-yellow-400'>Z</p><p>ED</p></div> */}

                <Link href="/">
                    <a>
                    <img className='' src="./brand.png" />
                    </a>
                </Link>
                

                <div className='self-start mb-1 ml-1'>Username</div>
                <input value={userName} onChange={e => setUserName(e.target.value)} name='userName' className='border-2 bg-yellow-100 border-gray-800 px-4 py-2 w-full rounded-full outline-none mb-3' />

                <div className='self-start mb-1 ml-1'>Email</div>
                <input value={email} onChange={e => setEmail(e.target.value)} name='email' className='border-2 bg-yellow-100 border-gray-800 px-4 py-2 w-full rounded-full outline-none mb-3' />

                <div className='self-start mb-1 ml-1'>Password</div>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} name='password' className='border-2 bg-yellow-100 border-gray-800 px-4 py-2 w-full rounded-full outline-none mb-3' />
                
                <div className='self-start mb-1 ml-1'>Confirm password</div>
                <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} name='confirmPassword' className='border-2 bg-yellow-100 border-gray-800 px-4 py-2 w-full rounded-full outline-none' />

                <button onClick={handleSubmit} type='button' className='border-2 bg-yellow-300 border-gray-800 px-8 py-2 rounded-full mt-7'>Register</button>

                

                <Link href="/login">
                    <a className='my-4'>Have an account? <span className='text-yellow-400'>login</span></a>
                </Link>


                <div className='grid grid-rows-2 gap-3'>
                    <div className='flex items-center justify-start border-2 bg-yellow-100 border-gray-800 rounded-full px-4 py-2'>
                        <img className='w-8 h-8 mr-1' src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                        Signup with Google
                    </div>
                    <div className='flex items-center justify-start border-2 bg-yellow-100 border-gray-800 rounded-full px-4 py-2'>
                        <img className='w-8 h-8 mr-1' src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/>
                        Signup with Facebook
                    </div>
                </div>

            </div>
          </div>


      </div>
    </>
  );
};

export default register;