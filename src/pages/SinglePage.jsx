import React from 'react'
import { useNavigate, useParams } from 'react-router';
import Button from '../components/Button';
import ButtonGoBack from '../components/ButtonGoBack';
import { useAuth } from '../hook/useAuth';
import { API } from '../MyBack';
import cl from '../style/singlePage.module.css'

function SinglePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addShop } = useAuth()
    const getID = () => {
        //с помощью регулярного выржения получаю цифру
        const realID = id.replace(/[^0-9]/g, '');
        return realID
    }
    const getChept = () => {
        //получаю раздел, например: adidas
        const realID = id.replace(/[0-9]/g, '');
        return realID
    }
    const goBuy = () => {
        let link = getChept() + getID();
        let img = 's' + getID();
        const NewItem = getChept() + '/' + img;
        addShop(NewItem);
        navigate(`/shop/${link}/buy`);
    }
    return (
        <div>
            <ButtonGoBack />
            <div className={cl.imgWrapp}>
                <img src={require(`../img/snikers/${getChept()}/s${getID()}.jpg`)} alt="" srcset="" />
            </div>
            {/* здесь обращаюсь к переменной API, у которой есть
            поля - название бренда(получаю с помощью getChept), 
            значение каждого поля - массив объектов(получаю через getID)
            и у этих объектов два поля: text, name. Тут уже все просто -
            получаю через ключ
            */}
            <div className={cl.name}>{API[`${getChept()}`][getID() - 1]['name']}</div>
            <div className={cl.text}>{API[`${getChept()}`][getID() - 1]['text']}</div>
            <Button onClick={() => goBuy()}>
                Купить
            </Button>
        </div>
    )
}

export default SinglePage