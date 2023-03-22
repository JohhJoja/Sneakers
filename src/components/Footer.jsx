import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="foot_links">
                <div className="links_item">
                    <div className="link_img">
                        <a href="https://github.com/JohhJoja" target="_blank"><img src={require("../img/footer/y.png")} alt="" /></a>
                    </div>
                    <div className="link_name">YouTube</div>
                </div>
                <div className="links_item">
                    <div className="link_img">
                        <a href="https://github.com/JohhJoja" target="_blank"><img src={require("../img/footer/f.png")} alt="" /></a>
                    </div>
                    <div className="link_name">GitHub</div>
                </div>
                <div className="links_item">
                    <div className="link_img">
                        <a href="https://github.com/JohhJoja" target="_blank"><img src={require("../img/footer/p.png")} alt="" /></a>
                    </div>
                    <div className="link_name">Pinterest</div>
                </div>
                <div className="links_item">
                    <div className="link_img">
                        <a href="https://github.com/JohhJoja" target="_blank"><img src={require("../img/footer/t.png")} alt="" /></a>
                    </div>
                    <div className="link_name">Facebook</div>
                </div>
                <div className="links_item">
                    <div className="link_img">
                        <a href="https://github.com/JohhJoja" target="_blank"><img src={require("../img/footer/i.png")} alt="" /></a>
                    </div>
                    <div className="link_name">Instagram</div>
                </div>
            </div>
            <div className="footer_discr">
                Наша команда работает 24/7 в 150 точках по всему СНГ, чтобы вы
                смогли купить ощутить реальное высокое качество наших кроссовок
            </div>
            <div className="footer_adres">
                <div className="foot_mail">08022002dimaeliseew@gmail.com</div>
                <div className="foot_num">+375(29)120-13-34</div>
                <div className="foot_adres_adres">г. Минск, ул. Л. Беды 4, 9й этаж</div>
            </div>
        </div>
    )
}

export default Footer