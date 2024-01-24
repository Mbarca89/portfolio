import style from "./Projects.module.css"
import poke from '../../utils/poke'
import byr from '../../utils/byr'
import rym from '../../utils/rym'
import nature from '../../utils/nature'
import icons from '../../utils/icons'
import { useState } from 'react'

const Projects = () => {

    const [project, setProject] = useState('byr')
    
    const projectHandler = (event) => {
        setProject(event.target.name)
    }

    return (
        <div className={style.projects}>
            <div className={style.projectButtons}>
                <button name='byr' onClick={projectHandler}>ByR</button>
                <button name='nature' onClick={projectHandler}>NaturEssence</button>
                <button name='pokemon' onClick={projectHandler}>Pokemon</button>
                <button name='rym' onClick={projectHandler}>Rick and Morty</button>
            </div>
            <div className={style.sliderFrame}>
                <ul style={project === 'byr' ? { marginLeft: 0 } : project === 'nature' ? { marginLeft: '-100%' } : project === 'pokemon' ? { marginLeft: '-200%' } : project === 'rym' ? { marginLeft: '-300%' } : null}>
                    <li>
                        <div className={style.slide}>
                            <div className={style.slideGallery}>
                                <img src={byr.byr1} alt=""/>
                            </div>
                            <div className={style.slideInfo}>
                                <h2>ByR Real State</h2>
                                <p>An individual project made for a friend to gain some practice. Still working on it.
                                    A site for a real state company that features filters, contact form, live chat, details view with image gallery. Also for the owner, an admin panel that allows them to publish properties with images, and details, edit and delete properties and select featured properties to appear at the home page.</p>
                                <a href="https://github.com/Mbarca89/BYR-TS-Client">Repository</a>
                                <a href="https://inmobiliariabyr.com.ar/">Deploy</a>
                                <div className={style.techStack}>
                                    <img src={icons.typeScript} alt="" />
                                    <img src={icons.react} alt="" />
                                    <img src={icons.postgres} alt="" />
                                    <img src={icons.node} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={style.slide}>
                            <div className={style.slideGallery}>
                                <img src={nature.nature1} alt="" />
                            </div>
                            <div className={style.slideInfo}>
                                <h2>NaturEssence</h2>
                                <p>Natural products marketplace. The platorm includes several key features such as user login, third-party login integration (Google), user
                                    registration with roles assigned as either customer or seller, email notufications, account activation, password
                                    reset functionality, product search with combined filters, a shopping cart system, integration with a third-party
                                    payment platorm, and the ability for users to leave product reviews.
                                    Additonally, the platorm provides an
                                    admin/seller dashboard that enables sellers to post, edit, deactivate, and delete products, while administrators
                                    have the authority to deactivate or delete both products and user accounts</p>
                                <a href="https://github.com/Mbarca89/PF-Henry-front">Front end repository</a>
                                <a href="https://github.com/Mbarca89/PF-Henry-back">Back end repository</a>
                                <a href="https://github.com/Mbarca89/PF-Henry-dash">Dashboard repository</a>
                                <a href="https://pf-henry-front-ten.vercel.app/">Deploy</a>
                                <div className={style.techStack}>
                                    <img src={icons.typeScript} alt="" />
                                    <img src={icons.react} alt="" />
                                    <img src={icons.redux} alt="" />
                                    <img src={icons.mongo} alt="" />
                                    <img src={icons.node} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={style.slide}>
                            <div className={style.slideGallery}>
                                <img src={poke.poke1} alt="" />
                            </div>
                            <div className={style.slideInfo}>
                                <h2>Pokemon</h2>
                                <p>Individual project of Henry's fullstack developer bootcamp.
                                    My first project working on my own as an student. Features user registration and login with validated forms, pagination, combined filters, search and sorting, a section to create your pokemon with image upload, edit or delete your pokemons and a "team" section where you can add your own pokemons. As a challenge on this project, we couldn't use external libraries.</p>
                                <a href="https://github.com/Mbarca89/pi-pokemon">Repository</a>
                                <a href="https://pokemon-henry.onrender.com/">Deploy</a>
                                <div className={style.techStack}>
                                    <img src={icons.javaScript} alt="" />
                                    <img src={icons.react} alt="" />
                                    <img src={icons.redux} alt="" />
                                    <img src={icons.postgres} alt="" />
                                    <img src={icons.node} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={style.slide}>
                            <div className={style.slideGallery}>
                                <img src={rym.rym2} alt="" />
                            </div>
                            <div className={style.slideInfo}>
                                <h2>Rick and Morty</h2>
                                <p>An integration project part of Henry's fullstack bootcamp. My first project ever, featuring user login with validated forms, combined filters and sorting, searchbar, and favorites.
                                    Fullstack project using React-Redux in the frontend and Nodejs in the backend with a postgreSQL database. </p>
                                <a href="https://github.com/Mbarca89/Rick-and-Morty">Repository</a>
                                <div className={style.techStack}>
                                    <img src={icons.javaScript} alt="" />
                                    <img src={icons.react} alt="" />
                                    <img src={icons.redux} alt="" />
                                    <img src={icons.postgres} alt="" />
                                    <img src={icons.node} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects