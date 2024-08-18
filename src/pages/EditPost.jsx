import {useEffect, useState} from 'react'
import { Container, PostForm } from '../components/'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug) {
            service.getPost(slug).then((post) => {
                if(post) {
                    setPosts(post)
                }else {
                    console.log(`Document not present`);
                }
            })
        }else {
            navigate('/')
        }
    },[slug, navigate])
    
    return post ? (
        <Container className="my-32 md:my-36 px-20">
            <PostForm post={post}/>
        </Container>
    ) : null
}

export default EditPost