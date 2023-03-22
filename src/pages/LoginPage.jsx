import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Button from '../components/Button';
import ButtonGoBackW from '../components/ButtonGoBackW';
import { valid } from '../hok/Validation';
import { useAuth } from '../hook/useAuth';
import cl from '../style/login.module.css'

function LoginPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location?.state?.from?.pathname;
    const { user, signin } = useAuth();

    const handle = (e) => {
        e.preventDefault()
        const form = document.querySelector('form');
        let name = valid(form.Name, 'name');
        let tel = valid(form.Tel, 'tel');
        let mail = valid(form.Mail, 'mail');
        let password = valid(form.Password, 'password');
        let purchases = [];
        let Newuser = { name, tel, mail, password };
        if (name, tel, mail, password) {
            signin(Newuser, navigate(`${fromPage}`, { replace: true }))
        }
    }
    return (
        <div className={cl.mainWrapper}>
            <div className={cl.bg_color}>
                <div className={cl.goOut}>
                    <ButtonGoBackW num={2} />
                </div>
                <div className={cl.contWrapper}>
                    <div className={cl.header}>Регистрация/Авторизация</div>
                    <form action="">
                        <div className={cl.inWrapper}>
                            <input name='Name' type="text" placeholder='Имя' autoComplete="off" />
                            <div className={cl.inputText}>Имя должно быть длиннее 1го символа</div>
                        </div>
                        <div className={cl.inWrapper}>
                            <input name='Tel' type='tel' placeholder='Номер телефона' autoComplete="off" />
                            <div className={cl.inputText}>Номер начинается с "+"</div>
                        </div>
                        <div className={cl.inWrapper}>
                            <input name='Mail' type="text" placeholder='Адрес почты' autoComplete="off" />
                            <div className={cl.inputText}>Адрес должен содержать "@", "."</div>
                        </div>
                        <div className={cl.inWrapper}>
                            <input name='Password' type="password" placeholder='Пароль' autoComplete="off" />
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

export default LoginPage