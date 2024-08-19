import React,{useCallback, useState} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE, Container } from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)
        console.log("userPostForm:",userData); 
    
    const submit = async(data) => {
        console.log("dta",data.image[0]);
        
        if(post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            if(file) {
                appwriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data, featuredImage: file ? file.$id : undefined,    // replace the undefined
            })

            if(dbPost){
                navigate(`/post/${dbPost.$id}`);
            }
        }else {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) :  null
            
            if(file) {
                const fileId = file.$id
                data.featuredImage = fileId
            }else {
                console.error("File upload failed.");
            }
            console.log("dataUsr:",userData);
                
                const dbPost = await appwriteService.createPost({...data, userId: userData.$id})
                console.log("Database Post object:", dbPost);

                if(dbPost) 
                    navigate(`/post/${dbPost.$id}`)
                else {
                    console.error("Failed to create or update the post.");
                    return;
                }
        }
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string') 
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g,"-")
                .slice(0,10);   
        return '';
    },[])

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if(name === 'title') {
                setValue('slug', slugTransform(value.title),{shouldValidate: true});
            }
        });

        return () => subscription.unsubscribe();
    },[watch,slugTransform,setValue]);


    return (
        <form onSubmit={handleSubmit(submit)} className='space-y-8 px-4 sm:px-6 md:px-8 lg:px-10'>
            <Container className='border-b border-gray-300 pb-8 pt-10 dark:border-gray-600'>
                <div className='mb-12'>
                    <h2 className="text-2xl font-semibold leading-8 text-gray-900 dark:text-gray-100 transition-colors duration-300">Blog</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        This information will be displayed publicly, so be cautious about what you share.
                    </p>
                </div>

                <div className='space-y-6'>
                    <Input 
                        label="Title :"
                        type="text"
                        labelClass="block text-base font-medium leading-6 text-gray-900 dark:text-gray-100"
                        placeholder="Title"
                        className='block w-full sm:w-1/2 text-sm md:text-base p-3 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-transparent dark:text-white transition-colors duration-300'
                        {...register("title", {required:true})}
                    />
                    <Input 
                        label="Slug :"
                        type="text"
                        placeholder="Slug"
                        labelClass='block text-base font-medium leading-6 text-gray-900 dark:text-gray-100'
                        className='block w-full sm:w-1/2 text-sm md:text-base p-3 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-transparent dark:text-white transition-colors duration-300'
                        {...register("slug", {required:true})}
                        onInput={(e) => {
                            setValue("slug",slugTransform(e.currentTarget.value),{
                                shouldValidate: true  
                            });
                        }}
                    />
                    <RTE 
                        label="Content :" 
                        name="content" 
                        control={control} 
                        defaultValue={getValues("content")} 
                        labelClass='block text-base font-medium leading-6 text-gray-900 dark:text-gray-100'
                        className='block w-full text-sm md:text-xl p-3 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500'
                    />
                    <Select 
                        options={["active","inactive"]}
                        label="Status: "
                        labelClass='block text-base font-medium leading-6 text-gray-900 dark:text-gray-100'
                        className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-medium md:px-3 md:py-2 px-2 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4 dark:bg-gray-600 dark:text-white transition-colors duration-300"
                        {...register("status",{required:true})}
                    />
                    <div className='w-full sm:w-1/2 px-2'>
                        <Input 
                            label="Featured Image :"
                            type="file"
                            className='block text-sm md:text-base p-3 pr-8 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm max-w-full md:max-w-96 dark:text-white'
                            labelClass='block text-base font-medium leading-6 text-gray-900 dark:text-gray-100'
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("image", {required: false})}
                        />
                        {post && post.featuredImage ? (
                            <div className='w-full mb-4 mt-4'>
                                <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-lg border dark:border-gray-500' />
                            </div> 
                        ): null}
                    
                    </div>
                </div>
            </Container>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-end sm:gap-x-4">
                <Button
                    bgColor=''
                    textColor='text-gray-900'
                    onClick={() => navigate('/')}
                    className="text-sm bg-gray-200 rounded-lg md:bg-transparent font-medium leading-6 px-4 py-2 md:hover:bg-gray-200 dark:text-white dark:md:hover:bg-gray-600 dark:bg-gray-600 dark:md:bg-transparent">
                        Cancel
                </Button>
                <Button 
                    type="submit" 
                    bgColor={post ? "bg-green-500" : 'bg-blue-600'} 
                    className={`rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm  border dark:border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  ${post ? 'focus-visible:outline-green-600 hover:bg-green-500' : 'hover:bg-blue-500 focus-visible:outline-blue-600'}`}>
                        {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
