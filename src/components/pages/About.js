// import { FaFile } from 'react-icons/fa'

const About = () => {
    return (
        <section className='home section'>
            <div className='home__container container grid'>
                <div>
                    <img src="https://res.cloudinary.com/dtjtbzifj/image/upload/v1636739785/Headshot2_nhpwkf.jpg" alt="Home portrait" className='home__img' />
                </div>

                <div className='home__data'>
                    <div className='home__header'>
                        <h1 className='home__title'>Jamel</h1>
                        <h2 className='home__subtitle'>Eggleston</h2>
                    </div>

                    <div>
                        <h3 className='home__title-description'>Overview</h3>
                        <p className='home__description'>
                            Full-Stack Web Developer, a graduate of `The Coding Bootcamp At UNC-Chapel Hill` with a special appreciation for back-end projects and a life-long dedication to learning. Determined to improve in all aspects of life and known amongst peers for having an eye for detail and being skilled at problem-solving no matter the complexity of the project.
                        </p>
                        {/* going to add my resume here */}
                        {/* <a href={Pdf} target='_blank' rel="noreferrer" className='button button--flex' download>
                            <span className='button--flex'>
                                <FaFile className='button__icon' /> My resume
                            </span>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About