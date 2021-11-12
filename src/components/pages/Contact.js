import { FaUserAlt, FaPhoneSquareAlt, FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr';
import { BsFillChatFill } from 'react-icons/bs';
import ContactLink from '../ContactLink';

const Contact = () => {
    return (
        <section className='section'>
            <h2 className='section__title section__title-gradient'>Contact Me</h2>
            <div className='container contact__container'>
                <form className='form' action=''>
                    <div className='row'>
                        <div className='input__group'>
                            <input className='input' type="text" id='name' /><br />
                            <label className='label' htmlFor="name"><FaUserAlt /> Your name</label>
                        </div>
                        <div className='input__group'>
                            <input className='input' type="text" id='number' /><br />
                            <label className='label' htmlFor="number"><FaPhoneSquareAlt /> Phone No.</label>
                        </div>
                    </div>
                    <div className='input__group'>
                        <input className='input' type="text" id='email' /><br />
                        <label className='label' htmlFor="email"><GrMail /> Email Id</label>
                    </div>
                    <div className='input__group'>
                        <textarea className='textarea' id="message" rows='8' ></textarea><br />
                        <label className='label' htmlFor="message"><BsFillChatFill /> Your message</label>
                    </div>
                    <button className='form__button' type='submit'>Submit <FaPaperPlane /></button>
                </form>
            </div>

            <div className='contact__links'>
                <ContactLink title={'LinkedIn:'} link={'https://www.linkedin.com/in/jamel-eggleston-4804481a4/'} icon={<FaLinkedin />} />
                <ContactLink title={'Github:'} link={'https://github.com/jameleggleston'} icon={<FaGithub />} />
                <div className='contact__row'>
                    <div>
                        <h3>Email:</h3>
                        <p>jamel.eggleston@gmail.com</p>
                    </div>
                    <a className='button button--flex' href='mailto:jamel.eggleston@gmail.com' rel='noreferrer' target='_blank'><GrMail /></a>
                </div>
            </div>

        </section>
    )
}

export default Contact