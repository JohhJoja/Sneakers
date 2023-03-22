import React from 'react';
import '../components/carusel.css'

function CaruselItem(props) {
    return (
        <div className='itemWrapper'>
            <div className="CaruselItem">
                <div className='imageWrapper'>
                    <img src={require(`../img/newItems/s${props.image}.jpg`)} alt="" srcset="" />
                </div>
                <div className='textWrapper'>{props.text}</div>
            </div>
        </div>
    )
}

export default CaruselItem