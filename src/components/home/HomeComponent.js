import React from 'react'
import Typewriter from 'typewriter-effect';
import './home.css';

export default function HomeComponent() {
    return (
        <div className='showcase'>
            <div className='container showcaseInner'>
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Asperiores neque consequuntur vel consectetur sit obcaecati 
                    iure natus odit? Sequi, fugit!
                </p>
                <a href="#" className='projectsBtn'>See Projects</a>
            </div>
        </div>
    )
}
