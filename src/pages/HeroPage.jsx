import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components';
import imgSVG from '../assets/undraw_blogging_re_kl0d.svg';

function HeroPage() {
    return (
        <div className="bg-white text-center py-8">
            <Container className="my-32 md:my-36">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 text-gray-700">
                    Welcome to BlogHike
                </h1>
                <h2 className="text-lg md:text-xl font-semibold mb-12 md:mb-20 text-gray-500">
                    Your journey to sharing your stories starts here.
                </h2>
                <img
                    src={imgSVG}
                    alt="No posts yet"
                    className="mx-auto w-2/3 md:w-1/2 lg:w-1/3 mb-8 "
                />
                <p className="text-sm md:text-base text-gray-600 mb-2">
                    It seems like you don&rsquo;t have any posts yet. Let&rsquo;s get started!
                </p>
                <Link
                    to="/add-post"
                    className="inline-block text-sm md:text-base bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow hover:bg-blue-700 transition mb-4"
                >
                    Create Your First Post
                </Link>
                <br />
                <Link
                    to="/login"
                    className="inline-block text-sm md:text-base text-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-lg hover:text-blue-700 transition"
                >
                    Explore Existing Posts
                </Link>
            </Container>
        </div>
    );
}

export default HeroPage;
