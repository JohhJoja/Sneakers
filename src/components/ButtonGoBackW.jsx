import React from 'react'
import cl from './buttonGoBackW.module.css'
import { useNavigate } from 'react-router'

function ButtonGoBackW(props) {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-props.num);
    }
    return (
        <div {...props} className={cl.wrapp} onClick={goBack}>
            <div className={cl.butt}></div>
            <div className={cl.text}>Назад</div>
        </div>

    )
}

export default ButtonGoBackW