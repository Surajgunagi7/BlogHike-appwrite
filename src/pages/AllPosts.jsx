import {useState, useEffect} from 'react'
import service from '../appwrite/config'
import { Query } from 'appwrite'
import {Container, Loading, PostCard} from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts([Query.equal("status","active")]).then((posts) => {
            if(posts) {
                setPosts(posts.documents)
            }else
                console.log(`None Posts from users`);
        })
    },[])
    
    return posts.length === 0 ? (<Loading/>) : (
        <div className='my-28 md:mt-32 mb-48'>
            <Container>
                <h2 className='mx-auto p-4 font-semibold text-start px-4 sm:px-8 text-xl md:px-16 md:text-2xl lg:px-24 xl:px-32 tracking-wider dark:text-white transition-colors duration-300'>Explore</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
                {
                    posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))
                }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts