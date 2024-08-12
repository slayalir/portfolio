import React, { useState } from 'react';
import './main.css';
import Slider from 'react-slick';
import ProjectsModal from './modal';
import experiences1 from '../../images/experiences-1.png'
import experiences2 from '../../images/experiences-2.png'
import project1 from '../../images/project-1.png'
import project2 from '../../images/project-2.png'
import project3 from '../../images/project-3.png'
import project4 from '../../images/project-4.png'
import project5 from '../../images/project-5.png'
import project6 from '../../images/project-6.png'
import project7 from '../../images/project-7.png'
import project8 from '../../images/project-8.png'
import project9 from '../../images/project-9.png'
import project10 from '../../images/project-10.png'
import project11 from '../../images/project-11.png'
import project12 from '../../images/project-12.png'

const experiencesData = [
  {
    image: experiences1,
    title: 'PT. Infra Datatech Indonesia',
    date: '(February - July 2024)',
    role: 'IoT Engineer Intern',
    description: [
      '● Designed a smart inn system that integrated IoT technology with web applications.',
      '● Developed a web interface for innkeepers and boarders.',
      '● Served as a supervisor for the installation of water and fuel leak detection systems at Haryono data center.',
    ]
  },
  {
    image: experiences2,
    title: 'HIMATRONIKA-AI',
    date: '(Feb 2023 - Nov 2023)',
    role: 'Head of Social and Political Departement',
    description: [
      '● Responsible for the entire work program of the department.',
      '● Ensure and maximize the performance of the department in accordance with the objectives and functions.',
      '● Observing and assessing issues and problems that occur inside and outside the campus environment.',
      '● Led 5 department members with 3 sub departments.',
      '● Successfully implemented 4 work programs with an average implementation success rate of 93.75%.',
    ]
  },
  {
    image: experiences2,
    title: 'HIMATRONIKA-AI',
    date: '(Oct 2023)',
    role: 'Deputy Head of Disciplinary Commission at METASTRO MKB 2023',
    description: [
      '● Responsible for assisting the chairman in carrying out his main duties and functions.',
      '● Designed and enforced the rules and regulations for participants and organizing committees.',
      '● Fostering the ethics and morals of participants and committees and handling disciplinary violations.',
      '● Assisted the chairman in leading 4 members.',
    ]
  },
  {
    image: experiences2,
    title: 'HIMATRONIKA-AI',
    date: '(Oct 2022)',
    role: 'Staff of Disciplinary Commission at METAPORA MKB 2022',
    description: [
      '● Designed and enforced the rules and regulations for participants and organizing committees.',
      '● Fostering the ethics and morals of participants and committees and handling disciplinary violations.',
    ]
  },
  {
    image: experiences2,
    title: 'FORMATUR HIMATRONIKA-AI',
    date: '(Feb 2022 - Feb 2023)',
    role: 'Staff of Internal',
    description: [
      '● Prepared and designed the formation of the student association of the Mechatronics and Artificial Intelligence program in University of Education Indonesia.',
      '● Designed and created HIMATRONIKA-AI legal products such as AD/ART, MKO, and GBPK.',
    ]
  }
];
const projectsData = [
  {
    image: project1,
    title: 'Air Quality Classification System',
    date: '(January 2024)',
    sub: 'air quality classification system using random forest algorithm based on CO and CO2 levels using IoT based MQ7 and MQ135 sensors',
    subImage: project7,
    description: 'The project developed an air quality classification system to analyze the levels of CO (carbon monoxide) and CO2 (carbon dioxide) values. This system uses two IoT sensors, MQ7 for CO (carbon monoxide) and MQ135 for CO2 (carbon dioxide). This system uses a random forest algorithm to classify air quality into various categories, namely good, bad, and toxic. Based on the levels of CO (carbon monoxide) and CO2 (carbon dioxide) values taken in real-time, the system will display the current air quality label.'
  },
  {
    image: project2,
    title: 'Automated Dual Servo Actuation',
    date: '(December 2023)',
    sub: 'automated dual servo actuation in robotics with computer vision',
    subImage: project8,
    description: 'The project developed a robotics system with computer vision to track the position of objects. The camera is divided into 3x3 grids, with each square labeled as a to i. Two servo motors are used to control the movement of the platform, the first servo motor for horizontal movement and the second servo motor for vertical movement. The servo motors can move to three angles namely 0, 90, and 180 degrees. Based on the position of the object in the grid, the servo motor will automatically adjust its position to follow the movement of the object.'
  },
  {
    image: project3,
    title: 'Naval Battle: Shooter Game',
    date: '(January 2023)',
    sub: 'naval battle themed shooter game using object oriented programming',
    subImage: project9,
    description: 'The naval battle themed shooter game development project uses object oriented programming principles. In the game, the player needs to control a warship and must avoid enemies and obstacles until the finish line. During the journey, players can collect treasures to be able to upgrade warships and weaponry. Based on the principle of object oriented programming, the program will ensure a clear and clean programming separation between the various components of the game.'
  },
  {
    image: project4,
    title: 'Smart Fan',
    date: '(December 2022)',
    sub: 'smart fan with dynamic speed control based on distance with ultrasonic sensor',
    subImage: project10,
    description: 'The project developed a smart fan that is able to adjust the rotation speed based on the distance between the user and the fan. This project uses an ultrasonic sensor to detect the distance between the user and the fan. This project uses lcd to display the distance between the user and the fan in real time. Based on the distance between the user and the fan, if the distance is below 10 cm, the fan rotation speed is set to 100 rpm, and if the distance is above 10 cm, the fan rotation speed is set to 300 rpm.'
  },
  {
    image: project5,
    title: 'Digital Library',
    date: '(June 2022)',
    sub: 'digital library with book search and rating system with python and sql programming',
    subImage: project11,
    description: 'The project developed a digital library system capable of searching and evaluating books. This system uses datasets from kaggle and develops it with python and sql programming. This system is able to search for books based on title, author, year of publication, and isbn number. Based on the book search results, users can evaluate the book by giving a rating of 1 to 5 stars.'
  },
  {
    image: project6,
    title: '3D Buggy Car Design',
    date: '(June 2023)',
    sub: 'comprehensive 3d buggy car design with autocad',
    subImage: project12,
    description: 'The project developed a buggy car in 3D format using autocad. This project aims to create a detailed 3d model of a buggy car. This project focused on the details of the components, such as the frame, wheels, and others. Based on the purpose and focus of this project, it demonstrates the ability to use autocad to create complex vehicle models.'
  }
];
const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:slayalir@upi.edu";
  };
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/sajidahlayalirobbaniyah", "_blank", "noopener,noreferrer");
  };
  const handleGitHubClick = () => {
    window.open("https://github.com/slayalir", "_blank", "noopener,noreferrer");
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  prevArrow: <button type = "button" className = "slick-prev">Previous</button>,
  nextArrow: <button type = "button" className = "slick-next">Next</button>
  };
  return (
    <>
      <section id = "home">
        <div className = 'home'>
          <div className = 'wrapper'>
            <h1 className = 'main-home-text'>Hi, I'm Sajidah.</h1>
          </div>
        </div>
      </section>
      <section id = "about">
        <div className = "about-left"></div>
        <div className = "about-right">
          <div className = "about-overlay"></div>
          <div className = "about-content">
            <p className = "main-about-text main-about-text1">
              I am a student of Mechatronics and Artificial Intelligence at Universitas Pendidikan Indonesia.
            </p>
            <p className = "main-about-text main-about-text1">
              I am interested in the fields of design, data analytics, robotics, and artificial intelligence.
              I have delved into the basic concepts and participated in various projects that allowed me to apply theoretical knowledge into practical scenarios.
              With an educational background and practical experience in mechatronics and artificial intelligence, I have expertise in designing and implementing systems that integrate mechanics, electronics, informatics, and artificial intelligence to create innovative solutions.
            </p>
            <p className = "main-about-text main-about-text1">
              Browse my portfolio to discover the projects I have worked on, and feel free to contact me!
            </p>
          </div>
        </div>
      </section>
      <section id = "experiences">
        <div className = 'experiences'>
        <div className = 'wrapper'>
          <h1 className = 'main-experiences-text-title'>my latest experiences...</h1>
        </div>
          <div className = 'slider-container'>
            <Slider { ...settings } className = 'slider-wrapper'>
              { experiencesData.map((experience, index) => (
                <div key = { index } className = "experiences-slide">
                  <div className = 'main-experiences-box'>
                    <div class = "experiences-left">
                      <img className = 'experiences-picture' src = { experience.image } alt = {experience.title} />
                    </div>
                    <div class = "experiences-right">
                      <div className = "experiences-overlay"></div>
                      <div className = "experiences-content">
                        <div className = "main-experiences-container-text">
                          <p className = "main-experiences-text main-experiences-text1">
                            { experience.title }
                          </p>
                          <p className = "main-experiences-text main-experiences-text2">
                            { experience.date }
                          </p>
                        </div>
                        <p className = "main-experiences-text main-experiences-text3">
                          { experience.role }
                        </p>
                        { experience.description.map((desc, idx) => (
                          <p key = { idx } className = "main-experiences-text main-experiences-text4">
                            { desc }
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section id = "projects">
        <div className = 'projects'>
        <div className = 'wrapper'>
          <h1 className = 'main-projects-text-title'>my relevant projects...</h1>
        </div>
          <div className = 'main-projects-container-card'>
            { projectsData.map((project, index) => (
              <div key = { index } className = "main-projects-card" style = {{ backgroundImage: `url(${ project.image })` }}>
                <p className = "main-projects-text main-projects-text1">{ project.title }</p>
                <button className = "main-projects-button" onClick = { () => openModal(project) }>View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id = "contact">
        <div className = 'contact'>
          <div className = 'wrapper'>
            <h1 className = 'main-contact-text-title'>feel free to contact me...</h1>
          </div>
          <button className = "main-contact-button" onClick = { handleEmailClick }>Email</button>
          <button className = "main-contact-button" onClick = { handleLinkedInClick }>LinkedIn</button>
          <button className = "main-contact-button" onClick = { handleGitHubClick }>GitHub</button>
        </div>
      </section>
      { selectedProject && (
        <ProjectsModal
          isOpen = { isModalOpen }
          onRequestClose = { closeModal }
          project = { selectedProject }
        />
      ) }
    </>
  );
};

export default Main;