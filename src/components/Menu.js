import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Menu as AntdMenu } from 'antd';
import Logo from './Logo'

const Menu = withRouter(props => {
    const { location } = props
    console.log(props)
    return (
        <AntdMenu
            id="menu"
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            
        >
            <AntdMenu.Item key="/">
                <Link to="/"><Logo /></Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="/heros">
                <Link to="/heros">英雄</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="/races">
                <Link to="/races">種族</Link>
            </AntdMenu.Item>
        </AntdMenu>
    )
})

export default Menu;