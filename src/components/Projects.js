import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'

function Projects() {

  return (
    <>
      <h1 className="display-6 ptb-5 text-center fluid" id='projects'>My Projects</h1>
      <div className="container pt-5">
        <h3 className="text-dark">Project 1 - Frogger</h3>
        <p className="text-dark">An individual project with one week to complete. I built a grid-based video-game built using HTML, CSS and JavaScript. My game was a classic version of Frogger. Building this game helped me cement and further evolve my knowledge of JavaScript and CSS while increasing my confidence in developing on my own.
Deployed Version <a href="https://harrymurphyprojects.github.io/SEI60-Project-1/" className="">Here</a>. Find out more about the project <a href="https://github.com/harrymurphyprojects/SEI60-Project-1#readme" className="">README</a></p>
      </div>
      <div className="container pt-5">
        <h3 className="text-dark">Project 2 - Heroes and Villains</h3>
        <p className="text-dark">This project was a two-day project in pairs, me and my colleague had to create a front end app using JavaScript and React. For the back end, we used public superheroes API. The key learning from this project was how to use React to perform functions such as filtering data. This was used to filter our index page to only show the filtered superheroes that the user selected.
Deployed Version <a href="https://kind-kirch-95c8ba.netlify.app/" className="">Here</a>.Find out more about the project <a href="https://github.com/harrymurphyprojects/Project-Two-SEI#readme" className="">README</a></p>
      </div>
      <div className="container pt-5">
        <h3 className="text-dark">Project 3 - Epop</h3>
        <p className="text-dark">One-week group project to complete a full-stack app using JavaScript, React, Node.js, SASS. A clone of Depop but instead of sharing clothes, you share website ideas and projects. This was group work, I mainly focused on the front end SASS & React as some in our group were keen on doing the back end. This was the first project using SASS which I thought was great as you don&apos;t duplicate as much styling in comparison to regular CSS. 
Deployed Version <a href="https://eepop.netlify.app/" className="">Here</a>.Find out more about the project <a href="https://github.com/harrymurphyprojects/sei-project-three-be#readme" className="">README</a></p>
      </div>
      <div className="container pt-5">
        <h3 className="text-dark">Project 4 - Ondeed</h3>
        <p className="text-dark">One-week group project to complete a full-stack app using JavaScript, React, Node.js, SASS. A clone of Depop but instead of sharing clothes, you share website ideas and projects. This was group work, I mainly focused on the front end SASS & React as some in our group were keen on doing the back end. This was the first project using SASS which I thought was great as you don&apos;t duplicate as much styling in comparison to regular CSS. 
Deployed Version <a href="https://61fd0f1a6d1e829c8ba64d7a--ondeed.netlify.app/" className="">Here</a>.Find out more about the project <a href="https://github.com/harrymurphyprojects/sei-project-four-frontend#readme" className="">README</a></p>
      </div>
      <div className="container pt-5">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/HEvF2jJ.png"
              alt="First Project"
            />
            <Carousel.Caption>
              <h3 className="project-text text-white">Project 1 - Frogger</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/lAKk7VX.png"
              alt="Second Project"
            />
            <Carousel.Caption>
              <h3 className="project-text text-white">Project 2 - Heroes and Villains</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/lKGDISL.png"
              alt="Third Project"
            />
            <Carousel.Caption>
              <h3 className="project-text text-white">Project 3 - Epop</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>

  )
}

export default Projects