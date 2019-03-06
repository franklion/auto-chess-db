import React from 'react';
import { Menu as AntdMenu } from 'antd';

const Menu = () =>  (
    <AntdMenu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        id="menu"
    >
        <AntdMenu.Item key="1">英雄</AntdMenu.Item>
        <AntdMenu.Item key="2">種族</AntdMenu.Item>
    </AntdMenu>
)

export default Menu;