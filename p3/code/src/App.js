import './App.css';

import AboutPic from './assets/about-pic.png';
import ProfilePic from './assets/profile-pic.png';
import Project1 from './assets/project-1.png';
import Project2 from './assets/project-2.png';
import Project3 from './assets/project-3.png';





function App() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <div className="main-layout">
      <nav id="desktop-nav">
        <div className="logo">Jyothi Prasanna Kambam</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Connect</a></li>
            <li><a href="#hobbies">Hobbies</a></li>

          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Jyothi Prasanna Kambam</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            <li><a href="#hobbies" onClick={toggleMenu}>Hobbies</a></li>

          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
        <img src={ProfilePic} alt="About" className='imgname'/>
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Jyothi Prasanna </h1>
          <p className="section__text__p2">QA Engineer actively seeking an Internship or Co-op opportunity for Summer 2025.</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open('https://drive.google.com/file/d/1NOb-0vlMtAq7FkZYMOnfbNLI6I81hTfZ/view?usp=sharing', '_blank', 'noopener noreferrer')}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href='./#contact'}>
              Connect
            </button>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
          <img src={AboutPic} alt="About" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h3>Skills</h3>
                <p>
                  <strong>Testing:</strong> Manual, Functional, Regression, Web & Mobile <br />
                  <strong>Tools:</strong> Selenium WebDriver, Appium, Postman, Jira <br />
                  <strong>Programming:</strong> Java, Python (Basic), JavaScript (Basic), HTML, CSS <br />
                  <strong>Frameworks:</strong> TestNG, Cucumber, Page Object Model <br />
                  <strong>Databases:</strong> MySQL, Oracle SQL, MongoDB <br />
                  <strong>Domains:</strong> Insurance, E-commerce
                </p>
              </div>
              <div className="details-container">
                <h3>Expertise</h3>
                <p>I specialize in automation testing using Selenium and Appium, as well as API testing with tools like Postman and RestAssured. I am also experienced in both manual and automated testing for both front-end and back-end environments. My expertise extends to Agile methodologies, with proficiency in using JIRA, SQL, and Git for project management and version control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
              <img src={Project1} alt="About" className="project-img"/>
                              
              <h2 className="experience-sub-title project-title">PortFolio</h2>
                <div className="btn-container">
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/Jyothi2828/JyothiPortfolio.git', '_blank', 'noopener noreferrer')}>
                    GitHub
                  </button>
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://jyothi2828.github.io/JyothiPortfolio/', '_blank', 'noopener noreferrer')}>
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
              <img src={Project2} alt="About" className="project-img"/>
              <h2 className="experience-sub-title project-title">Project Name</h2>
                <div className="btn-container">
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/', '_blank', 'noopener noreferrer')}>
                    GitHub
                  </button>
                  <button className="btn btn-color-2 project-btn" onClick={() => window.location.href='https://movie-qy2do5qsx-jyothiprasannas-projects.vercel.app/'}>
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
              <img src={Project3} alt="About" className="project-img"/>
              <h2 className="experience-sub-title project-title">Loading</h2>
                <div className="btn-container">
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/', '_blank', 'noopener noreferrer')}>
                    GitHub
                  </button>
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/', '_blank', 'noopener noreferrer')}>
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">QA Engineer at Avataa Solutions</h2>
              <p>2022 – 2023 | Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>
      <section id="education">
        {/* <p className="section__text__p1">My Education</p> */}
        <h1 className="title">Education</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Ontario College Graduate Certificate in Computer Software and Database Development</h2>
              <p>Loyalist College | 2024 – present | Toronto, Canada</p>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Bachelor of Computer Applications</h2>
              <p>Osmania University | 2019 – 2022 | Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>

      <h2>Connect with me</h2>
      <section id="contact">
        <ul>
          <li><a href="https://wa.me/1234567890" className="color-whatsapp"><i className="fab fa-whatsapp"></i> WhatsApp</a></li>
          <li>
            <a href="mailto:jpjstest@gmail.com" className="color-email">
              <i className="fas fa-envelope"></i> Email
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com/in/jyothiprasannakambam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="color-linkedin"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>

        <h3>Fill the details below to get in touch:</h3>
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="from_name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email_id" onChange={() => {}} required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <br />
          <button type="submit">Connect</button>
        </form>
      </section>
      <section id="hobbies">
        <h1 class="title">Hobbies</h1>
  {/* <p class="section__text__p1">Browse My Recent</p> */}
  <div className="hobbies-grid">
          <div className="hobby-item">Photography</div>
          <div className="hobby-item">Coding</div>
          <div className="hobby-item">Gaming</div>
          <div className="hobby-item">Traveling</div>
          <div className="hobby-item">Music</div>
          <div className="hobby-item">Reading</div>
        </div>
  
</section>


    </div>
  );
}

export default App;
