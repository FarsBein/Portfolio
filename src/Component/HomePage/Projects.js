import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import project_1 from '../../img/project_1.jpg'
import './HomePage.css';
import { useState } from 'react';

const Projects = () => {
    const [projects,setProjects] = useState([
        {
            title:'Maze + A*',
            text:'🧩 Generators random mazes, 🖥️ Uses pygame to display and interact with the maze ,🖱️ Can draw (left-click) and erase (right-click) on the maze, ⌨️ Pressing Space will automatically solve the maze using A* algorithm',
            images:[project_1,project_1],
            github:'https://github.com/FarsBein/Maze_A_Star'
        },
        {
            title:'Maze + A*',
            text:'🧩 Generators random mazes, 🖥️ Uses pygame to display and interact with the maze ,🖱️ Can draw (left-click) and erase (right-click) on the maze, ⌨️ Pressing Space will automatically solve the maze using A* algorithm',
            images:[project_1],
            github:'https://github.com/FarsBein/Maze_A_Star'
        }
    ])
    return (
        <div className='cards-container'>
            {
                projects.map((project) => (
                    <div className='cards-body'>
                        <ReactBootStrap.Carousel>
                            {
                                project.images.map((image)=>(
                                    <ReactBootStrap.Carousel.Item>
                                        <ReactBootStrap.Card.Img className="project-image" variant="top" src={image} />
                                    </ReactBootStrap.Carousel.Item>
                                ))
                            }
                        </ReactBootStrap.Carousel>
                        <ReactBootStrap.Card.Body>
                            <ReactBootStrap.Card.Title>{project.title}</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text>
                                {project.text}
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
