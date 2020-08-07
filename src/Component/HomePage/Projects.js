import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import project_1 from '../../img/project_1.jpg'
import './HomePage.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

const Projects = () => {
    const [projects,setProjects] = useState([
        {
            title:'Maze + A*',
            points: ['🧩 Generators random mazes','🖥️ Uses pygame to display and interact with the maze','🖱️ Can draw (left-click) and erase (right-click) on the maze','⌨️ Pressing Space will automatically solve the maze using A* algorithm'],
            text:'',
            tools:['Python','Pygame'],
            image: project_1,
            github:'https://github.com/FarsBein/Maze_A_Star'
        },
        {
            title:'Snake Game',
            points: ['🐍 a Snake game built in react using react hooks','🏃‍♂️ The game speeds up as you eat more apples','☠️ You die if you touch the edges','🔳 Double tap on the Play button to play'],
            text:'',
            tools:['ReactJs','Javascript','CSS'],
            image: project_1,
            github:'https://github.com/FarsBein/Maze_A_Star'
        },
        {
            title:'Reddit Api wallpaper',
            points: ['⛏️ Fetches the hottest images in wallpaper and wallpapers subreddit.','🖥️ Changes background image automatically'],
            text:'',
            tools:['Python'],
            image: project_1,
            github:'https://github.com/FarsBein/Maze_A_Star'
        },
        {
            title:'Random Meme Maker',
            points: ['⚛️ Built using react classes','🖼️ Fetches random funny images from memeAPI','📱 Mobile friendly'],
            text:'',
            tools:['ReactJs','Javascript'],
            image: project_1,
            github:'https://github.com/FarsBein/Maze_A_Star'
        },
        {
            title:'Chess Game',
            points: ['👌 Drag and drop to move pieces on pc','👇 Touch functionalities for mobile',],
            text:'',
            tools:['ReactJs','Javascript','CSS'],
            image: project_1,
            github:'https://github.com/FarsBein/Maze_A_Star'
        },
        {
            title:'TeemUp Hub',
            points: ['🔐 Registration and authentication functionalities','💬 Chat rooms and past conversation page','✍️ Can create and share new posts'],
            text:'online advertising service that operates as a centralized network of online communities for posting cooperation requests',
            tools:['ReactJs','Javascript','CSS'],
            image: project_1,
            github:'https://github.com/FarsBein/Maze_A_Star'
        }
    ])
    return (
        <div className='cards-container'>
            {
                projects.map((project) => (
                    <div className='cards-body'>
                        <img className="project-image" src={project.image} alt={project.title}/>
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>{project.title}</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text className="lead" style={{fontSize:"15px"}}>
                                <div className='points'>
                                    {
                                        project.points.map(point => (
                                        <p>{point}</p> 
                                        ))   
                                    }                                
                                </div>
                                <div>{project.text}</div>
                                <div className='badges'>
                                    {
                                        project.tools.map(tool => (
                                            <ReactBootStrap.Badge style={{marginRight:'5px'}} variant="dark">{tool}</ReactBootStrap.Badge>
                                        ))
                                    }
                                </div>
                            </ReactBootStrap.Card.Text>
                            <ReactBootStrap.Button variant="primary">github</ReactBootStrap.Button>
                        </ReactBootStrap.Card.Body>
                    </div>                      
                ))
            }

        </div>
    );
}




export default Projects;
