import '../styles/about.css';
import { Link } from 'react-router-dom';
import Button from '../components/button'

const About = (props) => {
    return (
    <div className="about">
        <div className='about-content'>
            <div className="about-text">
                <h2>Welcome to Decrypt!</h2>
                
                <h4>The Fastest Growing Community of Cyber Security Enthusiasts</h4>

                <p>Decrypt is a social media platform designed to unite those with a keen interest in cyber security.</p>

                <h3>Our Story</h3>

                <p>As a captain and medical assistant turned software engineer, the founder of Decrypt found herself isolated in her new career. She decided to Build Decrypt as her capstone project with a greater goal of bringing a community of like-minded individuals together.</p>

                <h3>Our Mission</h3>

                <p>At Decrypt, our goal is to inspire networking, knowledge sharing, and continued learning.</p>
            
                <Button to={`/`}  label="Home" className='button' />
            </div>
        </div>
    </div>
    )
}

export default About;