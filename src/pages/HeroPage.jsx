import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components';
import imgSVG from '../assets/undraw_blogging_re_kl0d.svg';

function HeroPage() {
    return (
        <div className="bg-white dark:bg-dark-gray text-center py-8 transition-colors duration-300">
            <Container className="my-32 md:my-36">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Welcome to BlogHike
                </h1>
                <h2 className="text-lg md:text-2xl font-medium mb-8 md:mb-16 text-gray-600 dark:text-gray-300">
                    Your journey to sharing your stories starts here.
                </h2>
                <img
                    src={imgSVG}
                    alt="No posts yet"
                    className="mx-auto w-3/4 md:w-1/2 lg:w-1/3 mb-8"
                />
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 mb-4 px-8 md:px-1">
                    It seems like you don&apos;t have any posts yet. Let&apos;s get started!
                </p>
                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Link
                        to="/add-post"
                        className="inline-block text-base bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Create Your First Post
                    </Link>
                    <Link
                        to="/login"
                        className="inline-block text-base text-blue-600 dark:text-blue-400 px-5 py-3 rounded-lg hover:text-blue-700 dark:hover:text-blue-500 transition"
                    >
                        Explore Existing Posts
                    </Link>
                </div>

                <div className="mt-16 md:mt-24 p-6 md:p-12 bg-white dark:bg-dark-gray rounded-lg transition-colors duration-300">
                    <h3 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
                        Explore the Possibilities
                    </h3>
                    <div className="lg:px-24 xl:px-28 md:px-16 sm:px-20 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                        {[
                            {
                                title: "Extensive Blog Length",
                                description: "Write and publish blog posts up to 10,000 words long. Share your thoughts and stories in detail with no restrictions.",
                                icon: (
                                    <i className="ri-bar-chart-horizontal-fill text-6xl text-blue-600 mx-auto"></i>
                                ),
                            },
                            {
                                title: "Banner Images",
                                description: "Customize your blog with eye-catching banner images to make your posts stand out and attract readers.",
                                icon: (
                                    <i className="ri-folder-image-fill text-6xl text-blue-600 mx-auto"></i>
                                ),
                            },
                            {
                                title: "Embedded Images",
                                description: "Add images within your blog posts to enhance your content and engage your audience with visuals.",
                                icon: (
                                    <i className="ri-file-image-line text-6xl text-blue-600 mx-auto"></i>
                                ),
                            },
                            {
                                title: "Fully Responsive",
                                description: "Enjoy a seamless blogging experience across all devices. Your blog is always accessible, whether on mobile, tablet, or desktop.",
                                icon: (
                                    <i className="ri-rectangle-line text-6xl text-blue-600 mx-auto"></i>
                                ),
                            },
                            {
                                title: "Light and Dark Mode",
                                description: "Switch between light and dark modes to suit your reading preference or environment. Customize your experience effortlessly.",
                                icon: (
                                    <i className="ri-contrast-2-fill text-6xl text-blue-600 mx-auto"></i>
                                ),
                            },
                            {
                                title: "Secure and Private",
                                description: "Your data is protected with top-notch security measures. BlogHike ensures that your content remains private and secure.",
                                icon: (
                                    <i className="ri-git-repository-private-line text-6xl text-blue-600 mx-auto"></i>
                                ),
                            },
                        ].map((feature, index) => (
                            <div key={index} className="bg-white dark:bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition border dark:border-none">
                                <div className="mb-4">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HeroPage;
