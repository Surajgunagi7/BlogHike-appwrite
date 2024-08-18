import service from '../appwrite/config';
import { Link } from 'react-router-dom';
import NoImage from '../assets/undraw_images_re_0kll.svg';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="block group">
            <div className="w-full rounded-md border-[2px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                    src={featuredImage ? service.getFilePreview(featuredImage) : NoImage}
                    alt={title}
                    className="h-[180px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4 bg-white">
                    <h1
                        className="text-base sm:text-lg font-semibold text-gray-800 h-[3em] line-clamp-2 overflow-hidden"
                        style={{ lineHeight: '1.5em' }}
                    >
                        {title}
                    </h1>
                    <button
                        type="button"
                        className="mt-4 rounded bg-black px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-black/80 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Read
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
