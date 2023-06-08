import style from './Home.module.css'
import * as scroll from 'react-scroll'

const Home = () => {

    return (
        <div className={style.home}>
            <header className={style.nav}>
                <h3>Mauricio Barca</h3>
                <div className={style.buttonContainer}>
                    <button>About</button>
                    <button>Skills</button>
                    <button>Certificates</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </header>
        </div>
    )
}

export default Home


