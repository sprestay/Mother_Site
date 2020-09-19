import React from 'react';
import {withGetScreen} from 'react-getscreen';
import {Link} from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {image_src} from '../shared/baseUrl';

class Travel extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = '/tours'>Категории</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.link.replace(/_/g, " ")}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.link.replace(/_/g, " ")}</h3>
                        <hr />
                    </div>
                </div>
               <ImageGallery items={this.props.photos.map((photo) => {return {"original": image_src + this.props.tour + "/" + photo.image,
                                                                                "thumbnail": image_src + this.props.tour + "/" + photo.image,}})} />
            </div>
        )
    }
}


export default withGetScreen(Travel)