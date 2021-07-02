import React from 'react';
import Card2 from "../components/Card2";
import ProjectsItem from "../components/ProjectsItem";
function Projects()
{
    const projects = ProjectsItem
    
    return (
        

        <section  className="services servicespage"> 
            <div className="container">
            <p className="text-muted text-sub-title text-center">These are some projects made by me</p>
        <h2 className="sub-title text-muted">PROJECTS</h2>
        <br></br>

            <div className="row">
        
        {
        projects.map((projectsz) => (  

        
            <Card2 

                  key={projectsz.id}
                  text={projectsz.text}
                  img={projectsz.img}
                  description={projectsz.description}
            />
            )
        )}
 
...


  
</div>
            </div>

        </section>
    );
}
export default Projects