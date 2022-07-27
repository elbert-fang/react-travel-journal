import React from 'react'
import pin from '../pin.svg'

export default function Destinationg(props) {
    return (
        <div>
            <img src={props.imageUrl} alt={ props.title } className="des-image" />
            <div className="des-info">
                <div className="des-location">
                    <img src={pin} alt="location pin" />
                    <a href={ props.googleMapsUrl }>View on Google Maps</a>
                </div>
                <h2 className='des-title'>{ props.title }</h2>
                <p className='des-date bold'> {`${props.startDate} - ${props.endDate}`}</p>
                <p className='des-description'> { props.description } </p>
            </div>
            <hr />
        </div>
    )
}