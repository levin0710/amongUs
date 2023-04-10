import { React, useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client'


const CreatePost = () => {
    const options = ['Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Rock', 'Ground', 'Flying', 'Psychic', 'Dark'];
    const [post, setPost] = useState({name: '', type: '', level: ''});

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
        .from('character')
        .insert({name: post.name, type: post.type, level: post.level})
        .select();

        window.location = "/gallery";
    }


    return (
        <div>
            <h2>Create a new Pokemon!</h2>
            <form  onSubmit={createPost} >
                    <div className='form-container'>
                    <div className='mini-container'>
                        <h3 for="name">Name</h3> <br />
                        <input type="text" id="name" name="name" onChange={handleChange}/><br />
                    </div>
                    <br/>
                    <div className='mini-container'>
                        <h3 for="level">Level</h3><br />
                        <input type="text" id="level" name="level" onChange={handleChange}/><br />
                        
                    </div>
                    <br/>
                    <div className='mini-container'>
                        <h3 for="type">Type</h3><br />
                        {options.map((option) => (
                                <label className='radio-label' key={option}>
                                    <input
                                    type="radio"
                                    id="type"
                                    name='type'
                                    value={option}
                                    checked={post.type === option}
                                    className='radio-button'
                                    onChange={handleChange}
                                    />
                                    <span className="radio-text">{option}</span>
                                </label>
                        ))}
                    </div>
                    <br/> 
                    </div>
                    <input className='submit' type="submit" value="Submit"/> 
                </form >
                
        </div>
    )
}

export default CreatePost