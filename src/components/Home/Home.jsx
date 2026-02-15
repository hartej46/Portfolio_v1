import React from 'react'
import TechCard from '../TechCard/TechCard';
import { Link } from 'react-router-dom';
import './Home.css'

import Redux from '../../techImg/1_Vo5RDpNkOsfDn8sx06mthA.png'
import ReactImg from '../../techImg/React_Logo.png'
import Python from '../../techImg/Python-logo-notext.svg.webp'
import HTML from "../../techImg/img_html.jpg"
import CSS from '../../techImg/CSS-Logo-2011.png'
import JS from '../../techImg/download.png'
import PG from '../../techImg/elephant.png'
import Neon from '../../techImg/77690634.png'
import cpp from '../../techImg/ISO_C++_Logo.svg.png'

export default function Home() {
    const handleClick = () => navigate('../Contacts/Contact.jsx')
    const techStack = [
        { img: Redux, alternative: "Redux Logo", lang: "Redux" },
        { img: ReactImg, alternative: "React Logo", lang: "React" },
        { img: Python, alternative: "Python Logo", lang: 'Python' },
        { img: HTML, alternative: "HTML Logo", lang: " HTML" },
        { img: CSS, alternative: 'CSS Logo', lang: "CSS" },
        { img: JS, alternative: 'JS Logo', lang: "Javascript" },
        { img: PG, alternative: 'Postgress Logo', lang: "Postgress" },
        { img: Neon, alternative: 'Neon Logo', lang: "NeonDB" },
        { img: cpp, alternative: 'C++ Logo', lang: "C++" }
    ]

    return (
        <>
            <div className='home'>
                <div className="upper-section">
                    <div className="work">
                        <div>
                            <div className="green"></div>
                            <p className="status">
                                Available for work
                            </p>
                        </div>

                    </div>
                    <h1 className="name">Hartejsingh Sandhu's <br /> <span>Portfolio</span></h1>
                    <div className="info flex gap-1.5">
                        <button> <a href="#">Download Resume</a> </button>
                        <button> <a href='/contact'>Explore My Work</a></button>
                    </div>
                </div>
                <div className='tech'>

                </div>
                <div className="below-section">
                    {techStack.map((tech, index) => {
                        return (
                            <TechCard
                                key={index}
                                img={tech.img}
                                alternative={tech.alternative}
                                lang={tech.lang}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )

}
