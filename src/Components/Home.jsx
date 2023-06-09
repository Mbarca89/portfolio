import style from './Home.module.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import code from '../img/icons/code.png'
import icons from '../utils/icons'
import poke from '../utils/poke'
import byr from '../utils/byr'
import rym from '../utils/rym'
import top from '../img/top.png'
import gmail from '../img/gmail.png'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import { useState } from 'react'


const Home = () => {

    const [isHovered, setIsHovered] = useState(false);

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
                        <div className={`${style.iconsContainer} ${isHovered ? style.hovered : ''}`} onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} style={getRotationStyles()}>
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
                <div className={style.about}>
                    <div className={style.aboutContainer}>
                        <h1>Hello there! My name is Mauricio Barca</h1>
                        <div className={style.textContainer}>
                            <div>
                                <h2>Who am I?</h2>
                                <p>I am a person passionate about technology and always motivated to face new challenges. This is what leads me to this vast world of web development.</p>
                            </div>
                            <div>
                                <h2>My strengths</h2>
                                <p>Adaptation and learning! These are the two strong points that always accompany me in any work environment. I adapt to new tasks and people, and I learn the necessary tools for day-to-day work.</p>
                            </div>
                            <div>
                                <h2>What am I looking for:</h2>
                                <p>I am looking for a new challenge! To learn and grow professionally in a new environment, meet new people, make new friendships, and prove to myself that I am capable of anything!</p>
                            </div>
                            <div>
                                <h2>The best of me:</h2>
                                <p> I am completely responsible in everything I do, motivated and passionate about doing what I love, always seeking that personal satisfaction of solving a problem and self-improvement.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={style.title} id='skills'>
                    <h3 className={style.titleH3}>Skills</h3>
                </section>
                <div className={style.skills}>
                    <h1>This is what i've learned so far!</h1>
                    <div className={style.skillsContainer}>
                        <div className={style.gridItem}>
                            <div className={style.gridDiv}>
                                <img src={icons.html} alt="" />
                                <h4>HTML</h4>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.gridDiv}>
                                <img src={icons.css} alt="" />
                                <h4>CSS</h4>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.gridDiv}>
                                <img src={icons.javaScript} alt="" />
                                <h4>JAVASCRIPT</h4>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.gridDiv}>
                                <img src={icons.react} alt="" />
                                <h4>REACT</h4>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.gridDiv}>
                                <img src={icons.redux} alt="" />
                                <h4>REDUX</h4>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.gridDiv}>
                                <img src={icons.node} alt="" />
                                <h4>NODE</h4>
                            </div>
                        </div>
                        <div className={style.gridItem}>
                            <div className={style.gridDiv}>
                                <img src={icons.postgres} alt="" />
                                <h4>POSTGRESQL</h4>
                            </div>
                        </div>
                        <div className={style.gridItem}>
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
                    <div className={style.byr}>
                        <div className={style.byrText}>
                            <h2>BYR Real State</h2>
                            <h4>In Progress</h4>
                            <p>Features for the user: Search properties, filter, view details, live chat, contact form, send whatsapp messages directly from each property detail.</p>
                            <p>For the administrator: Admin control panel, upload, modify and delete properties, set featured properties to apperar at home page.</p>

                        </div>
                        <div className={style.byrGallery}>
                            <img className={style.byr1} src={byr.byr1} alt="" />
                            <img className={style.byr2} src={byr.byr2} alt="" />
                            <img className={style.byr3} src={byr.byr3} alt="" />
                            <img className={style.byr4} src={byr.byr4} alt="" />
                            <img className={style.byr5} src={byr.byr5} alt="" />
                        </div>
                    </div>
                    <div className={style.pokemon}>
                        <div className={style.pokemonGallery}>
                            <img className={style.poke1} src={poke.poke1} alt="" />
                            <img className={style.poke2} src={poke.poke2} alt="" />
                            <img className={style.poke3} src={poke.poke3} alt="" />
                            <img className={style.poke4} src={poke.poke4} alt="" />
                            <img className={style.poke5} src={poke.poke5} alt="" />
                        </div>
                        <div className={style.pokemonText}>
                            <h2>Pokemon</h2>
                            <h4>Fullstack</h4>
                            <p>Features: User registration and login with validated forms - pagination - combined filters, search and sorting - pokemon creator - edit or delete user pokemons - add pokemons to user's team.</p>
                        </div>
                    </div>
                    <div className={style.rym}>
                        <div className={style.rymText}>
                            <h2>Rick and Morty</h2>
                            <h4>Fullstack</h4>
                            <p>Features: User login with validated forms, combined filters and sorting, search characters from API, add or delete favorites.</p>
                        </div>
                        <div className={style.rymGallery}>
                            <img className={style.rym1} src={rym.rym1} alt="" />
                            <img className={style.rym2} src={rym.rym2} alt="" />
                            <img className={style.rym3} src={rym.rym3} alt="" />
                            <img className={style.rym4} src={rym.rym4} alt="" />
                        </div>
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
                            <img src={gmail} alt=""/>
                            <p>Mauriciobarca1989@gmail.com</p>
                        </a>
                        <a href="https://github.com/Mbarca89"  target="_blank" rel="noreferrer noopener">
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

