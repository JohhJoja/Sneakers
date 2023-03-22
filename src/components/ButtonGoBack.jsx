import React from 'react'
import cl from './buttonGoBack.module.css'
import { useNavigate } from 'react-router'

function ButtonGoBack(props) {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div {...props} className={cl.wrapp} onClick={goBack}>
            <div className={cl.butt}></div>
            <div className={cl.text}>Назад</div>
        </div>

    )
}

export default ButtonGoBack