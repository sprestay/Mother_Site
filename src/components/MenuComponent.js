import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {image_src} from '../shared/baseUrl';


    function RenderMenuItem({category}) {
        return (
            <Card>
                <Link to={`/menu/${category.id}`}>
                <CardImg width="100%" object src={image_src + "categories/" + category.image} alt={category.name} />
                <CardImgOverlay>
                    <CardTitle style={{color: category.color, fontSize: "1.3em"}}>{category.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        );
    } 

    const Menu = (props) => {
        const menu = props.categories.map((cat) => {
            return (
                <div key={cat.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem category={cat} />
                </div>
            )
        });
        return (
            <div className='container'>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to ='/home'>Главная</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Категории</BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>Категории</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                            {menu}
                    </div>
                </div>
            ); 
    }


export default Menu;