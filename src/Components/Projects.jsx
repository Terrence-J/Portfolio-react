import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaReact, FaJava } from 'react-icons/fa6';
import { AiFillHtml5 } from 'react-icons/ai';
import { TbBrandJavascript } from 'react-icons/tb';

import drone from '../Assests/Dronez.png';
import crud from '../Assests/crud.png';
import auth from '../Assests/employee.png';
import questions from '../Assests/questions.png';
import school from '../Assests/school.png';
import pms from '../Assests/pms.png';

Modal.setAppElement('#root');

const projects = [
  {
    title: 'Dronez',
    icon: <AiFillHtml5 color='#00df9a' size={60} />,
    image: drone,
    description: ['Exploring Dronez', 'HTML & CSS'],
    link: 'https://terrence-j.github.io/Assignment-2/'
  },
  {
    title: 'React Crud',
    icon: <FaReact color='#00df9a' size={60} />,
    image: crud,
    description: ['Member management', 'React'],
    link: 'https://github.com/Terrence-J/REACT-APP'
  },
  {
    title: 'Authorization',
    icon: <FaReact color='#00df9a' size={60} />,
    image: auth,
    description: ['React', 'Local Storage'],
    link: 'https://github.com/tshimologong-react-project/employee-manager'
  },
  {
    title: 'Questions App',
    icon: <TbBrandJavascript color='#00df9a' size={60} />,
    image: questions,
    description: ['React', 'Local Storage'],
    link: 'https://delightful-sunflower-b7ce1c.netlify.app/'
  },
  {
    title: 'School App',
    icon: <FaJava color='#00df9a' size={60} />,
    image: school,
    description: ['React Frontend', 'Spring Boot Backend'],
    link: 'https://github.com/tshimologong-react-project/school-website-template'
  },
  {
    title: 'Project Management System',
    icon: <FaJava color='#00df9a' size={60} />,
    image: pms,
    description: ['Task Tracking', 'Spring Boot + React'],
    link: 'https://github.com/Terrence-J/Project-Management-System'
  }
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  return (
    <motion.div
      id='project'
      className='relative w-full py-[5rem] px-4 bg-white overflow-hidden'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Parallax floating blobs background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#00df9a] opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00df9a] opacity-10 rounded-full blur-3xl animate-pulse" />
      </motion.div>

      <h1 className='text-4xl font-bold text-center mb-16 relative z-10'>PROJECTS</h1>
      <div className='max-w-[1240px] mx-auto relative z-10'>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className='p-4'>
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} glareEnable={true} glareColor='#00df9a'>
                <motion.div
                  className='shadow-xl bg-gray-200 flex flex-col p-4 rounded-lg hover:scale-105 transition-transform duration-500'
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className='w-20 mx-auto'>{project.icon}</div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover mt-4 cursor-pointer rounded'
                    onClick={() => openModal(project)}
                  />
                  <motion.p
                    className='text-center text-2xl font-semibold mt-4'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {project.title}
                  </motion.p>
                  <div className='text-center font-medium'>
                    {project.description.map((line, idx) => (
                      <p key={idx} className='py-1 border-b border-blue-300 mx-8'>{line}</p>
                    ))}
                  </div>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#00df9a] hover:text-black transition duration-300'>
                      View Project
                    </button>
                  </a>
                </motion.div>
              </Tilt>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Preview"
        className="bg-white p-6 rounded shadow-md max-w-[500px] mx-auto mt-[10%]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      >
        {activeProject && (
          <div>
            <h2 className='text-2xl font-bold mb-4'>{activeProject.title}</h2>
            <img src={activeProject.image} alt={activeProject.title} className='w-full h-auto mb-4 rounded' />
            <p className='mb-4'>{activeProject.description.join(' • ')}</p>
            <a href={activeProject.link} target='_blank' rel='noreferrer'>
              <button className='bg-[#00df9a] text-black px-4 py-2 rounded hover:scale-105 transition'>
                Open Project
              </button>
            </a>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default Projects;

