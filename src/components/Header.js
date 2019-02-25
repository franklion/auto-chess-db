import React, { Component } from 'react';
import { Layout } from 'antd';
import Logo from './Logo'
import Menu from './Menu'

const { Header: AntdHeader } = Layout;

class Header extends Component {
    render() {
        return (
            <AntdHeader id="header">
                <Logo />
                <Menu />
            </AntdHeader>
        );
    }
}

export default Header;