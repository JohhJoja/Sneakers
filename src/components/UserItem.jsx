import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../hook/useAuth';
import './userItem.css'

function UserItem({ str, Img, Index }) {
    const { removeShop, shopList } = useAuth();
    const navigate = useNavigate();
    const handleBuy = () => {
        navigate(`/shop/${str}/buy`)
    }
    const removeItem = () => {
        removeShop(Index);
    }
    return (
        <div className='item'>
            <div className="img_wrapp">
                <img src={`${Img}`} alt="" srcset="" />
            </div>
            <div className="text">
                <div className='textWrap'>
                    <div onClick={handleBuy}>Оплатить</div>
                    <div onClick={removeItem} >Удалить</div>
                </div></div>
        </div >
    )
}

export default UserItem