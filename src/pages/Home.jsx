import {useEffect, useState} from 'react'
import service from '../appwrite/config'
import authService from '../appwrite/auth'
import {Container, PostCard} from '../components'
import { Query } from 'appwrite'
import HeroPage from './HeroPage'

function Home() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        authService.getCurrentAccount().then((currentUser) => {
        if (currentUser) {
            const queries = [Query.equal("status","active"), Query.equal("userId", currentUser.$id)];

            service.getPosts(queries)
                .then((posts) => {                              
                    if(posts.documents.length != 0) {
                        setPosts(posts.documents)
                    }else
                        console.log(`You don't have any posts`);
                }
            )
        } else 
            console.log(`Not Logged In`);
        })
    },[])

    if(posts.length === 0) {
        return (
            <Container>
                <HeroPage />
            </Container>
        )
    }else {
        return (
            <Container className='my-28 md:my-32'>
                <h2 className='mx-auto p-4 font-semibold text-start px-4 sm:px-8 text-xl md:px-16 md:text-2xl lg:px-24 xl:px-32 tracking-wider'>My Blogs</h2>
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
}

export default Home