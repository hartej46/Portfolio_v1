import github from '../../assets/github-icon-1-logo-svgrepo-com.svg'
import demo from '../../assets/eye-svgrepo-com.svg'
import './ProjectCard.css'
import TechStack from './TechStack'

export default function ProjectCard({ image, description, teckstack, demolink, githublink, title }) {
    return (
        <div className="ProjectCard">
            <div className="image-section">
                <img src={image} alt={title} />
                <div className="links">
                    <a href={githublink} target="_blank" >
                        <img src={github} alt="GitHub" />
                    </a>
                    <a href={demolink} target="_blank" >
                        <img src={demo} alt="demo" />
                    </a>
                </div>
            </div>
            <div className="content-section">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <div className="techstack">
                    {teckstack && teckstack.map((tech, index) => (
                        <TechStack key={index} teck={tech} />
                    ))}
                </div>
                <a href={demolink} target="_blank"className="view_project">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
            </div>
        </div>
    )
}