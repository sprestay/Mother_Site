import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


// MY
import { CATEGORIES } from '../shared/data/categories';
import { TOURS } from '../shared/data/tours';
import { JIVOPIS } from '../shared/data/jivopis';
import { COMPOSITION } from '../shared/data/composition';
import { RISUNOK } from '../shared/data/risunok';
import { DPI } from '../shared/data/dpi';
import { SLOVAK } from '../shared/data/slovak';
import { POLAND } from '../shared/data/poland';
import { YAROSLAVL } from '../shared/data/yaroslavl';
import PictureList from './PicturesByCategory';
import Tours from './ToursComponent';
import Travel from './TravelPhotosComponent';


class Main extends Component{

  render () {
    const HomePage = () => {
        return (
          <Home />
        );
    }

    const PicturesForCategory = ({match}) => {
      switch(match.params.cat) {
        case "Живопись": { return (<PictureList pictures={JIVOPIS} category={"jivopis"} link={"Живопись"}/>) };
        case "Рисунок": { return (<PictureList pictures={RISUNOK} category={"risunok"} link={"Рисунок"}/>) };
        case "Композиция": { return (<PictureList pictures={COMPOSITION} category={"composition"} link={"Композиция"}/>) };
        case "Декоративно_прикладное_искусство": { return (<PictureList pictures={DPI} category={"dpi"} link={"Декоративно_прикладное_искусство"}/>) };
        default: { return (<div></div>) };
      };
    }

    const ToursForCategory = ({match}) => {
      switch(match.params.tourID) {
        case "Польша": { return (<Travel photos={POLAND} tour={"poland"} link={"Польша"} />) };
        case "Словакия": { return (<Travel photos={SLOVAK} tour={"slovak"} link={"Словакия"} />) };
        case "Ярославль": { return (<Travel photos={YAROSLAVL} tour={"yaroslavl"} link={"Ярославль"} />) };
        default: { return (<div></div>) };
      }
    }
//"url('https://cdn.pixabay.com/photo/2016/11/22/23/03/hardwood-1851071_960_720.jpg')"
    return (
      <div className="App">
          <Header />
          <TransitionGroup style={{backgroundImage: "url(zabor.jpg)", paddingBottom: "30px"}}>
            <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path="/menu" component={() => <Menu categories={CATEGORIES}/>}/>
                <Route exact path='/aboutus' component={() => <About />} />
                <Route path="/menu/:cat" component= {PicturesForCategory} />
                <Route exact path="/tours" component={() => <Tours tours={TOURS} />} />
                <Route path="/tours/:tourID" component={ToursForCategory} />
                <Redirect to="/home" />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(Main);
