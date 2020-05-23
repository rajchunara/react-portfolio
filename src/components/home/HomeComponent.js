import React from 'react';
import Typewriter from 'typewriter-effect';
import './home.css';

export default function HomeComponent(props) {

    const {history} = props
    
    return (
            
            <div className='showcase' >
                <div className='container showcaseInner fade-in' >
                    <h1>Hello, I am Raj </h1>
                    <h1>    
                    <Typewriter

                        onInit={(typewriter) => {
                            typewriter.typeString('-Developer')
                            .pauseFor(1500)
                            .deleteChars(9)
                            typewriter.typeString('Designer')
                            .pauseFor(1500)
                            .deleteChars(8)
                            typewriter.typeString('Creator')
                            .pauseFor(1500)
                            .deleteChars(7)
                            .start();
                        }}

                        options={{
                            autoStart:true,
                            loop:true
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
