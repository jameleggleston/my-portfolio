import Project from '../Project';

const Projects = () => {
    return (
        <section className='section'>
            <h2 className='section__title section__title-gradient projects__line'>My <br /> Projects</h2>
            <div className='projects__container container grid'>
                <Project project={'Redux Store'} technologies={''} description={""} link={''} github={''} gif={''} />
                <Project project={'Workout Tracker'} technologies={''} description={""} link={''} github={''} gif={''} />
                <Project project={'Mix N Match'} technologies={""} description={''} link={''} github={''} gif={''} />
                <Project project={'Note Taker'} technologies={''} description={""} link={''} github={''} gif={''} />
                <Project project={'Sky Gazer'} technologies={""} description={""} link={''} github={''} gif={''} />
                <Project project={'Weather Dashboard'} technologies={''} description={''} link={''} github={''} gif={''} />
            </div>
        </section>
    )
}

export default Projects 