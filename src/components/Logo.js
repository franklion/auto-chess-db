import React, { Component } from 'react';
import LogoImg from '../assets/images/logo.svg';

class Logo extends Component {
    render() {
        return (
            <div id="logo" >
                <img src={LogoImg} alt=""/>
            </div>
        );
    }
}

export default Logo;