import style from "./About.module.css"

const About = () => {

    return (<div className={style.about} data-aos='fade-up'>
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
    </div>)

}

export default About
