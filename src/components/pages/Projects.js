import Project from '../Project';

const Projects = () => {
    return (
        <section className='section'>
            <h2 className='section__title section__title-gradient projects__line'>My <br /> Projects</h2>
            <div className='projects__container container grid'>
                <Project project={'Redux Store'} technologies={''} description={""} link={'https://ancient-coast-25813.herokuapp.com/'} github={'https://github.com/jameleggleston/Redux-Store'} gif={'https://res.cloudinary.com/dtjtbzifj/image/upload/v1636745529/Screenshot1_xlszjb.jpg'} />
                <Project project={'Workout Tracker'} technologies={''} description={""} link={'https://je-workout-tracker.herokuapp.com/?id=6179ecb49b1b8a0016d39360'} github={'https://github.com/jameleggleston/Workout-Tracker'} gif={'https://res.cloudinary.com/dtjtbzifj/image/upload/v1636745645/workout_qniiqy.gif'} />
                <Project project={'Mix N Match'} technologies={""} description={''} link={'http://frozen-inlet-56976.herokuapp.com/login'} github={'https://github.com/jameleggleston/Mix-N-Match'} gif={'https://res.cloudinary.com/dtjtbzifj/image/upload/v1636746107/Login_Signup_zayq0v.png'} />
                <Project project={'Note Taker'} technologies={''} description={""} link={'https://vast-tundra-17769.herokuapp.com/'} github={'https://github.com/jameleggleston/Note-Taker'} gif={'https://res.cloudinary.com/dtjtbzifj/image/upload/v1636746285/screenshot1_v0f5jp.jpg'} />
                <Project project={'Sky Gazer'} technologies={""} description={""} link={'https://jameleggleston.github.io/Sky-Gazer/'} github={'https://github.com/jameleggleston/Sky-Gazer'} gif={'https://res.cloudinary.com/dtjtbzifj/image/upload/v1636746335/Screenshot1_lgeecn.jpg'} />
                <Project project={'Weather Dashboard'} technologies={''} description={''} link={'https://jameleggleston.github.io/Weather-Dashboard/'} github={'https://github.com/jameleggleston/Weather-Dashboard'} gif={'https://res.cloudinary.com/dtjtbzifj/image/upload/v1636746407/Dashboard_mfxsd2.gif'} />
            </div>
        </section>
    )
}

export default Projects 