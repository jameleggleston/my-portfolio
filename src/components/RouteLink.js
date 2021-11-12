import { Link } from 'react-router-dom';

const RouteLink = ({ route, text }) => {
    return (
        <div className='contact__link'>
            <Link to={route}><button className='button button--flex'>{text}</button></Link>
        </div>
    )
}

export default RouteLink;