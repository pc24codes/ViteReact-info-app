import React from 'react';
import "../index.css";


export default function MainContent() 
{
    return(
    <main>
        <h1 className="main-title">Fun Facts about React:</h1>
        <ul className="main-facts">
            <li>Developed in 2013</li>
            <li>Maintained by Meta</li>
            <li>Powers most web applications and mobile devices.</li>
            <li>Beginner-friendly</li>
            <li>Has well over 100K stars on GitHub</li>
        </ul>
    </main>
    )
}