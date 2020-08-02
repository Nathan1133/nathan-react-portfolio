import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
    <>
    <div className="project">
    <h1 className="title">development portfolio: josephDeWoody</h1>
    <hr></hr>
    </div>

      <Wrapper>
        {portfolio.map((project) => (
          <ProjectCards
          name={project.name}
          key={project.id}
          image={project.image}
          github={project.github}
          deploy={project.deploy}
          skills={project.skills}
          />
        ))}
      </Wrapper>
    </>
    
    );
  }

export default Portfolio;