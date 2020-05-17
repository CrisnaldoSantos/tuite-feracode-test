import React, { useState, useEffect } from 'react';
import {Container,Row,Col,Input, Button, Alert} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loadTweets, createTweet } from '../../store/fetchActions';
import './style.css';
import Navbar from '../../components/Navbar';
import Tweet from '../../components/Tweet';

const Avatar = localStorage.getItem('tuite-picture');
var headerStyle = {
    backgroundImage: `url(${localStorage.getItem('tuite-folder')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};

export default function Timeline(){
    const [content,setContent] = useState('');
    const [page,setPage] = useState(1);
    const currentPage = useSelector(state => state.tweet.page);
    const totalPages = useSelector(state => state.tweet.pages);
    const dispatch = useDispatch();

    const tweets = useSelector(state => state.tweet.docs);

    useEffect(()=>{
        setPage(1);
        dispatch(loadTweets(1));
    },[dispatch, page])

    function handleSubmit(e){
        if (e.keyCode !== 13) return;
        else if (content !== ''){
            e.preventDefault();
            dispatch(createTweet(content));
            setContent("");
            
        }
        
        dispatch(loadTweets(page))
        
    }


    //Função para retroceder a página
    function prevPage(){
        if (currentPage === 1) return;
        const pageNumber = currentPage - 1;
        dispatch(loadTweets(pageNumber));
    };
    
    //Função para avançar a página  
    function nextPage(){
        if (currentPage === totalPages) return;
        const pageNumber = currentPage + 1;
        dispatch(loadTweets(pageNumber));
    };


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
                                <Input value={content} onChange={e=> setContent(e.target.value)} onKeyDown={handleSubmit} type="textarea" placeholder={`O que está acontecendo, ${localStorage.getItem('tuite-username')}?`}/>
                            </form>
                        </Col>
                    </Row>    
                </Container>
            </header>
            <main className="mt-2">
                <Container>
                    {tweets.map((tweet, index) => <Tweet key={index} tweet={tweet} />)}
                </Container>
                <Container>
                    <Row>
                        <Col xs="6" align="center">
                            <Button hidden={currentPage===1} size="sm" block className="button-actions" onClick={prevPage}>Mais recentes</Button>
                        </Col>
                        <Col xs="6" align="center">
                            <Button hidden={currentPage===totalPages} size="sm" block className="button-actions" onClick={nextPage}>Mais antigos</Button>
                        </Col>
                    </Row>
                </Container>
                {tweets.length === 0 && 
                    <Alert color="primary">Sem nenhum tuite!</Alert>
                }
            </main>
        </div>
    );
}