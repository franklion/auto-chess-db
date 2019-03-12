import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const { Content } = Layout;

class HerosContainer extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header />
                <Content className="page-content">
                    <div className="inner-content">
                        <h1>HerosContainer page</h1>
                    </div>
                </Content>
                <Footer />
            </Layout>
        );
    }
}

export default HerosContainer;