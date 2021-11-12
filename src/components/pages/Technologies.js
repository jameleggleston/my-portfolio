import { RiHtml5Line, RiCss3Line, RiNpmjsLine } from 'react-icons/ri';
import { FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'
import { BiGitBranch } from 'react-icons/bi'
import Technology from '../Technology';

const Technologies = () => {
    return (
        <section className='section grid'>
            <h2 className='section__title section__title-gradient'>Technologies</h2>
            <div className='techs__container container grid'>
                <div className='techs__content grid'>
                    <Technology icon={<RiHtml5Line className='techs__icon' />} techTitle={'Html'} techSubtitle={'Jsx, Templating with express-handlebars, keeping code semamtic and maintaining a good ui as well as keeping application accesible to a broad audience.'} />
                    <Technology icon={<RiCss3Line className='techs__icon' />} techTitle={'CSS'} techSubtitle={'CSS, experience with frameworks such as Bootstrap and bulma, keeping view dynamic and using media queries as well flex-box.'} />
                    <Technology icon={<FaJsSquare className='techs__icon' />} techTitle={'Javascript'} techSubtitle={"Experience with vanilla javascript, Using Object oriented programming, and latest versions of javascript ES6^. Making calls to API's."} />
                    <Technology icon={<FaNodeJs className='techs__icon' />} techTitle={'Nodejs'} techSubtitle={"Handling routes and creating server for application through the use of express, creating API calls from data base created from either mysql or mongodb, utilizing mongoose and sequelize to better handle changes to database through JS."} />
                    <Technology icon={<GrMysql className='techs__icon' />} techTitle={'MySQL'} techSubtitle={'Making changes to database using MySQL workbench and viewing data, set up schema files for production, establishing one to one, one to many, and many to many relationships. Able to create joins between model tables.'} />
                    <Technology icon={<SiMongodb className='techs__icon' />} techTitle={'MongoDb'} techSubtitle={'Adding data to a database through mongo shell as well as receiving data. Using aggregation pipeline in order to run certain queries within a call for data.'} />
                    <Technology icon={<BiGitBranch className='techs__icon' />} techTitle={'Git'} techSubtitle={'Creating pull requests through github, able to create and update repos through github CLI, using heroku to host applications on a server. Resolving merge conflicts and commiting fix.'} />
                    <Technology icon={<RiNpmjsLine className='techs__icon' />} techTitle={'Npm'} techSubtitle={'Utilizing many different packages in order to simplify code and resolve issues quicker opposed to using regular vanilla javascript, examples: Husky, sequelize, mongoose, morgan, inquirer, chalk, express, nodemon, jest'} />
                </div>
            </div>
        </section>
    )
}

export default Technologies