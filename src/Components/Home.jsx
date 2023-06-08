import style from './Home.module.css'
import * as scroll from 'react-scroll'
import code from '../img/code.png'
import icons from '../utils/icons'
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
                <h3 className={style.titleH3}>Mauricio Barca</h3>
                <div className={style.buttonContainer}>
                    <button>About</button>
                    <button>Skills</button>
                    <button>Certificates</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </header>
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
                <div className={style.title}>
                    <h3 className={style.titleH3}>About Me!</h3>
                </div>
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
                <div className={style.title}>
                    <h3 className={style.titleH3}>Skills</h3>
                </div>
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
                <div className={style.title}>
                    <h3 className={style.titleH3}>Certificates</h3>
                </div>
            </div>
        </div>
    )
}

export default Home

