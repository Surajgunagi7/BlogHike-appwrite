import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-100 py-10 p-10 dark:bg-light-gray transition-colors duration-300">
            <div className="w-full md:min-w-full mx-auto px-2 md:px-5">
                <div className=" flex flex-wrap justify-center items-start gap-3">
                    <div className="w-full md:w-[22%] mb-6 md:mb-0">
                        <Link to="/" className="flex items-center gap-3">
                            <h3 className="font-medium text-xl dark:text-white transition-colors duration-300">BlogHike</h3>
                        </Link>
                        <p className="text-gray-500 mt-4 md:w-4/5 dark:text-gray-300 transition-colors duration-300">Bringing you the best blog posts from around the world. Stay connected and share your stories.</p>
                    </div>
                    <div className="w-full md:w-1/5 mb-6 md:mb-0">
                        <h3 className="font-medium text-xl mb-4 dark:text-white transition-colors duration-300">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Home</Link></li>
                            <li><Link to="/all-posts" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">All Posts</Link></li>
                            <li><Link to="/add-post" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Add Post</Link></li>
                            <li><Link to="/about" className="text-gray-500 text-base hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="font-medium text-xl mb-4 dark:text-white transition-colors duration-300">Follow Us</h3>
                        <div className="max-w-32 flex lg:flex-nowrap md:flex-wrap items-start gap-3">
                            <a href="https://github.com/Surajgunagi7" target='_blank' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                <i className="ri-github-fill text-2xl"></i>
                            </a>
                            <a href="https://www.instagram.com/_suraj_gunagi__/?igsh=MWxlZWw0OGJ6bTY5cw%3D%3D" target='_blank' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                <i className="ri-instagram-fill text-2xl"></i>   
                            </a>
                            <a href="https://www.linkedin.com/in/suraj-gunagi" target='_blank' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                <i className="ri-linkedin-box-fill text-2xl"></i>
                            </a>
                            <a href="https://discordapp.com/users/surajgunagi" target='_blank' className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                <i className="ri-discord-fill text-2xl"></i>
                            </a>
                            <a href="https://x.com/Suraj_Gunagi7" target="_blank" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                <i className="ri-twitter-x-fill text-2xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="font-medium text-xl mb-4 dark:text-white transition-colors duration-300">Contact</h3>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="cursor-text w-4/6 block md:w-full p-2 mb-4 rounded-lg bg-gray-200 placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-white/90"
                            />
                            <button type="submit" className="max-w-32 w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-10 text-center border-t border-gray-200 pt-4 text-gray-500 flex items-center justify-center dark:text-white dark:border-gray-400 transition-colors duration-300">
                    <p>&copy; 2024 BlogHike. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
