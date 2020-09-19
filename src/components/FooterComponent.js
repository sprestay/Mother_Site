import React from  'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer" id='footer'>
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Ссылки</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home" className="link_on_footer">Главная</Link></li>
                        <li><Link to="/aboutus" className="link_on_footer">Обо мне</Link></li>
                        <li><Link to="/menu" className="link_on_footer">Работы учеников</Link></li>
                        <li><Link to="/tours" className="link_on_footer">Выездные пленэры</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Контактная информация</h5>
                    <address>
		              ДШИ №6<br />
		              ул. Соколова-Соколенка, 6г<br />
		              Владимир<br />
		              <i className="fa fa-phone fa-lg"></i><b> +7 904 651 10 15</b><br />
		              <i className="fa fa-envelope fa-lg"></i> <a href="mailto:nat16879383@yandex.ru">
                      <b style={{color: "darkblue"}}>nat16879383@yandex.ru</b></a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/egorova.natalya"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-vk" href="https://vk.com/id28483444"><i className="fa fa-vk"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p style={{display: "inline"}}>© sprestay 2020</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;