import React from 'react';
import './About.css'
import aboutimg from '../assets/aboutus.jpg';

const About = () => {
    return (
        <div className="About-section">
            <div className="About-container">
                <div className="About-text">
                    <h1 className="title">About Me</h1>
                    <p>
                    Welcome to My e-learning platform! As an experienced educator and lifelong learner, I am thrilled to share my knowledge and expertise with students from around the world.</p>
                    <p>
                    With 4 years of experience in React Js, I have had the privilege of working with diverse learners across different age groups and backgrounds. I am deeply passionate about fostering a love for learning and empowering students to reach their full potential.
                    </p>
                    <p>
                    Throughout my teaching career, I have developed a strong understanding of various learning styles and effective instructional strategies. My courses are designed to be engaging, interactive, and tailored to meet the unique needs of each student. I firmly believe that education should be a transformative experience that not only imparts knowledge but also inspires critical thinking, creativity, and problem-solving skills.
                    </p></div>
                <div className="About-image">
                    <img src={aboutimg}
                        alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default About;
