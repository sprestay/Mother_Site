import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { image_src } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';
import { SRLWrapper } from 'simple-react-lightbox';
import Gallery from 'react-photo-gallery';
import { DIPLOMAS } from '../shared/data/diplomas';
import Pagination from "react-js-pagination";


class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            to_print: DIPLOMAS.slice(0, 10),
            activePage: 1,
        }
    }

    GetDiploma(diplomas) {
        let i = 0;
        var current = [];
        while (i < diplomas.length) {
            current.push({"src": image_src + "diplomas/" + diplomas[i].src,
                            "width": diplomas[i].width * 10,
                            "height": diplomas[i].height * 10,});
            i++;
        }
        return <Gallery photos={current} />
    }

    handlePageChange(PageNumber) {
            this.setState({to_print: DIPLOMAS.slice(PageNumber * 10 - 10, PageNumber * 10),
                            activePage: PageNumber,})
    }

    render () {
    const diplom_rows = this.GetDiploma(this.state.to_print);

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Главная</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Обо мне</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Обо мне</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
            <div className="col-12 col-md-5">
                    <Card>
                        <CardImg src={image_src + "natasha.jpg"} />
                    </Card>
                </div>
                <div className="col-12 col-md-7 contactUs">
                    <h2>Обо мне</h2>
                    <p>Окончила художественно-графический факультет ВГПУ им. Лебедева-Полянского с красным дипломом. С 2000 года преподаю рисунок, живопись, композицию и декоративно-прикладное искусство
                        во владимирский ДШИ №6.<br /><br /> В институте активно занималась керамикой, после его окончания увлеклась декоративной работой с кожей. 
                        Неоднократно участвовала в конкурсах педагогического мастерства, занимая призовые места. В 2005 году за высокие профессиональные достижения в педагогической деятельности
                        получила звание педагога высшей квалификационной категории.
                    </p>
                    <p>
                        Более 70% моих выпускников выбирают своей профессией художественные 
                        специальности: дизайнер, архитектор, преподаватель изобразительного искусства, реставратор. 
                        Продолжают своё обучение в ведущих вузах страны (Санкт-Петербрургский институт дизайна и прикладного искусства,
                        ГИТИС, ВШЭ)
                    </p>
                    <p>
                        Являюсь членом Международной творческой общественной организации «Союз педагогов-художников».
                        Разработала авторский курс по работе с кожей для учащихся старших классов художественной школы.
                    </p>
                    <p>
                        Неоднократно была организатором выездных пленэров:
                        <br />
                        <ul style={{marginTop: "10px"}}>
                            <li> Крым, 2004 год</li>
                            <li> Международный пленэр юных художников в Польше (Закопане), 2014 год</li>
                            <li> Участие в программе «РОСПЛЕНЭР» (Ярославль, Кострома, Переяславль-Залесский), 2018 год </li>
                            <li> Международная Арт-Олимпиада в Словакии, 2020 год</li>
                        </ul>
                    </p>
                </div>

                <div className="col-12" style={{marginTop: "20px"}}>
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Удивительные композиции можно создавать не только с помощью карандашей, 
                                кистей и красок, но и используя самые неожиданные вещи. часто они находятся 
                                рядом с нами, в повседневной жизни. стоит только
                                обратить на них своё внимание – и они подарят радость творчества</p>
                                <footer className="blockquote-footer">
                                <cite title="Source Title">Егорова Наталья Владимировна, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12" style={{marginBottom: "20px", textAlign: "center"}}>
                    <h2>Дипломы, грамоты, награды</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        <Stagger in>
                            <SRLWrapper>{diplom_rows}</SRLWrapper>
                        </Stagger>
                    </Media>
                </div>
                <div style={{marginLeft: "auto", marginRight:"auto"}}>
                    <Pagination
                    activePage={this.state.activePage}
                    itemClass="page-item"
                    linkClass="page-link"
                    itemsCountPerPage={10}
                    totalItemsCount={DIPLOMAS.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </div>
        </div>
    );
    }
}

export default About;    