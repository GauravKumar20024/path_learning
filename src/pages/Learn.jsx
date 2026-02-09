import React from 'react'
import '../Styles/Learn.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
const Learn = () => {
  return (
    <div id='tech-container'>
      <section id='tech-list'>
        <h5>Learn HTML</h5>
        <h5>Learn CSS</h5>
        <h5> Learn JavaScript</h5>
        <h5>Learn ReactJs</h5>
      </section>
      <section id="frontend-ui">
  <div class="top-grid">
    <div class="left-text">
      <h1>Frontend Development</h1>
      <p class="sub">Confused about where to begin? we got you.</p>

      <p>
        Frontend development is basically everything you see and interact with on a website or app.
      </p>

      <p>
        Frontend development = building the user-facing part of a website/app. <br />
        It’s where <span>design meets code</span>.
      </p>
    </div>
    <div class="right-image">
      <img src={image1} />
    </div>

  </div>
  <div class="middle-grid">

    <div class="middle-image">
      <img src={image2} />
    </div>

    <div class="middle-text">
      <h2>What a Frontend developer does?</h2>
      <p>A frontend dev turns designs into a real, working interface:</p>

      <ul>
        <li>Creates page layouts</li>
        <li>Makes sites responsive (mobile, tablet, desktop)</li>
        <li>Adds interactivity (clicks, animations, transitions)</li>
        <li>Connects UI with backend APIs</li>
        <li>Improves performance and user experience</li>
      </ul>
    </div>

  </div>
  <div class="bottom-section">
    <h2>Core frontend technologies:</h2>
    <p class="small">These are the big three:</p>

    <div class="tech-cards">

      <div class="tech-card">
        <h3>HTML</h3>
        <p>– structure</p>
        <code>(headings, paragraphs, images, forms)</code>
      </div>

      <div class="tech-card">
        <h3>CSS</h3>
        <p>– styling</p>
        <code>(colors, fonts, layouts, animations, dark/light themes)</code>
      </div>

      <div class="tech-card">
        <h3>JavaScript</h3>
        <p>– logic & interaction</p>
        <code>(button clicks, form validation, dynamic content)</code>
      </div>

    </div>
  </div>

</section>

      <section id='about-html'>
        <h1>HTML</h1>
      </section>
      <section id='about-css'>

      </section>
      <section id='about-js'>

      </section>
      <section id='about-react'>

      </section>
    </div>
  )
}

export default Learn
