import React from 'react'

const Technology = ({ icon, techTitle, techSubtitle }) => {
    return (
        <div className='techs__data'>
            {icon}
            <h3 className='techs__title'>{techTitle}</h3>
            <span className='techs__subtitle'>{techSubtitle}</span>
        </div>
    )
}

export default Technology