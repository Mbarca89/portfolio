import style from './Home.module.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import code from '../img/icons/code.png'
import icons from '../utils/icons'
import poke from '../utils/poke'
import byr from '../utils/byr'
import rym from '../utils/rym'
import nature from '../utils/nature'
import top from '../img/top.png'
import gmail from '../img/gmail.png'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [project, setProject] = useState('byr')

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const getRotationStyles = () => {
        if (!isHovered) {
            return {
                animationPlayState: 'paused',
                transform: 'rotate(0deg)'
            };
        }
    };

    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])

    const projectHandler = (event) => {
        setProject(event.target.name)
    }

    return (
        <div className={style.home}>
            <header className={style.nav}>
                <h1>Mauricio Barca</h1>
                <div className={style.buttonContainer}>
                    <Link to='about' smooth={true} duration={500}>
                        <button>About</button>
                    </Link>
                    <Link to='skills' smooth={true} duration={500}>
                        <button>Skills</button>
                    </Link>
                    <Link to='projects' smooth={true} duration={500}>
                        <button>Projects</button>
                    </Link>
                    <Link to='contact' smooth={true} duration={500}>
                        <button>Contact</button>
                    </Link>
                </div>
            </header>
            <img className={style.topArrow} src={top} alt="" onClick={scroll.scrollToTop} />
            <div className={style.body}>
                <div className={style.welcome}>
                    <div className={style.intro}>
                        <h1>Full Stack</h1>
                        <h1>Web Developer</h1>
                        <h4>JavaScript | React | Node | SQL</h4>
                        <p>Full Stack Web Developer recently graduated from Henry bootcamp in 2023. I am highly enthusiastic and motivated to continue learning and consistently grow in my field.</p>
                    </div>
                    <div className={style.images}>
                        <img className={style.code} src={code} alt="" />
                        {/* <div className={`${style.iconsContainer} ${isHovered ? style.hovered : ''}`} onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} style={getRotationStyles()}> */}
                        <div className={`${style.iconsContainer} ${style.hovered}`}>
                            <img className={style.icons1} src={icons.css} alt="" />
                            <img className={style.icons2} src={icons.javaScript} alt="" />
                            <img className={style.icons3} src={icons.react} alt="" />
                            <img className={style.icons4} src={icons.redux} alt="" />
                            <img className={style.icons5} src={icons.postgres} alt="" />
                            <img className={style.icons6} src={icons.git} alt="" />
                            <img className={style.icons7} src={icons.node} alt="" />
                            <img className={style.icons8} src={icons.html} alt="" />
                        </div>
                    </div>
                </div>
                <section className={style.title} id='about'>
                    <h3 className={style.titleH3}>About Me!</h3>
                </section>

                <div className={style.about} data-aos='fade-up'>
                    <div className={style.aboutContainer}>
                        <h1>Hello there! My name is Mauricio Barca</h1>
                        <div className={style.textContainer}>
                            <div data-aos='fade-right'>
                                <h2>Who am I?</h2>
                                <p>I am a person passionate about technology and always motivated to face new challenges. This is what leads me to this vast world of web development.</p>
                            </div>
                            <div data-aos='fade-left'>
                                <h2>My strengths</h2>
                                <p>Adaptation and learning! These are the two strong points that always accompany me in any work environment. I adapt to new tasks and people, and I learn the necessary tools for day-to-day work.</p>
                            </div>
                            <div data-aos='fade-right'>
                                <h2>What am I looking for:</h2>
                                <p>I am looking for a new challenge! To learn and grow professionally in a new environment, meet new people, make new friendships, and prove to myself that I am capable of anything!</p>
                            </div>
                            <div data-aos='fade-left'>
                                <h2>The best of me:</h2>
                                <p> I am completely responsible in everything I do, motivated and passionate about doing what I love, always seeking that personal satisfaction of solving a problem and self-improvement.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={style.title} id='skills'>
                    <h3 className={style.titleH3}>Skills</h3>
                </section>
                <div className={style.skills} data-aos='fade-up'>
                    <h1>This is what i've learned so far!</h1>
                    <div className={style.skillsContainer}>
                        <div className={style.gridItem} data-aos='flip-left'>
                            <div className={style.gridDiv}>
                                <img src={icons.html} alt="" />
                                <h4>HTML</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left' data-aos-delay='100'>
                            <div className={style.gridDiv}>
                                <img src={icons.css} alt="" />
                                <h4>CSS</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left' data-aos-delay='200'>
                            <div className={style.gridDiv}>
                                <img src={icons.javaScript} alt="" />
                                <h4>JAVASCRIPT</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left' data-aos-delay='300'>
                            <div className={style.gridDiv}>
                                <img src={icons.typeScript} alt="" />
                                <h4>TYPESCRIPT</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left'>
                            <div className={style.gridDiv}>
                                <img src={icons.react} alt="" />
                                <h4>REACT</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left' data-aos-delay='100'>
                            <div className={style.gridDiv}>
                                <img src={icons.redux} alt="" />
                                <h4>REDUX</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left' data-aos-delay='100'>
                            <div className={style.gridDiv}>
                                <img src={icons.angular} alt="" />
                                <h4>ANGULAR</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left' data-aos-delay='200'>
                            <div className={style.gridDiv}>
                                <img src={icons.node} alt="" />
                                <h4>NODE</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left' data-aos-delay='300'>
                            <div className={style.gridDiv}>
                                <img src={icons.postgres} alt="" />
                                <h4>POSTGRESQL</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left'>
                            <div className={style.gridDiv}>
                                <img src={icons.mongo} alt="" />
                                <h4>MONGODB</h4>
                            </div>
                        </div>
                        <div className={style.gridItem} data-aos='flip-left' data-aos-delay='100'>
                            <div className={style.gridDiv}>
                                <img src={icons.git} alt="" />
                                <h4>GIT</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={style.title} id='projects'>
                    <h3 className={style.titleH3}>Projects</h3>
                </section>
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
                                        <img src={byr.byr1} />
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
                                        <img src={nature.nature1} />
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
                                        <img src={poke.poke1} />
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
                                        <img src={rym.rym2} />
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
                <section className={style.title} id='contact'>
                    <h3 className={style.titleH3}>Contact</h3>
                </section>
                <div className={style.contactContainer}>
                    <h2>Thank you for visiting my portfolio!</h2>
                    <div className={style.contactText}>
                        <p>Sometimes it can be really difficult to appreciate the real value of a person through words. So please feel free to contact me if you want to know more, you won't regret it!</p>
                    </div>
                    <div className={style.contactInfo}>
                        <a href='mailto:mauriciobarca1989@gmail.com' >
                            <img src={gmail} alt="" />
                            <p>mauriciobarca1989@gmail.com</p>
                        </a>
                        <a href="https://github.com/Mbarca89" target="_blank" rel="noreferrer noopener">
                            <img src={github} alt="" />
                            <p>/Mbarca89</p>
                        </a>
                        <a href="https://www.linkedin.com/in/mbarca89/" target="_blank" rel="noreferrer noopener">
                            <img src={linkedin} alt="" />
                            <p>/mbarca89</p>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

