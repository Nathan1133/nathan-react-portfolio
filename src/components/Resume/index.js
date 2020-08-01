import React from 'react'; 

function Resume() {

    return(
<section class="mb-5">
        <h1 className="resume">resume</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5">
                Business executive and full stack developer with experience the MERN and MEAN stacks. Experienced in commercial website and software development.
                <p class="mt-5">
                <a href="https://www.linkedin.com/in/josephdewoody/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="DeWoody LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="https://github.com/jpd61/jpd-react-portfolio/raw/master/src/assets/Resume-Joseph-DeWoody.pdf" class="link">resume</a><br></br>
            </p>

            </div>
        </div>

        <div class="row justify-content-center mt-5">
            <div id="front-back">
            <h2>front end experience</h2>
                <p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js</p>
        </div>
    
        <div id="front-back" class="mt-5">
        <h2>back end experience:</h2>
        <p>
            Node.js, Express.js, MySQL (sqlite, mysql), NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
        </p>
        </div>
        </div>
        </section>
);
}

  
export default Resume;