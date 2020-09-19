import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import { image_src } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, link_to}){
        return (
            <FadeTransform 
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>

            <Card>
                <Link to={link_to}>
                    <CardImg src={item.image} alt={item.name} />
                </Link>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
            </Card>
            </FadeTransform>
        );
}

function Home(props) {
    const me = {
        "image": image_src + 'natasha.jpg',
        "name": "Егорова Наталья",
        "description": "Педагог высшей категории, член союза \"педагогов-художников\", неоднократный участник конкурсов, олимпиад и выставок детского творчества.",
    }
    const pictures = {
        "image": image_src + "22.JPG",
        "name": "Работы учеников",
        "description": "Работы учеников разного возраста за 2018-2020 годы."
    }

    const pleners = {
        "image": image_src + "2.jpg",
        "name": "Выездные пленеры",
        "description": "Источник вдохновения и творческих идей - участие в выездных пленэрах."
    }
    return (
        <div className="container">
            <div className='row align-items-start'>

                <div className="col-12 col-md m-1">
                    <RenderCard item={me} link_to={"aboutus"} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={pictures} link_to={"menu"} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={pleners} link_to={"tours"}/>
                </div>
            </div>
        </div>
    )
}

export default Home;