import { Logo, LogoutBtn, ThemeBtn} from '../index'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const [isMenuOpen, SetIsMenuOpen] = useState(false)
    const [isScrolled, SetIsScrolled] = useState(false)
    const isDarkMode = useSelector(state => state.dark.isDarkMode)
    
    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
        {
            name:"Explore",
            slug: "/signup",
            active: !authStatus
        },
        {
            name:"About",
            slug: "/login",
            active: !authStatus
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            SetIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    const toggleMenu = () => SetIsMenuOpen(!isMenuOpen)


    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:px-4`}>
            <nav className={`transition-colors duration-300 max-w-6xl flex flex-wrap py-3 justify-between items-center px-6 mt-5 mx-4 md:mx-auto rounded-lg md:rounded-full shadow-md border-[2px] ${isScrolled ? 'bg-white/60 dark:bg-dark-gray/60 dark:border-black/20 backdrop-blur-md border-b border-gray-200 dark:shadow-none' : 'bg-white/30 dark:bg-dark-gray/30 backdrop-blur-md border-2 dark:border-gray-700'} ${isScrolled ? 'md:mt-3 shadow-lg dark:shadow-md' : 'md:mt-5'}`}>
                <div className="flex justify-between w-full md:w-auto">
                    <Link to="/" className="flex items-center gap-3">
                        <Logo width={40} height={40}/>
                        <span className='font-semibold text-[1.2rem] md:text-[1.3rem] text-blue-600 dark:text-blue-500'>BlogHike</span>
                    </Link>
                    <button 
                        className="block md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
                        onClick={toggleMenu}>
                        <svg 
                            className="w-6 h-6" 
                            fill="none" stroke={`${isDarkMode ? 'white' : 'currentColor'}`} 
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path 
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}>
                            </path>
                        </svg>
                    </button>
                </div>
                <div className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center md:flex-1`}>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.slug}
                                        className={`block ${isMenuOpen ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-200'}  px-4 py-2 rounded-lg md:rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 font-normal text-base`}
                                        onClick={() => SetIsMenuOpen(false)}>
                                            {item.name}
                                    </NavLink>
                                </li>
                        ) : null)}
                    </ul>
                </div>
        
                <div className={`mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex gap-3 md:items-center md:justify-center`}>
                    <ThemeBtn className={` ${isMenuOpen ? 'm-4 mt-1' : ""} `} iClass={`${isMenuOpen ? 'rounded-lg' : ''}`}/>
                    {authStatus ? (
                        <LogoutBtn className={`block ${isMenuOpen ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-200'} border-2 dark:border-gray-700 px-4 py-2 rounded-lg md:rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 font-normal text-base md:ml-auto`} />
                    ) : (
                        <NavLink 
                            to='/login' 
                            className={`block ${isMenuOpen ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-200'} border-2 dark:border-gray-700 px-4 py-2 rounded-lg md:rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 font-normal text-base md:ml-auto`}
                            onClick={() => SetIsMenuOpen(false)}>
                                Login
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    )

}

export default Header