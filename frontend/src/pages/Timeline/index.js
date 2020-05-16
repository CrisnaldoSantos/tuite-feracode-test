import React, { Fragment } from 'react';
import {Container,Row,Col,Input} from 'reactstrap'
import './style.css';
import Folder from '../../assets/folder.jpg'
import Avatar from '../../assets/avatar.jpg'
import Navbar from '../../components/Navbar';
import Tweet from '../../components/Tweet';

var headerStyle = {
    backgroundImage: `url(${Folder})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};

const data = {
    author:'@crisnaldo',
    content:'Testando texto do tweet'
}
export default function Timeline(){    
    return(
        <div className="timeline-wrapper">
            <Navbar/>
            <header style={headerStyle}>
                <Container className="mb-3 mx-auto">
                    <Row align="center">
                        <Col xs='12' sm='3' lg='2' className="mt-3">
                            <img src={Avatar}  alt="avatar" />
                            
                        </Col>
                        <Col xs='12' sm='9' lg='10' className="mt-3">
                            <form className="tweet-form">
                                <Input type="textarea" placeholder="O que está acontecendo?"/>
                            </form>
                        </Col>
                    </Row>    
                </Container>
            </header>
            <main className="mt-2">
            <Fragment>
                <Container>
                    <Tweet tweet={data}/>
                    <Tweet tweet={data}/>
                    <Tweet tweet={data}/>
                    <Tweet tweet={data}/>
                    <Tweet tweet={data}/>
                    <Tweet tweet={data}/>
                </Container>
            </Fragment>
            </main>
        </div>
    );
}