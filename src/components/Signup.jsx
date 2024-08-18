import {useState} from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import {login } from '../store/authSlice' 
import {Button, Input, Logo, Container} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const {register, handleSubmit} = useForm()

    const handleSub = async(data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if(session) {
                const userData = await authService.getCurrentAccount()
                if(userData)  dispatch(login(userData))

                navigate('/')
            }
        } catch (error) {
            console.log(`Signup Com :: Error`, error.message);
            setError(error.message)
        }
    }
    return (
        <section className='my-28 md:mb-32 md:mt-20'>
            <Container className='flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20'>
                <div className='w-full max-w-xs sm:max-w-sm lg:max-w-md xl:mx-auto'>
                    <div className='mb-4 flex justify-center text-xl font-bold sm:text-2xl'>
                        <Logo />
                    </div>
                    <h2 className='text-center md:text-2xl font-bold leading-tight text-black sm:text-xl'>
                        Sign up to create account
                    </h2>
                    <p className='mt-2 text-center text-xs text-gray-600 sm:text-sm'>
                        Already have an account?&nbsp;
                        <Link
                            to='/login'
                            className='font-semibold text-black transition-all duration-200 hover:underline hover:text-blue-600'>
                                Sign In
                        </Link>
                    </p>
                    {error && <p className='text-red-600'>{error}</p>}
                    <form 
                        onSubmit={handleSubmit(handleSub)}
                        className='mt-6 sm:mt-8'>
                            <Container className='space-y-4 sm:space-y-5'>
                                <Input 
                                    label="Name: "
                                    type="text"
                                    placeholder="Enter your Name"
                                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    {...register("name",{
                                        required: true,
                                    })}
                                />
                                <Input 
                                    label="Email: " 
                                    placeholder="Enter your Email" t
                                    type="email"
                                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    {...register("email", {
                                        required: true,
                                        validate: {
                                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be valid address",  
                                        } 
                                    })}
                                />
                                <Input 
                                    label="Password: "
                                    type="password"
                                    placeholder="Enter your password"
                                    className="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    {...register("password",{
                                        required: true,
                                    })}
                                />
                                <Button 
                                    type="submit"
                                    bgColor='bg-blue-600'
                                    textColor='text-white'
                                    className='inline-flex w-full items-center justify-center rounded-md px-3 py-2 font-base leading-7 hover:hover:bg-blue-600/80'>
                                        Create Account <span className='ml-2 font-[16px]'>&rarr;</span>
                                </Button>
                            </Container>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default Signup