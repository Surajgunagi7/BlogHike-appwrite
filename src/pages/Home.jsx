import {useEffect, useState} from 'react'
import service from '../appwrite/config'
import authService from '../appwrite/auth'
import {Container, Loading, PostCard} from '../components'
import { Query } from 'appwrite'
import HeroPage from './HeroPage'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../store/loadingSlice'

function Home() {
    const [posts, setPosts] = useState([])
    const [isloggedIn, setIsLoggedIn] = useState(false);
    const loading = useSelector((state) => state.loading.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showLoading());

        authService.getCurrentAccount().then((currentUser) => {

        if (currentUser) {
            setIsLoggedIn(true)

            const queries = [Query.equal("status","active"), Query.equal("userId", currentUser.$id)];

            service.getPosts(queries)
                .then((posts) => {                              
                    if(posts.documents.length != 0) {
                        setPosts(posts.documents)
                    }else {
                        console.log(`You don't have any posts`);
                        setPosts([]);
                    } 
                    dispatch(hideLoading())
                })
                .catch((error) => {
                    console.error('Error fetching posts:', error);
                    dispatch(hideLoading());
                })
        } else {
            console.log(`Not Logged In`);
            setIsLoggedIn(false)
            dispatch(hideLoading());
        }
            
        })
    },[dispatch])

    if(loading) {
        return (
            <Container>
                <Loading />
            </Container>
        )
    }

    if(!isloggedIn || posts.length === 0) {
        return (
            <Container>
                <HeroPage />
            </Container>
        )
    }
    return (
        <Container className='my-28 md:mt-32 md:mb-40 '>
            <h2 className='mx-auto p-4 font-semibold text-start px-4 sm:px-8 text-xl md:px-16 md:text-2xl lg:px-24 xl:px-32 tracking-wider dark:text-white transition-colors duration-300'>My Blogs</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
                {posts.map((post) => (
                    <div key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    )
}


export default Home