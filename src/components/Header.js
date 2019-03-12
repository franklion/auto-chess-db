import React from 'react';
import { Layout } from 'antd';
import Menu from './Menu'

const { Header: AntdHeader } = Layout;

const Header = () => (
    <AntdHeader id="header">
        <Menu />
    </AntdHeader>
)

export default Header;