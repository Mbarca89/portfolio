import style from "./Skills.module.css"
import icons from '../../utils/icons'

const Skills = () => {

return (<div className={style.skills} data-aos='fade-up'>
    <h1>This is what i've learned so far!</h1>
    <div className={style.skillsContainer}>
        <div className={style.gridItem} data-aos='flip-left'>
            <div className={style.gridDiv}>
                <img src={icons.java} alt="" />
                <h4>JAVA</h4>
            </div>
        </div>
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
</div>)
}

export default Skills