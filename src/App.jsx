import './App.css';
import { React, useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom'
import CreatePost from './routes/CreatePost.jsx'
import EditPost from './routes/EditPost.jsx'
import Home from './routes/Home.jsx';
import Gallery from './routes/Gallery.jsx';
import NavBar from './components/NavBar';
import { supabase } from './client'


const App = () => {
  
 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      // READ all post from table
      const fetchPosts = async () => {
          const {data} = await supabase
          .from('character')
          .select();
          // set state of posts
          setPosts(data)
          }
      fetchPosts()
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<NavBar/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path:"gallery/edit/:id",
          element: <EditPost data={posts} />
        },
        {
          path:"/new",
          element: <CreatePost />
        },
        {  
          path:"/gallery",
          element: <Gallery data={posts} />
        }
      ]
    }
    
  ]);

  return ( 

    <div className="App">
        {element}
    </div>

  );
}

export default App;
