import React, { useState } from 'react'
import Button from '../components/Button';
import ButtonGoBack from '../components/ButtonGoBack'
import { valid } from '../hok/Validation';
import { useAuth } from '../hook/useAuth';
import { API } from '../MyBack';
import cl from '../style/purshase.module.css'

function Purshase() {
    const { shopList, removeShop, buyItem, buyList, RemovebuyItem, deleteAll } = useAuth();
    const [price, setPrice] = useState(0);
    const [activeList, setActiveList] = useState(false);
    const [activeWarning, setActiveWarning] = useState(false);
    const [allOkey, setAllOkey] = useState(false);
    const [buy, setBuy] = useState([]);

    const getID = (item) => item.replace(/[^0-9]/g, '');
    const getChept = (item) => {
        const realID = item.replace(/[0-9]/g, '');
        return realID.slice(0, realID.indexOf('/'))
    }
    const getPrice = (e) => {
        const checkBox = e.target;
        const checked = checkBox.checked;
        if (checked) {
            let text = checkBox.parentElement.firstElementChild
            let name = text.getAttribute('Name')
            let id = text.getAttribute('id')
            let newItem = name + '/s' + id;
            buyItem(newItem)
            setPrice(price => price + 230)
        } else {
            let text = checkBox.parentElement.firstElementChild
            let name = text.getAttribute('Name')
            let id = text.getAttribute('id')
            let newItem = name + '/s' + id;
            RemovebuyItem(newItem)
            setPrice(price => price - 230);
        }
    }

    const handle = (e) => {
        if (price == 0) {
            setActiveWarning(true);
        } else {
            e.preventDefault()
            let form = document.querySelector('form')
            let number = valid(form.Number, 'number');
            let cvv = valid(form.cvv, 'cvv');
            let date = valid(form.Date, 'date');
            if (number && cvv && date) {
                buyItem()
                setAllOkey(true);
                setTimeout(() => {
                    form.firstElementChild.style.background = '#202124'
                    setTimeout(() => {
                        form.parentElement.style.height = '0';
                        form.parentElement.style.padding = '0';
                        setTimeout(() => {
                            const items = document.getElementsByName('items');
                            for (let index = 0; index < items.length; index++) {
                                items[index].style.cssText = 'text-decoration: line-through';
                                items[index].lastElementChild.disabled = true;
                                setTimeout(() => {
                                    deleteAll()
                                }, 1300)
                            }
                        }, 300)
                    }, 600)
                }, 900);
            }
            setActiveWarning(false)
        }
    }
    const callList = (e) => {
        if (price == 0) {
            setActiveWarning(true);
        } else {
            const parent = e.target.parentElement;
            parent.style.display = 'none';
            setActiveList(true);
            setActiveWarning(false);
        }

    }

    return (
        <div className={cl.mainWrapper}>
            <ButtonGoBack />
            <div className={cl.contentWrapper}>
                <div className={cl.header}>Выберите, что купить</div>
                <div className='itemWrapper'>
                    {shopList.length
                        ? shopList.map((item, index) => (
                            <div name='items' key={index} className={cl.wrapper}>
                                <div className={cl.name} Name={getChept(item)} id={getID(item) - 1}>{API[`${getChept(item)}`][getID(item) - 1]['name']}</div>
                                <input index={index} onChange={e => getPrice(e)} type="checkbox" id={`check${index}`} className={cl.checkBox} />
                            </div>

                        ))
                        : <div className={cl.wrapper}>Нет товаров</div>
                    }
                </div>
            </div>
            <div className={cl.button}>
                <Button onClick={e => callList(e)}>Оплатить</Button>
                <div className={cl.price}>{`${price} BYN`}</div>
            </div>
            {activeWarning
                ? <div className={cl.warningText}>Вы ничего не выбрали</div>
                : <div></div>
            }

            {activeList
                ? <div className={cl.check}>
                    {allOkey
                        ? <div className={cl.allOkey}></div>
                        : <div></div>
                    }

                    <form action="">
                        <div className={cl.inWrapper}>
                            <input name='Number' type="text" placeholder='#### #### #### ####' autoComplete="off" />
                            <div className={cl.inputText}>Номер должен состоять только из 16и цифр</div>
                        </div>
                        <div className={cl.inWrapper}>
                            <input name='cvv' type='password' placeholder='Номер СVV' autoComplete="off" />
                            <div className={cl.inputText}>CVV - 3 цифры с обратной стороны карты</div>
                        </div>
                        <div className={cl.inWrapper}>
                            <input name='Name' type="text" placeholder='Имя и фамилия владельца' autoComplete="off" />
                            <div className={cl.inputText}></div>
                        </div>
                        <div className={cl.inWrapper}>
                            <input name='Date' type="text" placeholder='Срок действия карты' autoComplete="off" />
                            <div className={cl.inputText}>Записывается в виде 08/24</div>
                        </div>
                        <div className={cl.button}>
                            <Button onClick={e => handle(e)}>Оплатить</Button>
                            <div className={cl.price}>{`${price} BYN`}</div>
                        </div>
                    </form>
                </div>
                : <div></div>
            }

        </div>
    )
}

export default Purshase