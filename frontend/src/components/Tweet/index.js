import React from 'react';
import { Card} from 'reactstrap';
import {FiTrash2} from 'react-icons/fi';
import './Tweet.css';

export default function Tweet({tweet}) {
    return (
        <Card className="tweet">
            <button type="button" >
                <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
            <strong>{tweet.author}</strong>
            <p>{tweet.content}</p>
        </Card>
    )
}
