import style from './Home.module.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import code from '../img/icons/code.png'
import icons from '../utils/icons'
import top from '../img/top.png'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'


const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])

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

                <About></About>

                <section className={style.title} id='skills'>
                    <h3 className={style.titleH3}>Skills</h3>
                </section>
                
                <Skills></Skills>                

                <section className={style.title} id='projects'>
                    <h3 className={style.titleH3}>Projects</h3>
                </section>
                
                <Projects></Projects>

                <section className={style.title} id='contact'>
                    <h3 className={style.titleH3}>Contact</h3>
                </section>
                
                <Contact></Contact>            

            </div>
        </div>
    )
}

export default Home

