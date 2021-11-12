import { RiLinksLine, RiGithubLine } from 'react-icons/ri';

const Project = ({ project, technologies, description, link, github, gif }) => {
    return (
        <article className='projects__card'>
            <div className='projects__content'>
                <img className='projects__img' src={gif} alt='project gif' />
                <h3>{project}</h3>
                <h4>Technologies:</h4>
                <p>{technologies}</p>
                <h4>Description:</h4>
                <p>
                    {description}
                </p>
                <a href={link} target='_blank' rel='noreferrer' className='button button--flex projects__button'><RiLinksLine /></a>
                <a href={github} target='_blank' rel='noreferrer'><RiGithubLine className='button button--flex projects__button2' /></a>
            </div>
        </article>
    )
}

export default Project