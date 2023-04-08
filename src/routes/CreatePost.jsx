import { React, useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client'


const CreatePost = () => {
    const [post, setPost] = useState({title: '', author: '', description: ''});

    const handleChange = (e) => {
        const newPostForm = {}
        const newValue = e.target.value;
        const key = e.target.name;
        post[key] = newValue;
        setPost((post) => ({...post, ...newPostForm}));
    }

    const createPost = async (event) => {
        event.preventDefault();
        console.log("CALLING POST")
        await supabase
        .from('Posts')
        .insert({title: post.title, author: post.author, description: post.description})
        .select();

        window.location = "/";
    }


    return (
        <div>
            <form onSubmit={createPost} >
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange}/><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange}/><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit"/>
            </form >
        </div>
    )
}

export default CreatePost