import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        console.log(this.state.isModalOpen)
        this.setState({ isModalOpen: !this.state.isModalOpen });

        console.log(this.state.isModalOpen)
    }


    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value);
        event.preventDefault();
    }

    render () {
        return (
        <div id="header">
        <React.Fragment>
            <Navbar dark expand="md">
                <div className='container'>
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href='/'>
                        <img src="assets/images/logo.png" height="30" width="41" alt="Егорова Наталья" style={{marginRight: '20px'}} />
                    </NavbarBrand>
                    <Collapse isOpen = {this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg">  Главная</span></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg">  Обо мне</span></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/menu"><span className="fa fa-image fa-lg">  Работы моих учеников</span></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/tours"><span className="fa fa-camera-retro fa-lg">  Выездные пленеры</span></NavLink>
                            </NavItem>

                        </Nav>
                        {/* <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className='fa fa-sigh-in fa-lg'>Войти</span>
                                </Button>
                            </NavItem>
                        </Nav> */}
                    </Collapse>
                </div>
            </Navbar>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type='text' id='username' name='username' innerRef={(input) => this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type='password' id='password' name='password' innerRef={(input) => this.password = input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type='submit' value='submit' className="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
        </div>
        )
    }
}

export default Header