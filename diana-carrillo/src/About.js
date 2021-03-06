import React from 'react';
import { Container } from 'reactstrap';


const about = () => {
    return ( 
    <div responsive className="about-container" id="about-me">
    <Container >
        <h3 className="about-me col-lg-4 offset-lg-7 ">About me</h3>
        <p className="col-lg-5 offset-lg-7 about-parragraph">Hi! My journey as a front-end developer has just started and I couldn't be happier about where it has taken me. Having studied Psychology at UAM-X in Mexico City, I always like to maintain healthy relationships in my work environments, creating strategies to solve problems and positively analyzing my and my co-workers labor performance. </p> 
    </Container>
    </div>
    )
}

export default about;