import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {image_src} from '../shared/baseUrl';

function RenderTourItem({tour}) {
    return (
        <Card>
            <Link to={`/tours/${tour.id}`}>
            <CardImg width="100%" object src={ image_src + "tours/" + tour.image} alt={tour.name} />
            <CardImgOverlay>
                <CardTitle style={{color: tour.color, fontSize: "1.3em"}}>{tour.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
} 

const Tours = (props) => {
    const tours = props.tours.map((tour) => {
        return (
            <div key={tour.id} className="col-12 col-md-5 m-1">
                <RenderTourItem tour={tour} />
            </div>
        )
    });
    return (
        <div className='container'>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to ='/home'>Главная</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Поездки</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Поездки</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                        {tours}
                </div>
            </div>
        ); 
}


export default Tours;