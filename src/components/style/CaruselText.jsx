import React from 'react'
import cl from './caruser.module.css'

function CaruselText() {
    return (
        <div className={cl.wrapper}>
            <div id={cl.itemLeft} className={cl.item}>
                <div className={cl.itemText}>SNEAKERS</div>
            </div>
            <div id={cl.itemMid} className={cl.item}>
                <div className={cl.itemText}>SNEAKERS</div>
            </div>
        </div>
    )
}

export default CaruselText