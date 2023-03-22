import React from 'react'
import ShopItem from '../components/ShopItem'
import ShopList from '../components/ShopList'
import cl from '../style/shop.module.css'

function Shop() {
    return (
        <div>
            <div className={cl.title}>
                {/* Пожертвуйте на чашечку кофе */}
            </div>
            <div className={cl.wrapper}>
                <div className={cl.header}>
                    <a href="#adidas">Adidas</a>
                    <a href="#fila">File</a>
                    <a href="#nike">Nike</a>
                    <a href="#reebok">Reebok</a>
                </div>
                <a className={cl.yik} name='adidas'></a>
                <div className={cl.partWrapp}>
                    <div className={cl.partName}>Adidas</div>

                    <ShopList
                        arr={7}
                        cl={cl}
                        chept={'adidas'}
                    />

                </div>
                <a className={cl.yik} name='fila'></a>
                <div className={cl.partWrapp}>
                    <div className={cl.partName}>Fila</div>

                    <ShopList
                        arr={6}
                        cl={cl}
                        chept={'fila'}
                    />

                </div>
                <a className={cl.yik} name='nike'></a>
                <div className={cl.partWrapp}>
                    <div className={cl.partName}>Nike</div>

                    <ShopList
                        arr={8}
                        cl={cl}
                        chept={'nike'}
                    />

                </div>
                <a className={cl.yik} name='reebok'></a>
                <div className={cl.partWrapp}>
                    <div className={cl.partName}>Reebok</div>

                    <ShopList
                        arr={4}
                        cl={cl}
                        chept={'reebok'}
                    />

                </div>


                {/* <ShopItem cl={cl} itemLink={'f'} chept={'adidas'} itemImg={'s1'} /> */}

            </div>
        </div >
    )
}

export default Shop