import {useState, useEffect} from "react";
import { Link, useNavigate, useParams  } from "react-router-dom";
import service from "../appwrite/config";
import {Button, Container} from '../components'
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import noImage from '../assets/undraw_images_re_0kll.svg'

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {        
        if(slug) {
            service.getPost(slug).then((post) => {
                if(post) setPost(post)
                else navigate('/')
            });
        }else {
            navigate('/')
        }
    },[slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if(status) {
                service.deleteFile(post.featuredImage);
                navigate('/')
            }
        });
    };
    
    return post ? (
        <Container className="my-32 md:my-36 px-20">
            <div className="space-y-8">
                <img 
                    src={post.featuredImage ? service.getFilePreview(post.featuredImage) : noImage}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
                />
                {isAuthor && (
                    <div className="flex space-x-4">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button 
                                bgColor="bg-green-600" 
                                className="px-4 py-2 text-white rounded-md hover:bg-green-600">
                                    Edit
                            </Button>
                        </Link>
                        <Button 
                            bgColor="bg-red-500" 
                            onClick={deletePost} 
                            className="px-4 py-2 text-white rounded-md hover:bg-red-600">
                                Delete
                        </Button>
                    </div>
                )}
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{post.title}</h1>

                <div className="prose prose-lg max-w-full text-gray-700">
                    {parse(post.content)}
                </div>
            </div>
        </Container>
    ) : null;
}