import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'
import Button from './Button'

function ShopItem(props) {
    const navigate = useNavigate()
    const { addShop, shopList, bought, setBought } = useAuth();

    const goBuy = (chept, item) => {
        const NewItem = chept + '/' + item;
        addShop(NewItem);
        navigate(`/shop/${props.itemLink}/buy`)
    }
    const handle = (chept, item, index) => {
        const NewItem = chept + '/' + item;
        addShop(NewItem);
        setBought(bought, bought[index] = true)
    }
    return (
        <div className={props.cl.itemWrapp}>
            <div className={props.cl.itemImg}><Link to={`/shop/${props.itemLink}`}>
                <img src={require(`../img/snikers/${props.chept}/${props.itemImg}.jpg`)} />
            </Link>
            </div>
            <div className={props.cl.itemBtnCont}>
                <div className={props.cl.itemBtn}>
                    <Button onClick={() => goBuy(props.chept, props.itemImg)}>Купить</Button>
                    <div onClick={() => handle(props.chept, props.itemImg, props.index)} className={!bought[props.index] ? props.cl.karz : props.cl.karzActive}></div>
                </div>
            </div>
        </div>
    )
}

export default ShopItem