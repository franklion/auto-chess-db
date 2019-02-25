import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content: AntdContent } = Layout;

class Content extends Component {
    render() {
        return (
            <AntdContent className="page-content" style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
            </AntdContent>
        );
    }
}

export default Content;