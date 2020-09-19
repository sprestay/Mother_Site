import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { SRLWrapper } from 'simple-react-lightbox';
import {withGetScreen} from 'react-getscreen';
import { image_src} from '../shared/baseUrl';
// import Image from 'react-graceful-image';


class PictureList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            to_print: this.props.pictures.slice(0, 10),
        }
    }

    scroll_callback() {
        if (document.getElementById("photos")) {
            if (document.getElementById("photos").offsetHeight + document.getElementById("header").offsetHeight - (2,5 * document.getElementById("footer").offsetHeight) <= document.documentElement.scrollTop)
                this.setState({to_print: this.state.to_print.concat(this.props.pictures.slice(this.state.to_print.length, this.state.to_print.length + 10))});
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scroll_callback.bind(this))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = '/menu'>Категории</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.link.replace(/_/g, " ")}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.link.replace(/_/g, " ")}</h3>
                        <hr />
                    </div>
                </div>
                <SRLWrapper>
                    <div>
                    <GridList id="photos" cellHeight={this.props.isMobile() ? 200 : 400} spacing={this.props.isMobile() ? 3 : 10} cols={this.props.isMobile() ? 2 : 4} style={{transform: "translateZ(0)"}}>
            
                            {this.state.to_print.map((tile) => (
                            <GridListTile key={tile.image} cols={tile.featured ? 2 : 1} rows={tile.featured ? 1 : 1} >
                                    <img src={image_src + this.props.category + "/" + tile.image} alt={ tile.name } />
                                        //className={tile.width / tile.height > 1 ? "imgFullHeight" : "imgFullWidth"} />
                                        <GridListTileBar
                                        title={tile.name}
                                        titlePosition="top"
                                        actionPosition="left"
                                        style={{background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}
                                        />
                            </GridListTile>
                            ))}

                    </GridList>
                    </div>
                </SRLWrapper>
            </div>
        )
    }
}


export default withGetScreen(PictureList);