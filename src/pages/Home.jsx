import {useEffect, useState} from 'react'
import service from '../appwrite/config'
import authService from '../appwrite/auth'
import {Container, PostCard, Loading} from '../components'
import { Query } from 'appwrite'


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
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                           <Loading />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home