import ProjectCard from "../ProjectCard/ProjectCard"
import './Project.css'
import cultstory from '../../ProjectScreenshot/Cultstory.png'
import Weather from '../../ProjectScreenshot/Weather.png'
import Todolist from '../../ProjectScreenshot/TodoList_v2.png'
import Quote from '../../ProjectScreenshot/Quote.png'
import password from '../../ProjectScreenshot/passwordGenerator.png'
import currency from '../../ProjectScreenshot/currency.png'
import TechStack from "../ProjectCard/TechStack"

export default function Project() {
    const ProjectList = [
        {
            image: Todolist,
            description: 'A robust Task Management application developed using React and the Context API. It allows users to create, edit, delete, and mark tasks as completed with a seamless interface. The application ensures data persistence across browser sessions by utilizing local storage.',
            teckstack: ['React', 'Javascript', 'Vite'],
            demolink: 'https://todo-list-v2-lake.vercel.app/',
            githublink: 'https://github.com/hartej46/TodoList_v2',
            title: ' Todo List'
        },

        {
            image: Weather,
            description: 'A modern, responsive weather application built with React and Vite. It provides real-time weather updates and forecasts for any city using a weather API, featuring a clean UI with interactive search and loading animations.',
            teckstack: ['API', "React", 'Javascript', 'Vite'],
            demolink: 'https://weather-app-32rd.vercel.app/',
            githublink: 'https://github.com/hartej46/WeatherApp',
            title: 'Weather App'
        },

        {
            image: currency,
            description: 'A dynamic currency conversion tool built with React that fetches real-time exchange rates. Users can select from various global currencies, input amounts, and swap "From" and "To" selections instantly. The app features a clean, responsive UI with a professional aesthetic.',
            teckstack: ['React', 'API', 'Javasript', 'Vite'],
            demolink: 'https://currency-convertor-amber-seven.vercel.app/',
            githublink: 'https://github.com/hartej46/currencyConvertor',
            title: 'Currency Convertor'
        },

        {
            image: Quote,
            description: 'A normal Quote generator, evry time you refresh shows a new Quote',
            teckstack: ['React', 'API', 'Javascript', 'Vite'],
            demolink: 'https://quote-generator-pink-two.vercel.app/',
            githublink: 'https://github.com/hartej46/Quote-generator',
            title: 'Quote'
        },

        {
            image: password,
            description: 'A React application that generates secure, random passwords. It features a customizable length slider (6-32 characters) and optional inclusion of numbers and special characters. The generated password can be quickly copied to the clipboard for ease of use.',
            teckstack: ['React', 'Javascript', 'Vite'],
            demolink: 'https://password-generator-omega-self.vercel.app/',
            githublink: 'https://github.com/hartej46/passwordGenerator',
            title: 'Password Generator'
        },

        {
            image: cultstory,
            description: "Whether you're a casual viewer or a hardcore film critic, CultStory provides the perfect platform to dive deep into cinematic discussions. Our goal is to foster a space where diverse opinions are celebrated and where every movie gets its moment in the spotlight. Join our growing community to participate in exclusive polls, share behind-the-scenes theories, and build your own ultimate watchlist with fellow enthusiasts.",
            teckstack: ['HTML5', 'CSS'],
            demolink: 'https://cultstory.vercel.app/',
            githublink: 'https://github.com/hartej46/CultStory',
            title: "CultStory"
        }
    ]

    return (
        <div className="Project-section">
            <div className="Project-header">
                <h1 className="Project-title">My Projects</h1>
                <p className="Project-description">
                    Explore my latest projects and discover the range of skills and technologies I work with.
                    Each project represents a unique challenge and solution.
                </p>
            </div>
            <div className="Project-grid">
                {ProjectList.map((project, index) => {
                    return (
                        < ProjectCard
                            key={index}
                            image={project.image}
                            description={project.description}
                            demolink={project.demolink}
                            githublink={project.githublink}
                            title={project.title}
                            teckstack={project.teckstack}
                        />
                    )
                })}
            </div>
        </div>
    )
}