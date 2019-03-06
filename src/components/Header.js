import React from 'react';
import { Layout } from 'antd';
import Logo from './Logo'
import Menu from './Menu'

const { Header: AntdHeader } = Layout;

const Header = () => (
    <AntdHeader id="header">
        <Logo />
        <Menu />
    </AntdHeader>
)

export default Header;