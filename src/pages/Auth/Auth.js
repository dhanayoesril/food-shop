import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Navbar, NavDropdown, Nav, Row, Col } from 'react-bootstrap'
import './Auth.css'

const Auth = ({ authenticate }) => {
    const navigate = useNavigate()
    const onClick = () => {
        authenticate()
        navigate("profile")
    }
    return (
        <>
            <div className="wallpaper d-flex justify-content-center align-items-center">
                <Card className="card-login">
                    <div className="card-content">
                        {/* <p>aaaaaaaaaaa</p> */}
                        <Navbar expand="lg" className="mt-2 ms-3 me-3 navbar-login">
                            <Container>
                                <Navbar.Brand>
                                    <span className="title-login">FoodShop</span>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#home">
                                        <span className="right-nav-login">Login</span>
                                    </Nav.Link>
                                    <Nav.Link href="#link">
                                        <span className="right-nav-login">Register</span>
                                    </Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        {/* <Row fluid className="bg-danger mt-2"> */}
                        <Row fluid className="mt-2">
                            {/* <Col className="bg-success ms-4"> */}
                            <Col className="ms-4 side-display">
                                <div className="desc-login-space">
                                    <c className="desc-login">Find and order</c>
                                </div>
                                <div className="desc-login-space">
                                    <c className="desc-login">your favorite food</c>
                                </div>
                                <div>
                                    <c className="desc-login">with an easy way</c>
                                </div>
                                <div className="mt-2">
                                    <c>We provide a variety of foods, drinks, snacks, and others. You can order the food you want easily. hope you enjoy our service!</c>
                                </div>
                                {/* <Button variant="success" onClick={'aw'}>LOGIN</Button> */}
                                
                            </Col>
                     
                            <Col className="ps-5 pe-5 pt-2">
                                <div className="d-flex justify-content-center mb-3">
                                    <span className="login-text">Login to your account</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="exampleInputEmail1" className="login-label mb-1">Username </label>
                                    <input type="email" className="form-control" placeholder="Input username"  required/>
                                </div>
                                <div className="form-group mb-4">
                                    <label for="exampleInputPassword1" className="login-label mb-1">Password</label>
                                    <input type="password" className="form-control" placeholder="Imput password" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="success">
                                        <c className="button-login-text">LOGIN</c>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
                {/* <div className="img-card-style">
                    <img src={require('../../images/Auth/food.png')} className="img-card" />
                </div> */}
                <c className="footer-text">@ 2022 Yusril Sapta Wardhana</c>
            </div>
        </>
    )
};

export default Auth;
