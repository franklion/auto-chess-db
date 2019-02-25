import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer: AntdFooter } = Layout;

class Footer extends Component {
    render() {
        
        return (
            <AntdFooter style={{ textAlign: 'center' }}>© 2019. This site is fan-made and not affiliated</AntdFooter>
        );
    }
}

export default Footer;