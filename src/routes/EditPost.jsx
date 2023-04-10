import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'


const EditPost = ({data}) => {
    const options = ['Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Rock', 'Ground', 'Flying', 'Psychic', 'Dark'];
    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", type: "", level: ""});

    useEffect(() => {
        const result = data.filter(item => String(item.id) === id)[0];
        setPost({name: result.name, type: result.type, level: result.level});
    }, [data, id]);

    // DELETE post
    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('character')
        .delete()
        .eq('id', id); 

        window.location = "/gallery";
    }

    const handleChange = (e) => {
        const newPostForm = {}
        const newValue = e.target.value;
        const key = e.target.name;
        post[key] = newValue;
        setPost((post) => ({...post, ...newPostForm}));
    }

    // UPDATE post
    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('character')
        .update({ name: post.name, type: post.type,  level: post.level})
        .eq('id', id);

        window.location = "/gallery";
    }

    return (
        <div>
                <h2>Edit {post.name}!</h2>
                <form  onSubmit={updatePost} >
                    <div className='form-container'>
                    <div className='mini-container'>
                        <h3 for="name">Name</h3> <br />
                        <input type="text" id="name" name="name" value={post.name} onChange={handleChange}/><br />
                    </div>
                    <br/>
                    <div className='mini-container'>
                        <h3 for="level">Level</h3><br />
                        <input type="text" id="level" name="level" value={post.level} onChange={handleChange}/><br />
                        
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
                    <div className='buttons'>
                        <input className='submit' type="submit" value="Submit"/> 
                        <button className="deleteButton" onClick={deletePost}>Delete</button>
                    </div>
                    
                </form >
                
                   
            
        </div>
    )
}

export default EditPost