import React from 'react';
import project_1 from '../../img/project_1.jpg'
import '../../App.css';


const Projects = () => {
    return (
        <div className="projects-container">
            <p className='projects-title'>PROJECTS</p>
            <div className='projects-title-box'></div>
            <div className='projects-cards-container'>
                <div className='projects-card'>
                    <img src={project_1}/>
                    <div>
                        <p>
                            Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, 
                            CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java ...
                            Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, 
                            CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java ...
                        </p>
                        <button>Github</button>
                    </div>
                </div>
                <div className='projects-card'>
                    <img src={project_1}/>
                    <div>
                        <p>
                            Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, 
                            CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java ...
                        </p>
                        <button>Github</button>
                    </div>
                </div>
                <div className='projects-card'>
                    <img src={project_1}/>
                    <div>
                        <p>
                            Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, 
                            CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java ...
                        </p>
                        <button>Github</button>
                    </div>
                </div>
                <div className='projects-card'>
                    <img src={project_1}/>
                    <div>
                        <p>
                            Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, 
                            CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java ...
                        </p>
                        <button>Github</button>
                    </div>
                </div>
                <div className='projects-card'>
                    <img src={project_1}/>
                    <div>
                        <p>
                            Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, 
                            CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java ...
                        </p>
                        <button>Github</button>
                    </div>
                </div>
                <div className='projects-card'>
                    <img src={project_1}/>
                    <div>
                        <p>
                            Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, 
                            CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java ...
                        </p>
                        <button>Github</button>                        
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
