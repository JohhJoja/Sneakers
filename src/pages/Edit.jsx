import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Button from '../components/Button';
import ButtonGoBackW from '../components/ButtonGoBackW';
import { valid } from '../hok/Validation';
import { useAuth } from '../hook/useAuth';
import cl from '../style/login.module.css'

function Edit() {
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location?.state?.from?.pathname;
    const { user, signin } = useAuth();
    const [newUser, setNewUser] = useState({ name: '', tel: '', mail: '', password: '', image: '' });

    const handle = (e) => {
        e.preventDefault()
        const form = document.querySelector('form');
        let name = valid(form.Name, 'name');
        let tel = valid(form.Tel, 'tel');
        let mail = valid(form.Mail, 'mail');
        let password = valid(form.Password, 'password');
        let Newuser = { name, tel, mail, password };
        if (name, tel, mail, password) {
            signin(Newuser, navigate(`/user`, { replace: true }))
        }
    }
    return (
        <div className={cl.mainWrapper}>
            <div className={cl.bg_color}>
                <div className={cl.goOut}>
                    <ButtonGoBackW num={2} />
                </div>
                <div className={cl.contWrapper}>
                    <div className={cl.header}>Рудактировать</div>
                    <form action="">
                        <div className={cl.inWrapper}>
                            <input
                                value={newUser.name || user.name}
                                onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                                name='Name' type="text" placeholder='Имя' autoComplete="off" />
                            <div className={cl.inputText}>Имя должно быть длиннее 1го символа</div>
                        </div>
                        <div className={cl.inWrapper}>
                            <input
                                value={newUser.tel || user.tel}
                                onChange={e => setNewUser({ ...newUser, tel: e.target.value })}
                                name='Tel' type='tel' placeholder='Номер телефона' autoComplete="off" />
                            <div className={cl.inputText}>Номер начинается с "+"</div>
                        </div>
                        <div className={cl.inWrapper}>
                            <input
                                value={newUser.mail || user.mail}
                                onChange={e => setNewUser({ ...newUser, mail: e.target.value })}
                                name='Mail' type="text" placeholder='Адрес почты' autoComplete="off" />
                            <div className={cl.inputText}>Адрес должен содержать "@", "."</div>
                        </div>
                        <div className={cl.inWrapper}>
                            <input
                                value={newUser.password || user.password}
                                onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                                name='Password' type="password" placeholder='Пароль' autoComplete="off" />
                            <div className={cl.inputText}>Пароль должен быть длиннее 4х символов</div>
                        </div>

                        <div className={cl.buttons}>
                            <Button onClick={handle}>Login</Button>
                            <Button onClick={handle}>Registrating</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit