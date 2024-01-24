import style from "./Contact.module.css"
import gmail from '../../img/gmail.png'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'

const Contact = () => {

    return (
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
        </div>)

}


export default Contact