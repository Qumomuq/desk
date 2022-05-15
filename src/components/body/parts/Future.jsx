import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useState} from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

function Future()  {
    const [posts, setPosts]=useState([
        {id:1, title:'License' , body:'12.03.2024'},
    ])

    // const [title,setTitle]=useState( '')
    // const [body,setBody]=useState('')

    // const addNewPost = () => {
    //      const newPost = {
    //          id:Date.now(),
    //          title:"NewLicense",
    //          body:"Лицензия не активирована"
    //      }
    //     // create(newPost)
    //      setPosts([...posts, newPost])
    // }
    const createPost =(newPost) =>{
        setPosts([...posts,newPost])
    }

     const removePost =(post)=>{
         setPosts(posts.filter(p=>p.id !== post.id))
     }

    return (
        <div>
            <header className="mx-20 bg-white shadow">
                <div className="flex justify-between max-w-7xl mx-auto py-8 px-3 sm:px-3 lg:px-8">
                    <h1 className=" text-3xl font-bold text-gray-900">Project</h1>
                    <div >
                        Общее колличество лицензий:
                        <div className="text-2xl">{posts.length}</div>
                    </div>
                    <div>
                        <PostForm create={createPost}/>
                        {/*<MyButton onClick={addNewPost}>Добавить</MyButton>*/}
                    </div>
                </div>
            </header>
            <div className=" shadow mx-auto py-4 sm:px-6 lg:px-8 max-w-7xl ">
            {posts.length !== 0
                ?<PostList remove={removePost} posts={posts}/>
                : <div className=" flex justify-center rounded-2xl  h-16 text-3xl bg-red-100 border-2 hover:bg-red-200">У вас пока нет лицензий</div>
            }
            </div>
        </div>
    );
};

export default Future;

