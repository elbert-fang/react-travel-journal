import React from 'react'
import pin from '../pin.svg'

export default function Destination(props) {
    return (
        <div className='des-wrapper'>
            <div className='des-img-wrapper'>
                <img src={props.imageUrl} alt={ props.title } className="des-image" />
            </div>
            <div className="des-info">
                <div className="des-location">
                    <img src={pin} width="12" alt="location pin" />
                    <p> {props.location}</p>
                    <a href={ props.googleMapsUrl }>View on Google Maps</a>
                </div>
                <h2 className='des-title'>{ props.title }</h2>
                <p className='des-date bold'> {`${props.startDate} - ${props.endDate}`}</p>
                <p className='des-description'> { props.description } </p>
            </div>
        </div>
    )
}