import React from 'react'
import { useAuth } from '../hook/useAuth';
import ShopItem from './ShopItem'

function ShopList(props) {
    const { bought, setBought } = useAuth()
    const getArr = (arr) => {
        let array = [];
        for (let index = 0; index < arr; index++) {
            array[index] = 'aaa' + index;
        }
        return array
    }
    return (
        <div className={props.cl.assortWrapper}>
            {getArr(props.arr).map((item, index) => {
                return <ShopItem index={index} cl={props.cl} key={`${props.chept}${index + 1}`} itemLink={`${props.chept}${index + 1}`} chept={props.chept} itemImg={`s${index + 1}`} />
            })}
        </div>
    )
}

export default ShopList