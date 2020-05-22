import React from 'react';
import Typewriter from 'typewriter-effect';
import './home.css';

export default function HomeComponent(props) {

    const {history} = props
    
    return (
            
            <div className='showcase' >
                <div className='container showcaseInner fade-in' >
                    <h1>Hello, I am Raj Chunara</h1>
                    <h1>
                        <Typewriter
                            options={{
                                strings: ['Developer', 'Designer', 'Creator'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="description">
                        I am Toronto based software developer, who likes creating beautiful 
                        user interfaces and scalable applications
                    </p>
                    <div className="home-btn-container">
                        <button className='projectsBtn' onClick={()=> history.push('/projects')}>
                            <strong>See Projects </strong>
                        </button>
                    </div>
                    
                </div>
            </div>      

    )
}
