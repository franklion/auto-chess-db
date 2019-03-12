import React, { Component } from 'react';
import { Layout } from 'antd';
// import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

class Temp extends Component {
    render() {
        return (
            <Layout className="layout">
                {/* <Header /> */}
                <Content className="page-content">
                    <div className="inner-content">
                        <h1>HomeContainer</h1>
                    </div>
                </Content>
                <Footer />
            </Layout>
        );
    }
}

export default Temp;