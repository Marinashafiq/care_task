import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment
} from "@fortawesome/free-regular-svg-icons";
import './ChatContactsList.css';
export default class ChatContactsList extends Component {
    render(){
        return(
            <>
                <div className="contacts_list_header">
                    <h3>Conversations</h3>
                    <FontAwesomeIcon icon={faComment} size="2x" color="white"/>
                </div>
            </>
        )
    }
}