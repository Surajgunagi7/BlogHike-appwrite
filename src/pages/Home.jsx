import React, {useEffect, useState} from 'react'
import service from '../appwrite/config'
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts()
        .then((post) => {
            if(post) {
                setPosts(post.documents)
            }
        })
    },[])

    if(posts.length === 0) {
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>Login to read Posts</h1>
                    </div>
                </div>
            </Container>
        </div>
    }else {
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div className='p-2 w-1/4' key={post.$id}>
                                <PostCard {...posts}/>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    }
}

export default Home