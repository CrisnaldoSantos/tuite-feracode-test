import React from 'react';
import { Card} from 'reactstrap';
import {FaTwitter} from 'react-icons/fa';
import './Tweet.css';

export default function Tweet({tweet}) {
    return (
        <Card className="tweet">
            <button type="button" >
                <FaTwitter size={14} color="#a8a8b3"/>
            </button>
            <strong>{tweet.author_name}</strong>
            <p>{tweet.content}</p>
        </Card>
    )
}
