import React, { Component } from 'react';
import { Layout, List } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const { Content } = Layout;

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            announcement: [
                {
                    title: '目前更新版本為1.2.1',
                },
                {
                    title: '有期待的功能或資訊想要知道，也請 mail 到站內連絡信箱',
                },
                {
                    title: '若有資訊錯誤請先 mail 到此: franklion1230@gmail.com',
                },
            ]
        }
    }
    
    render() {
        const { announcement } = this.state
        return (
            <Layout className="layout">
                <Header />
                <Content className="page-content">
                    <div className="inner-content">
                        <h1>Auto Chess DB</h1>
                        <List itemLayout="horizontal"
                              dataSource={announcement}
                              renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.title}
                                    />
                                </List.Item>
                              )}
                        />
                    </div>
                </Content>
                <Footer />
            </Layout>
        );
    }
}

export default HomeContainer;