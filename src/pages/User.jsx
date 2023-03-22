import React, { useEffect } from 'react'
import cl from '../style/user.module.css'
import { useAuth } from '../hook/useAuth'
import Header from '../components/Header'
import UserItem from '../components/UserItem'
import { useNavigate } from 'react-router'

function User() {
    const { user, signout, addShop, shopList, buyList } = useAuth();
    const navigate = useNavigate()
    const handle = () => {
        signout()
    }
    const goShop = () => {
        navigate('/shop')
    }
    const goEdit = () => {
        navigate('/user/edit')
    }
    return (
        <div className={cl.mainWrapper}>
            <div className={cl.wrap}>
                <div className={cl.user}>
                    <div className={cl.user_avat}>
                        <div className={cl.avatWrapper}>
                            <img src={require('../img/ico.jpg')} alt="img" srcset="" />
                        </div>
                        <div className={cl.name}>
                            {user.name || 'user'}
                        </div>
                        <div className={cl.edit}>
                            <div className={cl.editButt} onClick={goEdit}>
                                Редактировать
                            </div>
                        </div>
                        <div className={cl.signout} onClick={handle}>
                            Выйти
                        </div>
                    </div>
                </div>
                <div className={cl.contentWrapper}>
                    <div className={cl.header}>Кoрзина</div>
                    <div className={cl.content}>
                        {shopList.length
                            ? shopList.map((item, index) => {
                                let b = item.slice(0, item.indexOf('/')) + item.replace(/[^0-9]/g, '')
                                let str = `../img/snikers/${item}.jpg`
                                return <UserItem str={b} Index={index} key={item} Img={require(`../img/snikers/${item}.jpg`)} />
                            })
                            : <div className={cl.void}>
                                <div className={cl.void_text}>корзина пуста</div>
                                <div className={cl.void_button} onClick={goShop}>вперед за покупками!</div>
                            </div>
                        }
                        {/* {buyList.length
                            ? buyList.map((item, index) => {
                                let b = item.slice(0, item.indexOf('/')) + item.replace(/[^0-9]/g, '')
                                let str = `../img/snikers/${item}.jpg`
                                return <UserItem str={b} Index={index} key={item} Img={require(`../img/snikers/${item}.jpg`)} />
                            })
                            : <div className={cl.void}>
                                <div className={cl.void_text}>корзина пуста</div>
                                <div className={cl.void_button} onClick={goShop}>вперед за покупками!</div>
                            </div>
                        } */}

                    </div>
                </div>

            </div>

        </div>
    )
}

export default User