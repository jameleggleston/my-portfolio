import React from 'react'

const ContactLink = ({ title, link, icon }) => {
    return (
        <div className='contact__row'>
            <div>
                <h3>{title}</h3>
                <p>{link}</p>
            </div>
            <a className='button button--flex' href={link} rel='noreferrer' target='_blank'>{icon}</a>
        </div>
    )
}

export default ContactLink