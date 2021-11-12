import RouteLink from './RouteLink';

const Footer = ({ route, text }) => {
    return (
        <footer className='footer section'>
            <RouteLink route={route} text={text} />
            <div className='footer__copy'>
                <a className='footer__copy-link' href="https://github.com/jameleggleston" target="_blank" rel='noreferrer'>&#169; Jamel Eggleston. All rights reserved</a>
            </div>
        </footer>
    )
}

export default Footer