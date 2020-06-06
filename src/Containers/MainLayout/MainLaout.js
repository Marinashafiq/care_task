import React, { Component } from 'react';
import { SideMenu } from '../../Components/SideMenu/SideMenu';
import ChatContactsList from '../ChatContactsList/ChatContactsList';
import ChatContainer from '../ChatContainer/ChatContainer';
import './MainLayout.css';
export default class MainLayout extends Component {
    render(){
        return(
            <div className='main_grid_container'>
                <div className="main_grid_item">
                    <SideMenu />
                </div>
                <div className="main_grid_item">
                    <ChatContactsList />
                </div>
                <div className="main_grid_item">
                    <ChatContainer />
                </div>
            </div>
        )
    }
}