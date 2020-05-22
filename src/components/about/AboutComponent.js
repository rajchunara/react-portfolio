import React from 'react'
import './about.css';
import SkillsComponent from '../skills/SkillsComponent';
import ContactComponent from '../contact/ContactComponent';

export default function AboutComponent() {

    return (
        <div className="about">
            <div className="about-container  fade-in">
                <div className={`about-center`}>
                    <div className="about-text" >
                        ABOUT
                    </div>
                    <div className='about-info-container'>
                        <p className="about-info-1">
                            I enjoy the process of converting complex problems
                            into simple yet elegant real world applications.
                            In addition, I gained experience in  the field of web development
                            while working with the renowned institutions like TD bank and FDM group.                          
                            I always strive to write clean, modularized and
                            efficient code by maintaining industry standards.                            
                        </p>

                        <p className="about-info-2">
                            Apart from coding, I like spending time on digital art,
                            meditation and improving vector graphics skills.
                        </p>
                    </div>                
                </div>  

                <SkillsComponent/>     
                <ContactComponent/>     
            </div>   

            
        </div>
    )
}
