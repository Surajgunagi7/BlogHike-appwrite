import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin } from '../store/authSlice'
import {Button, Input, Logo, Container} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const handleLogin = async(data) => {
        setError('')
        try {
            const session = await authService.login(data)   // creates a session 
            
            if(session) {
                const userData = await authService.getCurrentAccount()  // get the userData
                
                if(userData) dispatch(authLogin(userData));   // Update it at the Store - [state]
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    
    return (
        <section
            className='mt-32 mb-36 md:mt-28 md:mb-44'>
                <Container className='flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20'>
                    <div className='w-full max-w-xs sm:max-w-sm lg:max-w-md xl:mx-auto'>
                        <div className='mb-4 flex justify-center text-xl font-bold sm:text-2xl'>
                            <Logo />
                        </div>
                        <h2 
                            className='text-center md:text-2xl font-bold leading-tight text-black sm:text-xl'>
                                Sign in to your account 
                        </h2>
                        <p className="mt-2 text-center text-xs text-gray-600 sm:text-sm">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to='/signup'
                                className='font-semibold text-black transition-all duration-200 hover:underline hover:text-blue-600'>
                                    Create a free account
                            </Link>
                        </p>
                        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}    {/*Invalid password, email messages*/}
                        <form 
                            onSubmit={handleSubmit(handleLogin)}  className='mt-6 sm:mt-8'>
                                <Container className='space-y-4 sm:space-y-5'>
                                    <Input 
                                        className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        label="Email: " 
                                        placeholder="Enter your Email" 
                                        type="email"
                                        {...register("email", {
                                            required: true,
                                            validate: {
                                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be valid address",  
                                            } 
                                        })}
                                    />
                                    <Input
                                        className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        label="password: "
                                        type="password"
                                        placeholder="Enter your password"
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                    <Button 
                                        type="submit" 
                                        bgColor='bg-blue-600'
                                        textColor='text-white'
                                        className='inline-flex w-full items-center justify-center rounded-md px-3 py-2 font-base leading-7 hover:bg-blue-600/80'>
                                            Get Started <span className='ml-2 font-[16px]'>&rarr;</span>
                                    </Button>
                                </Container>
                        </form>
                    </div>
                </Container>
        </section>
    )
}

export default Login