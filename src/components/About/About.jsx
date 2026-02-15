import me from '../../assets/me.jpeg'
import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {

  return (
      <div className="About">
        <div className='Intro'>
            <div className="written">
                <h1>About me</h1>
                <div className='line'></div>
                <h3>Who I Am</h3>
                <p className='p1'>Hi, I’m Hartej, a Computer Science undergraduate and passionate web developer. I enjoy building clean, functional, and user-friendly web applications that focus on both performance and usability.</p>

        <p className='p2'>Currently, I’m strengthening my foundations in web development and software engineering, working with technologies like JavaScript, React, and Pyhton to build real-world projects. I love breaking down complex problems into simple, efficient solutions and continuously improving my coding skills through hands-on learning.</p>

        <p className='p2'>I believe that good software is not just about writing code, but about writing code that solves real problems effectively. My goal is to grow as a full-stack developer and create impactful digital experiences that are reliable, scalable, and well-designed.</p>
                    </div>
            <div>
                <img src={me} alt="" className='me' />
            </div>
        </div>
        <div className="many-card">
                 <div className="card scroll">
            <h2>My approch</h2>
            <ul>
                <li>
                    User centered design is at the core of everything I create
                </li>
                <li>
                    I prioritize performance and accessibility in all my projects
                </li>
                <li>
                    Clean, maintainable code is essential for successful long-term projects
                </li>
            </ul>
        </div>
        <div className='education'>

            <h1 className='education-title scroll'>Education</h1>
            <div className='card'>
                <div className='info'>
                    <h1>B.Tech in Computer Science and Engineering (CSE)</h1>
                    <p className=' text-purple-500 text-3xl '>2025-2029</p>
                </div>
                <div className='more-info'>
                    <h3>Newton School of technology</h3>
                    <p>Pursuing a Bachelor’s degree in Computer Science Engineering, with a strong focus on software development, data structures and algorithms, web technologies, and hands-on, real-world project learning.</p>
                </div>
            </div>
            <div className="card">
                <div className="info">
                    <h1>Higher Secondary School (Jr. college)</h1>
                    <p  className='text-purple-500 text-3xl' >2022-2024</p>
                </div>
                <div className="more-info">
                    <h3>Deep jr. college</h3>
                    <p>Completed Class 11–12 with a strong foundation in Mathematics, Physics, and Computer Science.</p>
                </div>
            </div>
            <div className="card">
                <div className="info">
                    <h1>Schooling</h1>
                    <p  className='text-purple-500 text-3xl' > 2009-2022</p>
                </div>
                <div className="more-info">
                    <h3>B.M.T. English Medium High School</h3>
                    <p>Completed primary and secondary schooling with a focus on overall academic development.</p>
                </div>
            </div>
        </div>
        </div>
       
      </div>
  );
}
