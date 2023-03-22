import React from 'react'
import cl from './button.module.css'

function Button(props) {
    return (
        <div {...props} className={cl.button}>{props.children}</div>
    )
}

export default Button