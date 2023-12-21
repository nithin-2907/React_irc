import React from 'react'
import { Link } from 'react-router-dom';
import { Button, } from '@mui/material';

const About = () => {
  return (
    <>
    <div className='abo' style={{backgroundColor:"grey"}}>
         <center><h1>
          WELCOME TO BOOK MY BUS
         </h1></center>
         <h3>
         Book My Bus stands as a pioneering force in the realm of online bus ticketing, revolutionizing the way travelers book their bus journeys. Boasting a user-friendly platform, Book My Bus has become synonymous with convenience, offering a seamless experience for users to explore various bus routes, compare ticket prices, and secure their bookings with ease. The platform collaborates with a wide network of bus operators, providing an extensive range of options, including sleeper and air-conditioned buses.

One of Book My Bus's key strengths lies in its commitment to user satisfaction. With secure payment options, passengers can complete transactions with confidence. Real-time tracking features empower travelers by allowing them to monitor the location and status of their booked buses, adding an extra layer of convenience to their journey.

Founded on the principle of simplifying bus travel, Book My Bus has established itself as a reliable and efficient platform. Responsive customer support services further contribute to its reputation, addressing any queries or concerns that users may have. For the most up-to-date information on Book My Bus and its services, individuals are encouraged to visit the official website, where they can access the latest details on routes, operators, and features.
         </h3>
         
         <Link to="/"><center><Button style={{color:"orange"}}>BACK TO HOME</Button></center></Link>
    
    
    
    
    
    </div>
    
</>
  );
}

export default About