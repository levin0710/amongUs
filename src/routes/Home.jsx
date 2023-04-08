import React, { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {
    
    return (
        <div className="ReadPosts">
            <div class="whole-page">
                <div>
                    <div class="home-page">
                        <h1> Welcome to the Crewmate Creator!</h1>
                        <h3> Here is where you can create your very own set of crewmates before sending them off into space! </h3>
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/295fb76c-7179-4c70-a508-a1cce61a876f/dbj3vjj-47f01baa-fc4f-48cf-a8a0-e1063e9e47c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5NWZiNzZjLTcxNzktNGM3MC1hNTA4LWExY2NlNjFhODc2ZlwvZGJqM3Zqai00N2YwMWJhYS1mYzRmLTQ4Y2YtYThhMC1lMTA2M2U5ZTQ3YzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hLFD2N6B7hoekQFgNWeow3G-8cA_9qOG6lfJwXFASds' className="welcome-images"/>
                            <br></br>
                        <img src="/assets/spaceship.3d8f767c.png" class="welcome-images"/>
                        </div>
                    </div>
                </div>
        </div>  
    )
}

export default Home;